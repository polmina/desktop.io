import { OpenApp } from "components/open-app";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const OpenAppsWrapper = () => {
  const { apps }: any = useSelector((state) => state);

  const loadData = () =>
    apps.map((el: any, i: number) =>
      el.isPopupOn ? <OpenApp data={el} key={i} index={i} /> : null
    );
  return <>{loadData()}</>;
};
