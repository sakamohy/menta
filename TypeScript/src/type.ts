export {};

/***
 * 型アノテーションを[：型]でつける。
 * 型を指定してつけるとその後に変数に指定する値を方で指定することができる。
 */
// boolean
let isFinished: boolean = true;
console.log(isFinished);

// number
let number_var: number = 10;
console.log(number_var);

// string
let string_var: string = "hoge";
console.log(string_var);

// array
let numbers: number[] = [1, 2, 3];
console.log(numbers);
let strings: string[] = ["a", "b", "c"];
console.log(strings);
let nijigenHairetu: number[][] = [
  [1, 2],
  [3, 4],
];
console.log(nijigenHairetu);
let hairetsu: (string | number | boolean)[] = [1, true, "japan"];
console.log(hairetsu);

// tuple
// unionだと、順序性を意識できない。tupleは、順序性も指定することができる。
let profile: [string, number] = ["ham", 43];
console.log(profile);

// any javascript → typescriptへのリプレイス時に暫定的に使う。
// import axios from "axios";
// interface Article {
//   id: number;
//   title: string;
//   description: string;
// }
// let url: string =
//   "https://udemy-utils.herokuapp.com/api/v1/articles?token=token123";
// axios.get(url).then(function (response) {
//   let data: Array<Article> = response.data;
//   console.log(data);
// });

// void 明示的にundefinedを返却する関数ということを定義する(return undefined = )void
function returnNothing(): void {
  console.log("I do not return anything!!!");
}
console.log(returnNothing());

// null undefined 型で明示的に指定できる。
let data_nu: null = null;
console.log(data_nu);
let data_un: undefined = undefined;
console.log(data_un);

// never 戻りがない。
function error(message: string): never {
  throw new Error(message);
}
try {
  let result = error("test");
  console.log(result);
} catch (error) {
  console.log({ error });
}

// object 各種プロパティの構造を指定することができる
let profile2 = { name: "Ham" };
console.log(profile2);

// 型エイリアス 構造の指定もできる。プリミティブ型と同じで、かつ、何かその型に対して何か操作を行いたい場合は型エリリアスを宣言する。
type Mojiretu = string;
let kata_alias: Mojiretu = "hoge";
console.log(kata_alias);
const example = {
  name: "Ham",
  age: 43,
};
// 上のオブジェクトの値が変わっても型を動的に変化させることができる。
type Profile = typeof example;

// interface
interface example {
  name: string;
  age: number;
}
let ex_object: example = {
  name: "hoge",
  age: 45,
};
console.log(ex_object);

// インターフェースは型の宣言であり、型エイリアスは型に名前をつける機能。

// unknown タイプセーフなany型 実行前に確認することに制約をつけることができる。
// タイプガードの仕組みという。
let numberUnknown: unknown = 30;
if (typeof numberUnknown === "number") {
  console.log(numberUnknown + 1);
}

// intersection 多重継承。複数の方の属性を足し合わせていくことができる。
type Picher1 = {
    throwingSpeed: number;
};
type Batter1 = {
    battingAverage: number;
};

const DaimajinSasaki: Picher1 = {
    throwingSpeed: 154,
};
const OchiaiHiromitsu: Batter1 = {
    battingAverage: 0.367,
};

type TwoWayPlayer = Picher1 & Batter1;
const OotaniShohei:TwoWayPlayer = {
    throwingSpeed: 165,
    battingAverage: 0.286,
}

// union  和集合を作り出すことができる。指定した型の輪集合の型を作成する。
let value: number | string = 1;
console.log(value);

// Literal型 指定する型の中でも有限なものを指定するときに行う。より小さい方が良い。
type week = "月" | "火";

