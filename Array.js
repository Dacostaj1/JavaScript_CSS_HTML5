let values = [8, 1, 7, 4, 2, 9]
values.sort()

/*
console.log(values)

for (let pos = 0; pos < values.length; pos++) {
    console.log(`The position ${pos} has the value ${values[pos]}`)
}
*/

for(let pos in values){
    console.log(`The position ${pos} has the value ${values[pos]}`)
}