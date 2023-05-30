import React, { HTMLAttributes } from "react";

type ButtonProps = {
  to?: string;
  className?: string;
  children: React.ReactNode;
  buttonType: string; 
} & HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>;

const primaryButton: string =
  "bg-gray-800 rounded-3xl py-1 px-8 m-1 text-white hover:bg-emerald-50 hover:text-gray-800 uppercase font-semibold";
const secondaryButton: string =
  "bg-emerald-50 rounded-3xl py-1 px-8 m-1 text-gray-800 hover:bg-gray-800 hover:text-emerald-50 uppercase font-semibold";
const warmButton: string =
  "bg-rose-600 rounded-3xl py-1 px-8 m-1 text-white hover:bg-gray-800 hover:text-emerald-50 uppercase font-semibold";

const Buttons: React.FC<ButtonProps> = ({
  to,
  className,
  children,
  ...props
}) => {
  let buttonClassName = "";
  if (className === "primary") {
    buttonClassName = primaryButton;
  } else if (className === "secondary") {
    buttonClassName = secondaryButton;
  } else if (className === "warm") {
    buttonClassName = warmButton;
  }

  if (to) {
    return (
      <a href={to} className={buttonClassName} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClassName} {...props}>
      {children}
    </button>
  );
};

export default Buttons;