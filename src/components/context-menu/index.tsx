import { useSelector } from "react-redux";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 0.2rem;
  position: absolute;
  padding: 0.5rem;
  transition: opacity 0.1s linear;
  color: black !important;
  ${(props) => `
        display:${props.isOpen ? "block" : "none"};
        top: ${props.pos?.y}px;
        left: ${props.pos?.x}px
    `};
`;
const Item = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  border-radius: inherit;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;
export const ContextMenu = () => {
  const { contextMenu }: any = useSelector((state) => state);
  const loadData = () =>
    contextMenu.data?.map((el, i) => <Item key={i}>{el.name}</Item>);
  return (
    <Wrapper isOpen={contextMenu.pos} pos={contextMenu.pos}>
      {loadData()}
    </Wrapper>
  );
};
