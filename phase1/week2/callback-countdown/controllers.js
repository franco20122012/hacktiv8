const { displayCountdown } = require('./views')

const timer = seconds => {
  // Your code here...
  setInterval(function () {
    seconds--
    displayCountdown(seconds)
    if (seconds === 0) {
      clearInterval(this)
      // console.log(this)
    }
  }, 1000)
}

module.exports = {
  timer
}
