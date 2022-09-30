import { App } from "@score/App";
import { useState } from "react";
import Component from "@score/Component";

export default function Home() {
  const [bar, setBar] = useState(0);
  const [foo, setFoo] = useState(0);
  return (
    <div className="App">
      <App
        foo={foo}
        bar={bar}
        renderComponent={(props) => <Component {...props} />}
      />
      <button onClick={() => setBar((prevState) => ++prevState)}>bar</button>
      <button onClick={() => setFoo((prevState) => ++prevState)}>foo</button>
    </div>
  );
}
