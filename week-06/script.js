alert('Hello World');
//aaaaa single line comment

function sayhello(){
console.log('Hello World!')
}
sayhello()

var age=25,height=5
    console.log(age)
    console.log(height)

if(age < 8){
    console.log("Check out the Merry-Go-Round. You'll love it!");
} else if (age < 65 && height>4.5){
    console.log("Check out the Roller Coaster. It's awesome!");
} else{
    console.log('Why not enjoy a float down the Lazy River?');
}


let nounlist=['book','bread','cat','paper','pencil']
let adjlist=['green','bright','bitter','sweet','heavy']
let verblist=['jump','cry','laugh','rush','fly']
let noun=nounlist[Math.floor(Math.random()*nounlist.length)]
let adjective=adjlist[Math.floor(Math.random()*adjlist.length)]
let verb=verblist[Math.floor(Math.random()*verblist.length)]
let sentence = `My ${noun} leaps ${adjective} when I ${verb} a rainbow in the sky.`

console.log(sentence)

// console.log('My ' + noun +' leaps '+adjective+' when I '+verb+' a rainbow in the sky.')