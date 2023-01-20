import React from 'react';
import logo from "../assets/images/logo.svg";

const Logo: React.FC<{className?: string}> = ({className}) => {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href={"#"}>
      <img className={className} src={logo} alt={''}/>
    </a>
  );
};

export default Logo;
