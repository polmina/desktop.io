import styled from "styled-components";
import folderIcon from "assets/icons/folder-color-128.png";
import { useDispatch, useSelector } from "react-redux";

const Wrapper = styled.img`
  height: 2rem;
  object-fit: contain;
  padding: 0.5rem;
  border-radius: 0.2rem;
  transition: 0.1s;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  ${(props) => `
  background:${props.isFocused ? "rgba(255, 255, 255, 0.2)" : "transparent"}

  `}
`;

export const App = (props) => {
  const { apps }: any = useSelector((state) => state);

  const app = apps[props.index];
  const dispatch = useDispatch();

  const clickEvent = (e) => {
    dispatch({
      type: `update/apps/all`,
      value: { isFocused: false },
    });
    dispatch({
      type: `update/apps/${props.index}`,
      value: { isFocused: true, isPopupOns: true },
    });
  };
  return (
    <Wrapper
      src={props.data?.icon ?? folderIcon}
      onClick={clickEvent}
      isFocused={app.isFocused}
    />
  );
};
