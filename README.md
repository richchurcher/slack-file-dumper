# slack-file-dumper

Command-line Slack file manager written in Node. Helps to manage your team's storage limit by backing up files in storage, and deleting files older than the provided age if you choose. This could be run as a regular job, or used sporadically to deal with those pesky "Your team is over its storage limit" messages.


## Install

```shell
npm install -g slack-file-dumper
```

If you're using it locally or as part of a larger program, it will load `SFD_SLACK_TOKEN` from an `.env` file:

```shell
SFD_SLACK_TOKEN=ABCDEFG0123456789
```

Otherwise, you'll need to export the environment variable in the shell, or provide it via the `-t` or `--token` parameter.


## Usage

```shell
# Dump all files older than 6 months to current directory
sfd -m 6 .

# Older than one year and 3 months, output to ~/backup
sfd -m 15 ~/backup

# Older than one year, and delete after dumping (will ask for confirmation)
sfd -m 12 -d .

# Older than 3 months, delete with no confirmation (suitable for automation)
sfd -m 3 -d -y .

# Older than 2 months, use specified token
sfd -m 2 -t ABCDEFG0123456789 .
```

Note that Slack tokens are team-specific, so there is no team specified in the command line arguments.

