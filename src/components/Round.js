import styled from "styled-components";
import backImage from "../assets/images/keyImage.jpg";
import { useState } from "react";

export default function Round({
  teamA,
  teamB,
  round,
  quarters,
  semi,
  finals,
  setQuarters,
  setSemi,
  setFinals,
  setChampion,
  setThird,
}) {
  const [winner, setWinner] = useState({ name: "", flag: "" });

  function whoWins(name, flag) {
    if (winner.name === "" && teamA.name && teamB.name) {
      const newWinner = { name, flag };
      switch (round) {
        case "1":
          quarter(0, name, flag);
          break;
        case "2":
          quarter(1, name, flag);
          break;
        case "3":
          quarter(2, name, flag);
          break;
        case "4":
          quarter(3, name, flag);
          break;
        case "5":
          quarter(4, name, flag);
          break;
        case "6":
          quarter(5, name, flag);
          break;
        case "7":
          quarter(6, name, flag);
          break;
        case "8":
          quarter(7, name, flag);
          break;
        case "9":
          semis(0, name, flag);
          break;
        case "10":
          semis(1, name, flag);
          break;
        case "11":
          semis(2, name, flag);
          break;
        case "12":
          semis(3, name, flag);
          break;
        case "13":
          final(0, name, flag);
          break;
        case "14":
          final(1, name, flag);
          break;
        case "15":
          const newThird = [];
          if (name === teamA.name) {
            newThird.push(teamA);
            newThird.push(teamB);
          } else {
            newThird.push(teamB);
            newThird.push(teamA);
          }
          setThird(newThird);
          break;
        case "16":
          const newChampion = [];
          if (name === teamA.name) {
            newChampion.push(teamA);
            newChampion.push(teamB);
          } else {
            newChampion.push(teamB);
            newChampion.push(teamA);
          }
          setChampion(newChampion);
          break;
        default:
          break;
      }
      setWinner(newWinner);
    } else {
      return;
    }
  }

  function quarter(index, name, flag) {
    const newQuarter = [...quarters];
    newQuarter[index].name = name;
    newQuarter[index].flag = flag;
    setQuarters(newQuarter);
  }

  function semis(index, name, flag) {
    const newSemi = [...semi];
    newSemi[index].name = name;
    newSemi[index].flag = flag;
    setSemi(newSemi);
  }

  function final(index, name, flag) {
    const newFinals = [...finals];
    newFinals[index].name = name;
    newFinals[index].flag = flag;
    if (name === teamA.name) {
      newFinals[index + 2].name = teamB.name;
      newFinals[index + 2].flag = teamB.flag;
    } else {
      newFinals[index + 2].name = teamA.name;
      newFinals[index + 2].flag = teamA.flag;
    }
    setFinals(newFinals);
  }

  return (
    <Container>
      <p>{teamA.name ?? "Time A"}</p>
      <FlagTeam
        isWinner={winner.name === teamA.name ? true : false}
        loser={winner.name !== "" && winner.name !== teamA.name}
        onClick={() => whoWins(teamA.name, teamA.flag)}
        src={teamA.flag ?? backImage}
        alt={"flag"}
      ></FlagTeam>
      <p>x</p>
      <FlagTeam
        isWinner={winner.name === teamB.name ? true : false}
        loser={winner.name !== "" && winner.name !== teamB.name}
        onClick={() => whoWins(teamB.name, teamB.flag)}
        src={teamB.flag ?? backImage}
        alt={"flag"}
      ></FlagTeam>
      <p>{teamB.name ?? "Time B"}</p>
    </Container>
  );
}

const Container = styled.div`
  width: 121px;
  height: 120px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  background-color: rgba(255, 255, 255, 0.9);

  box-shadow: 2px 5px 10px 0 rgba(255, 255, 255, 0.5);

  border-radius: 10px;

  color: black;
  font-weight: bold;

  p {
    font-size: 15px;
    margin: 0;
  }
  @media (max-width: 768px) {
    height: 140px;
    width: 100px;
  }
`;

const FlagTeam = styled.img`
  width: 50px;
  height: 30px;

  margin: 0;

  cursor: pointer;

  border-radius: 10px;
  border: 3px solid ${(props) => (props.isWinner ? "green" : "black")};

  background-image: url(${(props) => props.flag});
  background-size: cover;
  background-position: center;

  opacity: ${(props) => (props.loser ? "0.5" : "1")};
`;
