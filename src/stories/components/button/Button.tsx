import React from "react";
import "./button.scss";

interface ButtonProps {
  /**
   * Button state
   */
  state?: "enabled" | "hovere" | "pressed" | "disabled";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ state, label }: ButtonProps) => {
  return (
    <button type='button' className={["button", `button--${state}`].join(" ")}>
      {label}
    </button>
  );
};
