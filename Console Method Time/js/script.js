// time ,timeEnd ,with for loop; 
console.time("forloop")
for(let i=0;i<5;i++){
    console.log(233)
}
console.timeEnd("forloop")

//time,timeEnd with While Loop:
console.time("whileloop")
let i=0;
while(i<5){
    console.log(233)
    i++;
}
console.timeEnd("whileloop")