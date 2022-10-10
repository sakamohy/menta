import React from "react";

interface AppProps {
  message?: string;
  description?: string;
}
// function component に型を指定するとpropsに型を指定する必要もなくなる。
const App: React.FunctionComponent<AppProps> = ({ message }): JSX.Element => {
  return <div>message = {message}</div>;
};

// App.defaultPropsを記載することでAppPropsの定義とずれているとエラーが発生する。
App.defaultProps = {
  message: "Hello default!",
  description: "description",
};

export default App;
