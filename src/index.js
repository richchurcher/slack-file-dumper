import minimist from 'minimist'

function help () {
  const help = `
    Usage
      $ sfd <output path>

    Options
      -d, --delete    Delete target files after dumping
                      (will ask for confirmation first).
      -l, --list      Lists files but takes no other action.
                      Ignores -d and -y options, does not dump file.
      -m, --months    Age of file to target.
      -t, --token     Slack API token (overrides SFD_SLACK_TOKEN).
      -y, --yes       Skips confirmation (for use in scripts).

    Examples
      $ sfd -m 6 .
      $ sfd -m 15 ~/backup
      $ sfd -m 12 -d .
      $ sfd -m 3 -d -y .
      $ sfd -m 2 -t ABCDEFG0123456789 .

    Note that Slack tokens are team-specific, so there is no team
    specified in the command line arguments.
  `
  console.log(help)
}

function sfd () {
  const argv = minimist(process.argv, {
    alias: {
      d: 'delete',
      l: 'list',
      m: 'months',
      t: 'token',
      y: 'yes'

    },
    boolean: [
      'delete',
      'list',
      'yes'
    ],
    string: [
      'path',
      'token'
    ]
  })

  if (argv.list) {
    return console.log('Yup', argv)
  }
  help()
}

export default sfd
