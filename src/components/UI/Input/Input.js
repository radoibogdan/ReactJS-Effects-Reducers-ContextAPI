import React, { useImperativeHandle, useRef } from "react";
import classes from "./Input.module.css";

/* 
  React.forwardRef will expose functionalities to parent component
  Input is capable to being bound to a ref. In other components it will expose a 'ref' property
  Will allow outside components to use what is inside useImperativeHandle 
*/
const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  // Activate will be called from parent
  const activate = () => {
    inputRef.current.focus();
  };

  // Expose properties and functions to parent component
  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ''
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
