import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [show, setShow] = useState(false)

  function onClick() {
    const assigned = 'an assigned variable'
    debugger
    const unassigned = 'an unassigned variable'
    
    setShow(true)
  }

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <button onClick={onClick}>
        Say hello
      </button>

      {show && (
        <p>hello</p> 
      )}

      <p>
        A lot of extra content so the offset is obvious:
        asdf
        asdf
        asdf
        asdf
        asdf
        asdf
        asdf
        asdf
        asdf
        asdf
      </p>
    </div>
  );
}
