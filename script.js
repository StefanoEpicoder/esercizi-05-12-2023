//ESERCIZIO 1
class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  compareAge(otherUser) {
    if (this.age > otherUser.age) {
      return this.firstName + " è più vecchio di " + otherUser.firstName;
    } else if (this.age < otherUser.age) {
      return this.firstName + " è più giovane di " + otherUser.firstName;
    } else {
      return this.firstName + " ha la stessa età di " + otherUser.firstName;
    }
  }
}

// Creiamo due oggetti User
const user1 = new User("Mario", "Rossi", 30, "Roma");
const user2 = new User("Luigi", "Verdi", 25, "Milano");

// Verifico che la comparazione tra le età funzioni correttamente
console.log(user1.compareAge(user2)); // Mario è più vecchio di Luigi
