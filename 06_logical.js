// 06 - logical operator

// && - AND
// || - OR
// ! -  NOT

let age = 11
let verified = false

if(age>17 && verified){
  console.log('Verified and Valid')
}else if(age>17){
  console.log('Valid')
}else if(verified && age<18){
  console.log('Verified')
}else{
  console.log(age)
  console.log(verified)
}