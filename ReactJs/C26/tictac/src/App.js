import React, { useState } from "react";
import { IconContext } from "react-icons";
import { ImCross } from "react-icons/im";
import { MdExposureZero } from "react-icons/md";

import "./App.css";

function App() {
  const [state0, setState0] = useState(true);
  const [state1, setState1] = useState(true);
  const [state2, setState2] = useState(true);
  const [state3, setState3] = useState(true);
  const [state4, setState4] = useState(true);
  const [state5, setState5] = useState(true);
  const [state6, setState6] = useState(true);
  const [state7, setState7] = useState(true);
  const [state8, setState8] = useState(true);

  const toggle = (id) => {
    console.log("id =>", id);
    if (id === 1) {
      if (state0) {
        setState0(false);
      } else {
        setState0(true);
      }
    }
    if (id === 2) {
      if (state1) {
        setState1(false);
      } else {
        setState1(true);
      }
    }
    if (id === 3) {
      if (state2) {
        setState2(false);
      } else {
        setState2(true);
      }
    }
    if (id === 4) {
      if (state3) {
        setState3(false);
      } else {
        setState3(true);
      }
    }
    if (id === 5) {
      if (state4) {
        setState4(false);
      } else {
        setState4(true);
      }
    }
    if (id === 6) {
      if (state5) {
        setState5(false);
      } else {
        setState5(true);
      }
    }
    if (id === 7) {
      if (state6) {
        setState6(false);
      } else {
        setState6(true);
      }
    }
    if (id === 8) {
      if (state7) {
        setState7(false);
      } else {
        setState7(true);
      }
    }
    if (id === 9) {
      if (state8) {
        setState8(false);
      } else {
        setState8(true);
      }
    }
  };

  return (
    <IconContext.Provider value={{ color: "blue", size: "5rem" }}>
      <div className="tictac">
        <div className="row-1">
          <div>
            <button onClick={() => toggle(1)}>
              {state0 ? <ImCross /> : <MdExposureZero />}
            </button>
          </div>
          <div>
            <button onClick={() => toggle(2)}>
              {state1 ? <ImCross /> : <MdExposureZero />}
            </button>
          </div>
          <div>
            <button onClick={() => toggle(3)}>
              {state2 ? <ImCross /> : <MdExposureZero />}
            </button>
          </div>
        </div>
        <div className="row-2">
          <div>
            <button onClick={() => toggle(4)}>
              {state3 ? <ImCross /> : <MdExposureZero />}
            </button>{" "}
          </div>
          <div>
            <button onClick={() => toggle(5)}>
              {state4 ? <ImCross /> : <MdExposureZero />}
            </button>{" "}
          </div>
          <div>
            <button onClick={() => toggle(6)}>
              {state5 ? <ImCross /> : <MdExposureZero />}
            </button>{" "}
          </div>
        </div>
        <div className="row-3">
          <div>
            <button onClick={() => toggle(7)}>
              {state6 ? <ImCross /> : <MdExposureZero />}
            </button>{" "}
          </div>
          <div>
            <button onClick={() => toggle(8)}>
              {state7 ? <ImCross /> : <MdExposureZero />}
            </button>{" "}
          </div>
          <div>
            <button onClick={() => toggle(9)}>
              {state8 ? <ImCross /> : <MdExposureZero />}
            </button>{" "}
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default App;
