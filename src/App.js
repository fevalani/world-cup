import styled from "styled-components";
import { useState } from "react";

import GroupGrid from "./components/GroupGrid";
import Keying from "./components/Keying";
import background from "./assets/images/background.jpg";
import logo from "./assets/images/logo.png";
import cuplogo from "./assets/images/cuplogo.png";

export default function App() {
  const [classified, setClassified] = useState({
    A: [],
    B: [],
    C: [],
    D: [],
    E: [],
    F: [],
    G: [],
    H: [],
  });

  function classifyTeamIsComplete() {
    const arr = ["A", "B", "C", "D", "E", "F", "G", "H"];
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
      const group = arr[i];
      const groupArr = classified[group];
      if (groupArr.length === 2) {
        counter++;
      }
    }
    if (counter === 8) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <Container background={background} classifyTeamIsComplete={classifyTeamIsComplete}>
      <Logos>
        <img id="image" src={cuplogo} alt="logo" />
        <img id="image" src={logo} alt="logo" />
      </Logos>
      <GroupGrid setClassified={setClassified} classified={classified}></GroupGrid>
      {classifyTeamIsComplete() ? <Keying classified={classified}></Keying> : ""}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: white;
`;

const Logos = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 250px;

    margin: 20px 0 50px 0;

    border-radius: 10px;
  }
`;
