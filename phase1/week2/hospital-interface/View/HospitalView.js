'use strict'

class HospitalView {
  // Show error message only
  static showError (message) {
    console.log(`Error: ${message}`)
  }

  // Show status message from the process
  static showMessage (message) {
    console.log(`Status: ${message}`)
  }

  // Show listed command from Hospital Interface
  static showHelp () {
    const command = [
      `Invalid command! Please input a correct <command>, see below for more information:`,
      `$ node todo.js help`,
      `$ node todo.js register <username> <password> <role>`,
      `Role : <doctor> | <admin> | <officeboy> | <receptionist>\n`,
      `$ node todo.js login <username> <password>`,
      `$ node todo.js logout`,
      `$ node todo.js addPatient <name> <diagnose> <diagnose> <diagnose> ...`
    ]
    console.log(`\n┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`)
    console.log(`┃  Listed Command for Hospital Interface  ┃`)
    console.log(`┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`)
    for (const key in command) {
      console.log(command[key])
    }
  }
}

module.exports = HospitalView
