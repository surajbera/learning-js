let dog = 'gohan the husky';

const person = {
  age: 27,
  name: 'Suraj',
  'cool-dude': true,
  'really cool': true,
  '777': 'hello',
  777: 'test',
  dog: 'gohan the husky',
  [dog]: 'Gohan the husky is a good dog',
  note: 'Order is in alphabetic order',
  sayHello: function(greeting = 'Hey') {
    return `${greeting} ${this.name}`
    // NOTE: can also write return `${greeting} ${person.name}`
  }
}

person.job = 'Expert Web Devleoper'

/* NOTE: In this particular case, this refers to whatever is to the left of the dot */
console.log(person.sayHello('Hello'));