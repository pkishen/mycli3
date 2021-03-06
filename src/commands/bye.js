const {Command, flags} = require('@oclif/command');
var shell = require('shelljs');

class ByeCommand extends Command {
  async run() {
    const {flags} = this.parse(ByeCommand)
    const name = flags.name || 'PK'
    this.log(`hello ${name} from /Users/parthukishen/Documents/ML/oclif-my/mycli3/src/commands/bye.js`)
    shell.exec('sh mycli3/src/commands/scripts/test.sh');
    console.log('second shell');
    shell.exec('sh mycli3/scripts/test.sh');
  }
}

ByeCommand.description = `Describe the command here
...
Extra documentation goes here
`

ByeCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = ByeCommand
