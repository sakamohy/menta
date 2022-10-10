import React from "react";
import { useState } from "react";

// useState の戻り値の方は下記の通り。ジェネリクスに指定した型によって返ってくるメソッドが変わってくる。
type MySetStateAction = number | ((prevState: number) => number);

const Counter: React.FC<{}> = () => {
  // しっかりと型定義をつけることによって型をしっかりと指定したメソッドや変数を取得することができる。
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <div>{count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
      </div>
    </>
  );
};

export default Counter;
