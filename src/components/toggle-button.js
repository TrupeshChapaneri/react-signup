import React from "react";

function ToggleButton({ setIsSignUpfan, clearErrorsFan, clearErrorsTalent }) {
  return (
    <div className="button r" id="button-id">
      <input
        type="checkbox"
        className="checkbox"
        onClick={() => {
          setIsSignUpfan((prv) => !prv);
          clearErrorsFan();
          clearErrorsTalent();
        }}
      />
      <div className="knobs" />
      <div className="layer" />
    </div>
  );
}

export { ToggleButton };
