# CraftCMD and DB Configuration

[Craft Admin Interface](http://localhost:17010/admin) | [PhpMyAdmin](http://localhost:17013/)

## Running the Backend Stack

Start the server:

```shell
docker-compose up

# OR to run as a daemon

docker-compose up -d
```

Use Craft:

- Navigate to http://localhost:17010/admin
- Log in using the `CRAFTCMS_USERNAME` and `CRAFTCMS_PASSWORD` credentials from `docker-compose.yml`

Stop the server:

```shell
docker-compose down

# OR to delete ALL local data

docker-compose down -v
```

## Pulling Production Data

TBD
