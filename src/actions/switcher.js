import { getBackgroundColor } from "../api";

export const turnOn = () => {
  return {
    type: "TURN_ON"
  };
};

export const turnOff = () => {
  return {
    type: "TURN_OFF"
  };
};

export const toogle = () => {
  return {
    type: "TOOGLE"
  };
};

/* Replace the next line with your code;
review reducers/switcher.js if you need to */
export const turnOnColorLight = false;
