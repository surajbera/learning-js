const nameData = ['max', 'Schwarz']
// const firstName = nameData[0]
// const lastName = nameData[1]

const [firstName, lastName] = nameData /* array destructuring */
// console.log(firstName)
// console.log(lastName)

/*********************************************/

const otherNameData = ['max', 'Schwarz', 'Mr', 30]
const [firstName2, lastName2, ...otherData] = otherNameData /* array destructuring */
console.log(firstName2, lastName2, otherData)
