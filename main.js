const bandNumber = 1
let counter = bandNumber

const takeNumber = function (bandName) {
  let string =`${counter}.` +  " " + `${bandName}`
  counter++
  return string
     
}
const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console