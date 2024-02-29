import { useState, useRef } from "react";

export default function App() {
  return (
    <>
      <Hero />
    </>
  );
}

const Hero = () => {
  const [result, setResult] = useState(0);
  const [view, setView] = useState(0);

  function handleClick(name, children) {
    let temp = view;
    if (result === 0 || result == "Error") {
      setResult(name);
      setView(children);
    } else {
      if (temp.length == 13) {
        setResult(result)
        setView(view);
      } else {
        setResult(result + name);
        setView(view + children);
      }
    }
  }

  function handleClickAC() {
    setResult(0);
    setView(0);
  }

  function handleClickResult() {
    try {
      setView(eval(result).toString());
    } catch (err) {
      setView("Error");
    }
  }

  const Button = () => {
    const ButtonCalc2X = ({ name, children, onClick }) => {
      return (
        <>
          <div className="ButtonCalc2X" onClick={() => onClick(name, children)}>
            {children}
          </div>
        </>
      );
    };

    const ButtonCalc1 = ({ name, children, onClick }) => {
      return (
        <>
          <div className="ButtonCalc1" onClick={() => onClick(name, children)}>
            {children}
          </div>
        </>
      );
    };

    const ButtonCalc1B = ({ name, children, onClick }) => {
      return (
        <>
          <div className="ButtonCalc1B" onClick={() => onClick(name, children)}>
            {children}
          </div>
        </>
      );
    };

    const ButtonCalc2XB = ({ name, children, onClick }) => {
      return (
        <>
          <div
            className="ButtonCalc2XB"
            onClick={() => onClick(name, children)}
          >
            {children}
          </div>
        </>
      );
    };

    const ButtonCalc2YB = ({ name, children, onClick }) => {
      return (
        <>
          <div
            className="ButtonCalc2YB"
            onClick={() => onClick(name, children)}
          >
            {children}
          </div>
        </>
      );
    };

    return (
      <>
        <div className="w-5/6 h-[90%] bg-slate-400 flex flex-wrap p-[2px] justify-center relative">
          <ButtonCalc2X onClick={handleClickAC}>AC</ButtonCalc2X>
          <ButtonCalc1 name="/" onClick={handleClick}>
            &divide;
          </ButtonCalc1>
          <ButtonCalc1 name="*" onClick={handleClick}>
            &times;
          </ButtonCalc1>

          <ButtonCalc1 name="7" onClick={handleClick}>
            7
          </ButtonCalc1>
          <ButtonCalc1 name="8" onClick={handleClick}>
            8
          </ButtonCalc1>
          <ButtonCalc1 name="9" onClick={handleClick}>
            9
          </ButtonCalc1>
          <ButtonCalc1 name="-" onClick={handleClick}>
            &ndash;
          </ButtonCalc1>

          <ButtonCalc1 name="4" onClick={handleClick}>
            4
          </ButtonCalc1>
          <ButtonCalc1 name="5" onClick={handleClick}>
            5
          </ButtonCalc1>
          <ButtonCalc1 name="6" onClick={handleClick}>
            6
          </ButtonCalc1>
          <ButtonCalc1 name="+" onClick={handleClick}>
            +
          </ButtonCalc1>

          <div className="w-3/4 h-2/5 flex flex-wrap justify-center">
            <ButtonCalc1B name="1" onClick={handleClick}>
              1
            </ButtonCalc1B>
            <ButtonCalc1B name="2" onClick={handleClick}>
              2
            </ButtonCalc1B>
            <ButtonCalc1B name="3" onClick={handleClick}>
              3
            </ButtonCalc1B>

            <ButtonCalc2XB name="0" onClick={handleClick}>
              0
            </ButtonCalc2XB>
            <ButtonCalc1B name="." onClick={handleClick}>
              .
            </ButtonCalc1B>
          </div>

          <div className="w-1/4 h-2/5">
            <ButtonCalc2YB onClick={handleClickResult}>=</ButtonCalc2YB>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <section id="hero">
        <div className="container">
          <div className="flex justify-center items-center w-screen h-screen">
            <div className="bg-primary w-[334px] h-[394px] rounded-xl  flex items-center py-6 flex-col gap-2">
              <div className="w-5/6 h-14 border-2 border-secondary flex justify-end items-center px-2">
                <h3 className="text-4xl text-white">{view}</h3>
              </div>
              <Button></Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
