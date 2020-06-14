const { execSync } = require('child_process')
const NetlifyAPI = require('netlify')
const secrets = require('./secrets.json')

const client = new NetlifyAPI(secrets.netlify)

// Make it do
;(async function () {
  const sites = await client.listSitesForAccount({
    account_slug: 'cigwebadmin',
  })
  const site = sites.find((s) => s.name === 'cigarette-racing-preview')
  const currentBranch = execSync('git branch --show-current').toString().trim()

  if (!currentBranch.startsWith('delivery/')) {
    console.log('Delivery branches must begin with the `delivery/` prefix.')
    process.exit(1)
  }

  if (site.build_settings.allowed_branches.includes(currentBranch)) {
    console.log(`"${currentBranch}" is already a deploy branch.`)
    process.exit()
  }

  site.build_settings.allowed_branches.push(currentBranch)
  await client.updateSite({ site_id: site.id, body: site })
  console.log(`Branch "${currentBranch}" added successfully.`)
})()
