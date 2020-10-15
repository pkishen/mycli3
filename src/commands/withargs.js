const {Command, flags} = require('@oclif/command')

class WithargsCommand extends Command {
  static args = [
    {name: 'firstArg'},
    {name: 'secondArg'},
  ]
  
  async run() {
    const {flags} = this.parse(WithargsCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from /Users/parthukishen/Documents/ML/oclif-my/mycli3/src/commands/withargs.js`)
     // can get args as an object
     
     const {args} = this.parse(WithargsCommand)
    
     console.log(`running my command with args: ${args.firstArg}, ${args.secondArg}`)
     // can also get the args as an array
     const {argv} = this.parse(WithargsCommand)
     console.log(`running my command with argv: ${argv[0]}, ${argv[1]}`)


  }
}

WithargsCommand.description = `Describe the command here
...
Extra documentation goes here
`

WithargsCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = WithargsCommand
