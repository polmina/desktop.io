import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import colors from "assets/colors.json";

import FolderIcon from "assets/icons/folder-color-128.png";

const Wrapper = styled.div`
  width: 5rem;
  text-align: center;
  border-radius: 0.2rem;
  color: ${colors.iconTitle};
  ${(props) => `
    background:${props.isSelected ? "rgba(255,255,255,0.1)" : "transparent"}
  `}
`;
const Image = styled.img`
  height: 3rem;
  object-fit: contain;
`;
const Title = styled.div`
  ${(props) => `
  text-overflow:${!props.isSelected ? "ellipsis" : ""};
  overflow:${!props.isSelected ? "hidden !important" : ""};
  white-space: ${!props.isSelected ? "nowrap" : ""};

  `}
`;
interface IICon {
  data: any;
  index: number;
}
const contextMenuData = [{ name: "Borrar carpeta" }];

export const Icon = (props: IICon) => {
  const { apps }: any = useSelector((state) => state);

  const app = apps[props.index];

  const dispatch = useDispatch();
  const clickApp = (e) => {
    e.stopPropagation();
    dispatch({
      type: `update/apps/all`,
      value: { isSelected: false },
    });
    dispatch({
      type: `update/apps/${props.index}`,
      value: { isSelected: true },
    });
  };
  const doubleClickApp = (e) => {
    e.stopPropagation();
    dispatch({
      type: `update/apps/all`,
      value: { isSelected: false, isFocused: false },
    });
    dispatch({
      type: `update/apps/${props.index}`,
      value: { isOpen: true, isPopupOn: true, isFocused: true },
    });
  };
  const onContexEvent = (e) => {
    const pos = { x: e.pageX, y: e.pageY };
    e.stopPropagation();

    dispatch({
      type: `set/contextMenu`,
      value: { data: contextMenuData, pos: pos },
    });
  };
  const handleClick = (e) => {
    switch (e.detail) {
      case 1:
        clickApp(e);
        break;
      case 2:
        doubleClickApp(e);
        break;
      default:
        return;
    }
  };

  return (
    <Wrapper
      onClick={handleClick}
      isSelected={app.isSelected}
      onContextMenu={onContexEvent}
    >
      <Image src={FolderIcon} />
      <Title isSelected={app.isSelected}>{props.data.name}</Title>
    </Wrapper>
  );
};
