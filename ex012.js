var now = new Date()
var hr = now.getHours()
console.log(`Current time ${hr} hours`)
if (hr < 12) {
    console.log('Good Morning!')
} else if (hr <= 18 ) {
    console.log('Good Afternoon!')
} else {
    console.log("Good Evening")
}
