import React from "react";

function SwitchButton(props) {
  const { onClick } = props;

  return (
    <div className="switch">
      <button className="btn" onClick={onClick}/>
    </div>
  );
}

export default SwitchButton;
