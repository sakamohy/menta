export {};

// 内部でおこなっているロジックは同じだが、引数や戻り値の方が違う。→ ジェネリクスで対応する。
// 実行するまで確定しない型にすることによって、関数やクラスの抽象度を上げて再利用性の高いものを作ることができる。

// ジェネリクスを使う場合は、関数の前に＜T＞をつけないといけない。
const echo = <T>(arg: T): T => {
  return arg;
};
console.log(echo<number>(100));
console.log(echo<string>("Hello!"));
console.log(echo<boolean>(true));

// クラスの場合は、クラスの後にジェネリクス宣言を記載する。
class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}
console.log(new Mirror(100).echo());

// 型アサーション
let name: any = "Ham";
let length = (name as string).length;
// 全てをreadonlyにすることができる。
let profile = {
  name: "Atsushi",
  height: 178,
} as const;

let NullableProfile: { name: string; age: number | null } = {
  name: "ham",
  age: null,
};

// インデックスシグネチャ
// オブジェクトの添字に対する型注釈の方法。
// { [ index: typeForIndex ]: typeForValue }
interface indexSignatureType {
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}
let indexSignature: indexSignatureType = { name: "ham", underTwenty: true };
indexSignature.name = "Ham";
indexSignature.age = 43;
indexSignature.nationality = "Japan";
