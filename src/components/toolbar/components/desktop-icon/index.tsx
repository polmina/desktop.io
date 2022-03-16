import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import desktopIcon from "assets/icons/desktop.io-color-128.png";
import colors from "assets/colors.json";

const Wrapper = styled.img`
  height: 2rem;
  padding: 0.5rem;
  object-fit: contain;
  transition: 0.1s;
  border-radius: 0.2rem;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;
const Menu = styled.div`
  background: ${colors.menu};
  position: absolute;
  transform: translateY(-100%);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  color: white;
  padding: 0.3rem;
  border-radius: 0.2rem;
  ${(props) => `
    display:${props.isVisible ? "block" : "none"}
  `}
`;
const Item = styled.div`
  padding: 0.5rem 1rem;
  transition; 0.1s;
  border-radius: inherit;
  cursor: pointer;
  &:hover{
      background: rgba(255, 255, 255, 0.1);
  }
`;
export const DesktopIcon = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  const disconnect = () => {
    navigate("/login");
  };
  return (
    <>
      <Wrapper src={desktopIcon} onClick={toggleMenu} />
      <Menu isVisible={isMenuVisible}>
        <Item onClick={disconnect}>Desconectarse</Item>
      </Menu>
    </>
  );
};
