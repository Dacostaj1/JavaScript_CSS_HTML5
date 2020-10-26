function count (){
    let b= document.getElementById('txti')
    let e= document.getElementById('txtf')
    let s= document.getElementById('txtp')
    let res = document.getElementById('res')

    if (b.value.length == 0 || e.value.length == 0 || s.value.length == 0) {
        res.innerHTML = 'Impossible to count!'
        
        
    }else {
       res.innerHTML = 'Counting: <br>'
       let i = Number(b.value)
       let f = Number(e.value)
       let p = Number(s.value)
       if (p <= 0) {
           window.alert('Invalid step! Missing step 1')
           p = 1
       }
       if (i < f) {
           // Increasing
          for (let c = i; c <= f; c += p ) {
            res.innerHTML += ` ${c} \u{1F449}`
       }    
       } else {
           // Decreasing
           for(let c = i; c >= f; c -= p ){
               res.innerHTML += ` ${c} \u{1F449}`
            }
            
       }
       res.innerHTML += `\u{1F3C1}`  
    }
}