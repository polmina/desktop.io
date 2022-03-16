import { useSelector } from "react-redux";
import styled from "styled-components";
import colors from "assets/colors.json";
import { Time } from "components/time";
import { App } from "./components/app";
import { DesktopIcon } from "./components/desktop-icon";

const Wrapper = styled.div`
  height: 3rem;
  background: ${colors.toolbar};
  display: flex;
  padding: 0.5rem 1rem;
  overflow: hidden;
  > * {
    margin: auto 0;
  }
`;

const Main = styled.div`
  flex: 1;
  padding: 0 3rem;
  display: flex;
  gap: 0.5rem;
`;

export const ToolBar = () => {
  const { apps }: any = useSelector((state) => state);

  const loadOpenApps = () =>
    apps.map((app, i) => (app.isOpen ? <App data={app} index={i} /> : null));
  return (
    <Wrapper>
      <DesktopIcon />
      <Main>{loadOpenApps()}</Main>
      <Time />
    </Wrapper>
  );
};
