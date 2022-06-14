import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { turnOnColorLight, turnOff } from "../actions";

import { LightBulb, SwitchButton } from "../components";

function Switcher() {
  const dispatcher = useDispatch();
  const isLoading = useSelector((state) => {
    return state.switcher.isLoading;
  });
  const hasError = useSelector((state) => {
    return state.switcher.hasError;
  });
  const color = useSelector((state) => {
    return state.switcher.color;
  });
  const lightIsOn = useSelector((state) => {
    return state.switcher.lightIsOn;
  });
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    if (lightIsOn && color && !isLoading) {
      document.documentElement.style.setProperty(
        '--light',
        color
      );
    }
  }, [isLoading, color, lightIsOn]);

  const handleToogle = async () => {
    if (lightIsOn) {
      await dispatcher(turnOff());
    } else {
      await dispatcher(turnOnColorLight());
    }
  };

  const handleClick = () => {
    setIsOn(!isOn);
    handleToogle();
  }

  const renderContent = () => {
    if (hasError) {
      return <p>Something went wrong, try again later</p>;
    }

    return (
      <>
        <LightBulb />
        <SwitchButton onClick={handleClick} />
      </>
    );
  };

  return (
    <section className="Switcher">
      <div className={`light ${!isLoading && isOn ? 'on' : ''}`} >
        {renderContent()}
      </div>
      <footer
        style={{
          position: 'absolute',
          bottom: 0,
          padding: '1rem',
        }}
       >
        <p>Remix of </p>
        <a
          href="https://www.youtube.com/watch?v=OAgH_VMz08A"
          target="_blank"
          style={{
            color: "white",
            fontSize: '0.825rem',
          }}
        >
          Switch Light Bulb
        </a>
        <p> by </p>
        <a
          href="https://www.youtube.com/c/OnlineTutorials4Designers"
          target="_blank"
          style={{
            color: "white",
            fontSize: '0.825rem',
          }}
        >
          Online Tutorials
        </a>
      </footer>
    </section>
  );
}

export default Switcher;
