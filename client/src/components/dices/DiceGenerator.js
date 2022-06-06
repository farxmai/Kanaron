import React, { useState, useEffect, useRef } from "react";
import "./DiceGenerator.css";
import d4 from "../../img/d4.png";
import d6 from "../../img/d6.png";
import d8 from "../../img/d8.png";
import d10 from "../../img/d10.png";
import d12 from "../../img/d12.png";
import d20 from "../../img/d20.png";
import d100 from "../../img/d100.png";

const dices = {
  d4,
  d6,
  d8,
  d10,
  d12,
  d20,
  d100,
};

export const DiceModalWindow = ({ init = [], onClose, sides = 20 }) => {
  const [initial, setInitial] = useState(init);
  const [counter, setCounter] = useState(1);
  const [loading, setLoading] = useState(true);
  const [openSubs, setOpenSubs] = useState(false);

  const [interval, setInter] = useState(false);
  const [timeout, setTimouts] = useState(false);

  const isD20 = sides === 20;
  const ref = useRef();

  const getRandomInt = (max = sides) => {
    setCounter(Math.floor(Math.random() * Math.floor(max + 1)) || 1);
  };
  const withInitial = initial && initial.length > 0;
  const result = initial.reduce((acc, el) => acc + el.value, 0) + counter;
  const isCrit = isD20 && (counter === 20 || counter === 1);

  const reRoll = () => {
    if (!timeout) {
      if (isCrit && isD20)
        setInitial([
          {
            value: counter === 1 ? result - 21 : result,
          },
        ]);
      else setInitial(init);
      setOpenSubs(false);
      setLoading(true);
    }
  };

  useEffect(() => {
    const on = () => setInter(setInterval(getRandomInt, 100));
    const off = () => clearInterval(interval);
    return loading ? on() : off();
  }, [loading]);

  useEffect(() => {
    !timeout &&
      setTimouts(
        setTimeout(() => {
          setLoading(false);
          setOpenSubs(true);
          setTimouts(false);
          clearTimeout(timeout);
        }, 1000)
      );
  }, [loading]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) onClose();
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref, onClose]);

  useEffect(() => {
    function handleSpaceClick(event) {
      if (event.keyCode === 32) reRoll();
    }
    document.addEventListener("keydown", handleSpaceClick, false);
    return () => document.removeEventListener("keydown", handleSpaceClick, false);
  }, [reRoll]);

  const spinStyles = sides === 4 || sides === 10 ? "dice-rotate-vert-center" : "dice-spin";

  return (
    <div className='dice-block-wrapper'>
      <div className='dice-block' ref={ref}>
        <img
          onClick={reRoll}
          className={`dice-icon ${`d${sides}`} ${loading && spinStyles}`}
          src={dices[`d${sides}`]}
          alt=''
        />
        <div className={`dice-counter ${`d${sides}-count`}`}>{counter}</div>
        {openSubs && isCrit && (
          <div className='dice-crit-button' onClick={reRoll}>
            Крит!
          </div>
        )}
        {openSubs && withInitial && (
          <div className='dice-init-value-list'>
            {initial.map((el) => (
              <div key={el.value}>{`${el.value} +`}</div>
            ))}
          </div>
        )}
        {openSubs && withInitial && <div className='dice-results'>{`= ${result}`}</div>}
      </div>
    </div>
  );
};

const DiceGenerator = ({ initial = [], sides = 20 }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && <DiceModalWindow onClose={() => setOpen(false)} init={initial} sides={sides} />}
      <button onClick={() => setOpen(true)}>{`d${sides}`}</button>
    </>
  );
};

export default DiceGenerator;

let dice = (maxValInRow = 0, sides = 20) => {
  const result = [];
  let i = maxValInRow;
  const getRandomInt = () => {
    const number = i ? sides : Math.floor(Math.random() * Math.floor(sides + 1)) || 1;
    result.push(number);
    if (number === 1 || number === sides) {
      i = i === 0 ? 0 : i - 1;
      console.log(`Rolled ${number}. Crit!`);
      return getRandomInt();
    } else {
      console.log(`Rolled ${number}`);
    }

    if (result.length > 1) {
      const chance = Math.pow(sides, result.length - 1);
      console.log(`Chance is 1/${chance}`);
    }
  };

  return getRandomInt();
};
