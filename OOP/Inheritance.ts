class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  makeSound() {
    console.log(`${this.name} is making a sound.`);
  }
}

class Dog extends Animal {
  makeSound() {
    console.log(`${this.name} is barking.`);
  }
}

const dog = new Dog("Bulldog");
dog.makeSound(); // Output: "Bulldog is barking."
