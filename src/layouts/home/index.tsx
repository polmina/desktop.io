import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import colors from "assets/colors.json";
import { Icon } from "components/icon";
import { ToolBar } from "components/toolbar";
import { ContextMenu } from "components/context-menu";
import { OpenAppsWrapper } from "components/open-apps-wrapper";
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${colors.desktop};
  display: flex;
  flex-direction: column;
  position: relative;
`;
const Main = styled.div`
  flex: 1;
  display: flex;
  margin: 1rem;
  gap: 1rem;
  overflow-x: hidden;
  flex-wrap: wrap;
  align-content: flex-start;
`;

const contextMenuData = [{ name: "Crear carpeta" }];
export const Home = () => {
  const { apps }: any = useSelector((state) => state);
  const dispatch = useDispatch();
  const loadIcons = () =>
    apps.map((app, i) => <Icon key={i} data={app} index={i} />);

  const onClick = () => {
    dispatch({
      type: `update/apps/all`,
      value: { isSelected: false },
    });
    dispatch({
      type: `set/contextMenu`,
      value: { data: null, pos: null },
    });
  };
  const contextMenuEvent = (e) => {
    const pos = { x: e.pageX, y: e.pageY };
    dispatch({
      type: `set/contextMenu`,
      value: { data: contextMenuData, pos: pos },
    });
  };
  return (
    <>
      <Wrapper>
        <Main onClick={onClick} onContextMenu={contextMenuEvent}>
          {loadIcons()}
        </Main>
        <ToolBar />
        <ContextMenu />
      </Wrapper>
      <OpenAppsWrapper />
    </>
  );
};
