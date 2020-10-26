let num = document.querySelector("input#fnum")
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let values = []

function isNum(n) {
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inList(n, l) {
 if (l.indexOf(Number(n)) != -1) {
    return true

    }else {
        return false
    }
}

function add(){
    if(isNum(num.value) && !inList(num.value, values)){
        values.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Value ${num.value} added.`
        lista.appendChild(item)
        res.innerHTML = ''
    }else {
        window.alert("The value already exist in the list.")
    }
    num.value = ''
    num.focus()
}

function analyze(){
    if (values.length == 0) {
        window.alert('Add values before analyzing!')

    } else {
        let tot = values.length
        let maior = values[0]
        let menor = values[0]
        let add = 0
        let average = 0
        for(let pos in values){
            add += values[pos]
            if (values [pos] > maior)
            maior = values[pos]
            if (values[pos] < menor)
            menor =values[pos]
        }
        average = add / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Overall, there are ${tot} numbers registered.</p>`
        res.innerHTML += `<p>The biggest value registered was ${maior}.</p>`
        res.innerHTML += `<p>The smallest value registered was ${menor}.</p>`
        res.innerHTML += `<p>The addition of all values registered was ${add}.</p>`
        res.innerHTML += `<p>The average of the values registered was ${average}.</p>`
    }        
}