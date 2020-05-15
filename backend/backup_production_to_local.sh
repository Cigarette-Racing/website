cyanColor="\033[0;36m"
resetColor="\033[0m"

function announce() {
  echo -e "$cyanColor> $1$resetColor"
}

function cleanup() {
  # Remove the SQL file if it exists
  [ -e "$sql_file" ] && rm "$sql_file"
  # Kill the SSH tunnel
  kill "$tunnel_pid"
  exit
}

trap cleanup SIGINT

timestamp=`date -u +%Y-%m-%dT%H:%M:%S`
sql_file="backups/dump_$timestamp.sql"
zip_file="backups/production-database-backup_$timestamp.zip"

announce "Opening SSH tunnel in subshell"
(ssh -N -L 17012:cigracing.mysql.us1.frbit.com:3306 cigracing.606bv0yjt2715ee7@tunnel.us1.frbit.com) &

announce "Setting tunnel PID"
tunnel_pid="$!"

announce "Sleeping to let the SSH tunnel connect"
sleep 3

announce "Dumping database"
mysqldump --defaults-extra-file=mysql_config.cnf --column-statistics=0 cigracing > "$sql_file"

announce "Creating zip file of dump"
zip "$zip_file" "$sql_file"

announce "Cleaning up"
cleanup
