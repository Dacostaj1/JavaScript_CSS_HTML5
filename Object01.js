let friend = {name:'Jose',
sex: 'M',
weight: 85.4,
Bulk(w=0){
    console.log('Gained')
    this.weight += w

}}
friend.Bulk(2)
console.log(`${friend.name} weights ${friend.weight}kg`)