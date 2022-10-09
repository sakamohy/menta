// アロー関数は使える
// ？　を使うことでオプショナルな引数を実現することができる。
let bmi = (
  height: number,
  weight: number = 20,
  printtable?: boolean
): number => {
  if (printtable) {
    console.log("bmi");
  }
  return weight / (height * height);
};
console.log(bmi(10));

const reducer = (accumulator: number, currentValue: number) => {
  console.log(accumulator + currentValue);
  return accumulator + currentValue;
};
[1, 2, 3, 4, 5].reduce(reducer);

// signature 最新の関数の門番のように型ガードをしてくれる。
function double(value: number): number;
function double(value: string): string;

function double(value: any): any {
  if (typeof value === "number") {
    return value * 2;
  } else {
    return value + value;
  }
}
console.log(double(1));
console.log(double("hoge"));
// console.log(double(true));

// TypeScriptではオーバーロードは、インターフェイスは別々に定義できるのですが、実装部分はすべてのインターフェイスで共有する書き方になります
// typeScript風オーバーロードの書き方。
// https://qiita.com/suin/items/2653fea448fd6246437a
class Twicer {
  twice(num: number): number;
  twice(str: string): string;
  twice<T>(arr: T[]): T[];
  twice<T>(value: number | string | T[]): number | string | T[] {
    if (typeof value === "number") {
      return value * 2;
    }
    if (typeof value === "string") {
      return value + value;
    }
    return [...value, ...value];
  }
}