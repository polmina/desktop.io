import { useState, useEffect } from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  color: white;
  margin: auto 0;
`;

export const Time = () => {
  const [time, setTime]: any = useState(new Date());

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);

  return <Wrapper>{formatTime(time)} </Wrapper>;
};

function formatTime(date) {
  return `
    ${fix(date.getHours())}:${fix(date.getMinutes())}:${fix(
    date.getSeconds()
  )}`;
}
function fix(n) {
  if (n < 10) return "0" + n;
  return n;
}
