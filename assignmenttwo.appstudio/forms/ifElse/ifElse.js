let firstName= prompt("Enter your first name:")
let userState = prompt ("Enter you state in the 2 letter acronym:")
let temp=Number(prompt("Enter a temperature in Fahreheit:"))

let stateCap=userState.toUpperCase()

console.log(firstName)
console.log(userState)
console.log(temp)

if (userState== "NE" && temp<32){
alert(`${firstName}, wear a warm coat, hat, scarf and gloves.`)
} else if (userState== "NE" && temp>32 && temp<50){
alert(`${firstName}, wear a warm coat but you won't need a hat, scarf or gloves.`)
} else if (userState=="FL" && temp>32 && temp<50){
alert(`${firstName}, wear your warmest coat, a warm hat, a scarf, and warm gloves.`)
} else if (userState=="FL" && temp>50 && temp<70){
alert(`${firstName}, wear a warm coat, hat and gloves. Maybe a scarf too.`)
}