// მოცემულია მასივი [{name: 'Temo', age: 25},
// {name: 'Lasha', age: 21}, {name: 'Ana', age: 28}]
// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს user - ების მასივს და დააბრუნებს
// ყველაზე პატარა ასაკის მქონე ადამიანის
// სახელს

const users = [
  { name: "Temo", age: 25 },
  { name: "Lasha", age: 21 },
  { name: "Ana", age: 28 },
];

function findYoung(users) {
  let youngPerson = users[0];

  for (const user of users) {
    if (user.age < youngPerson.age) {
      youngPerson = user;
    }
  }
  return youngPerson.name;
}
console.log(findYoung(users));

// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს user ობიექტს და დააბრუნებს იგივე
// მნიშვნელობების მქონე ახალ
// (განსხვავებულ) ობიექტს

const user = { name: "Temo", age: 25 };

function createNewObj(user) {
  const newUser = {};

  for (const prop in user) {
    if (user.hasOwnProperty(prop)) {
      newUser[prop] = user[prop];
    }
  }

  return newUser;
}

console.log(createNewObj(user));

// დაწერე პროგრამა, სადაც ორი a და b
// მომხმარებლები აგორებენ კამათელს მანამ,
// სანამ არ გაგორდება, რომელიც უფრო
// ნაკლებ ცდაში გააგორებს სამიანს ის არის
// გამარჯვებული

function backgammon(number) {
  let result;
  let roll = 0;

  do {
    result = parseInt(Math.random() * 6) + 1;
    roll++;
  } while (result !== number);

  return roll;
}

function compare() {
  const a = backgammon(3);
  const b = backgammon(3);
  if (a < b) {
    return "a is winner";
  } else if (a > b) {
    return "b is winner";
  } else {
    return "tie";
  }
}
console.log(compare());
