function loading() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var date = new Date()
    var hour = date.getHours()
    msg.innerHTML = `The current time now is ${hour} hours.`
    if (hour >= 0 && hour < 12) {
        // Good Morning!
        img.src = 'morning.png'
        document.body.style.background = "#e2cd9f"
    } else if (hour >= 12 && hour <= 18) {
       // Good Afternoon 
       img.src = 'afternoon.png'
       document.body.style.background = "#b9846f"
    } else {
       // Good Evening!
       img.src ='evening.png'
       document.body.style.background = "#515154"
    } 
}

