export {};
// 既存で作成されている型を、拡張や再利用性することができる型がUtilityType。
/**
 * keyof: 型からプロパティ名を全て取得する。
 * extends: 右側に指定した型と互換性がある型を作成する。
 *
 * T or R or P: 型の定義の中で再利用したいからTという大文字で抽象化する。
 * infer: 指定した箇所の型を推論して取得することができる。
 */

type Profile = {
  name: string;
  age?: number;
  zipCode: number;
};

// 必須とオプショナルを切り替えることができる。
// 指定した型の全てのプロファイルがオプショナルになる。
type PartialType = Partial<Profile>;
// 全てのプロパティを必須にする。
type RequiredType = Required<Profile>;

// MappedTypes(インデックスシグネチャ)
// プロパティ名のUnion型として定義できる。
//  [P in keyof T]?: T[P];
//  1. T型のプロパティ名のUnion型を作成。
//  2. T[P] = プロパティの型をオプショナルとして再定義する。
// プロパティを一つ一つ取り出して方を再定義する方法。
type Partial<T> = {
  [P in keyof T]?: T[P];
};

// ReadOnly型（内部的にはMappedTypesを作成している。）
type ProfileReadonly = Readonly<Profile>;

// Record<K,T>
// 何かの型同士のMAPを作成する場合にもちちられる。
type Prefectures = "Tokyo" | "Chiba" | "Tottori";
type Covid19 = {
  kanji_name: string;
};
const covid19Japan: Record<Prefectures, Covid19> = {
  Tokyo: { kanji_name: "東京" },
  Chiba: { kanji_name: "千葉" },
  Tottori: { kanji_name: "鳥取" },
};

// Excluedの中身。Distributive Conditional Types の中身。
// Exclued<T,U> Uに渡した方の分 T extends U ? never : T。
// つまり、Uに渡した型がマッチするTの方はneverになり、それ以外はTが返却される。
type MyExclued =
  | (string extends string | number ? never : string) // never
  | (number extends string | number ? never : number) // never
  | (boolean extends string | number ? never : boolean); // boolean
type NonNullableType = string | number | null | undefined;

// ReturnType
function add(a: number, b: number) {
  return a + b;
}
type ReturnTypeFromAdd = ReturnType<typeof add>;
// 引数で指定した関数の戻り値の型をinferで取得する。
type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;

// Parameters
const debugPrint = (name: string, age: number) => {
  console.log(name, age);
};
type debugPrintParameters = Parameters<typeof debugPrint>;
const params: debugPrintParameters = ["Ham", 20];
debugPrint(...params);
