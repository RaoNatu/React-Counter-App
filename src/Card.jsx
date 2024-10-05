import { useState } from "react";
import Count from "./Count";
import CountButtons from "./CountButtons";
import ResetButton from "./Reset";
import Title from "./Title";

export default function Card() {
    const [count, setCount] = useState(0);
    const locked = count <= 0 ? true : false;
  return (
    <div className="card">
      <Title locked={locked} />
      <Count number={count} />
      <ResetButton count={count} setCount={setCount}/>
      <CountButtons count={count} setCount={setCount} locked={locked}/>
    </div>
  );
}
