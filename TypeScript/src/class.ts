import { addEmitHelper } from "typescript";

export {};
// コンストラクターには戻り値を指定しなくても良い。
class Person {
  public name: string;
  private age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}
let taro = new Person("Taro", 30);
console.log(taro.profile());

// このような記法で書くこともできる。
// class Person {
//     constructor(public name: string, protected age: number) {}
//   }

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;
  // readonlyの時はpublicを忘れないようにね。
  public readonly email: string;

  constructor(owner: string, secretNumber: number, email: string) {
    this._owner = owner;
    this._secretNumber = secretNumber;
    this.email = email;
  }

  get owner() {
    return this._owner;
  }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }
}
const myNumberCard = new MyNumberCard("ハムさん", 123456, "hamu@gmail.com");
console.log(myNumberCard);
myNumberCard.secretNumber = 500;
console.log(myNumberCard);

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = "Atsushi";
  static lastName: string = "Ishida";

  static work() {
    return "Hey, guys! Are you interested in TypeScript?";
  }
}
console.log(Me);
console.log(Me.work());

// 継承メソッドもあるよ。
abstract class Animal {
  abstract cry(): string;
}
// typescriptは単一継承である。
class Tiger extends Animal {
  cry(): string {
    return "roar!!!";
  }
}
const tiger = new Tiger();
console.log(tiger.cry());

// Interfaceは複数継承は行うことができる。
// これは、signatureという。
interface Kenja {
  ionazun(): void;
}
interface Senshi {
  kougeki(): void;
}
class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log("start ionazun!");
  }

  kougeki(): void {
    console.log("start kougeki!");
  }
}
const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
// Interfaceは、実装を強制することができるため実装忘れを防げる＆実装を保証できる。
