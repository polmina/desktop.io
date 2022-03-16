import { useState } from "react";
import styled from "styled-components";
import colors from "assets/colors.json";
import Draggable from "react-draggable";
import closeIcon from "assets/icons/close-white-128.png";
import maximizeIcon from "assets/icons/square-white-128.png";
import minimizeIcon from "assets/icons/dash-white-128.png";

import { useDispatch, useSelector } from "react-redux";

const Wrapper = styled.div`
  background: white;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 0.2rem;
  display: flex;
  flex-direction: column;
  resize: both;
  overflow: auto;
  min-width: 20rem;
  min-height: 20rem;
  background: ${colors.popupBackground};
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  color: white;
  ${(props) => `
   width: ${props.isMaximized ? "100vw !important" : "30rem"};
   height:  ${props.isMaximized ? "90vh !important" : "20rem"};
   transform: ${props.isMaximized ? "translate(0,0) !important" : ""};
   z-index: ${props.isFocused ? "999" : "1"};
  `}
`;
const Header = styled.div`
  border-radius: inherit inherit 0 0;
  background: ${colors.popupHeader};
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
`;
const Title = styled.div`
  margin: auto 0;
`;
const IconsWrapper = styled.div`
  display: flex;
`;
const Icon = styled.img`
  height: 1rem;
  object-fit: contain;
  transition: 0.1s;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 0.2rem;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;
const Main = styled.div`
  padding: 1rem;
`;
export const OpenApp = (props) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const { apps }: any = useSelector((state) => state);

  const app = apps[props.index];
  const dispatch = useDispatch();

  const close = (e) => {
    e.stopPropagation();
    dispatch({
      type: `update/apps/${props.index}`,
      value: { isOpen: false, isPopupOn: false },
    });
  };
  const toggleMaximize = (e) => {
    setIsMaximized(!isMaximized);
  };
  const minimize = () => {
    dispatch({
      type: `update/apps/${props.index}`,
      value: { isPopupOn: false },
    });
  };
  const clickEvent = () => {
    dispatch({
      type: `update/apps/all`,
      value: { isFocused: false },
    });
    dispatch({
      type: `update/apps/${props.index}`,
      value: { isFocused: true },
    });
  };
  return (
    <Draggable handle=".handle" defaultPosition={{ x: 50, y: 50 }}>
      <Wrapper
        isMaximized={isMaximized}
        onClick={clickEvent}
        isFocused={app.isFocused}
      >
        <Header className="handle">
          <Title>{props.data?.name}</Title>
          <IconsWrapper>
            <Icon src={minimizeIcon} onClick={minimize} />
            <Icon src={maximizeIcon} onClick={toggleMaximize} />
            <Icon src={closeIcon} onClick={close} />
          </IconsWrapper>
        </Header>
        <Main>Maaaaain</Main>
      </Wrapper>
    </Draggable>
  );
};
