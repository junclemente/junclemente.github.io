import React from "react";
import cx from "classnames";
import styles from "./Button.module.scss";

const Button = ({
  children,
  className,
  theme,
  type = "button",
  href,
  ...otherProps
}) => {
  return (
    <button
      className={cx(styles.root, className, {
        [styles.primary]: theme === "primary",
        [styles.primaryOutline]: theme === "primary-outline"
      })}
      type={type}
      href={href}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
