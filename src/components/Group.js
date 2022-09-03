import styled from "styled-components";
import { useState } from "react";

export default function Group({ name, group, setClassified, classified }) {
  const [places, setPlaces] = useState([]);

  function changePlaces(team, i) {
    const newPlaces = [...places];
    if (!newPlaces.includes(team)) {
      newPlaces.push(team);
      if (places.length === 2) {
        for (let j = 0; j < 4; j++) {
          if (!newPlaces.includes(group[j].name)) {
            newPlaces.push(group[j].name);
          }
        }
        setClassification(newPlaces);
      }
      const selectTeam = group[i];
      group.splice(i, 1);
      group.splice(places.length, 0, selectTeam);
      setPlaces(newPlaces);
    } else {
      const selectTeam = group[i];
      newPlaces.splice(i, 1);
      group.splice(i, 1);
      group.push(selectTeam);
      setPlaces(newPlaces);
    }
  }

  function setClassification() {
    const newClassified = { ...classified };
    newClassified[name].push(group[0]);
    newClassified[name].push(group[1]);
    setClassified(newClassified);
  }

  return (
    <Container>
      <div>Grupo {name}</div>

      {Object.keys(group).map((index, i) => (
        <Position
          key={i}
          onClick={() => changePlaces(group[index].name, index)}
          exists={places.includes(group[index].name)}
          classified={i + 1 > 2 ? false : true}
        >
          <div id="pos" exists={places.includes(group[index].name)}>
            {i + 1 + "ᵒ"}
          </div>
          <div id="team">{group[index].name}</div>
          <img id="flag" src={group[index].flag} alt="team" />
        </Position>
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 230px;
  height: 230px;
  padding-bottom: 10px;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  background-color: rgba(255, 255, 255, 0.88);

  border-radius: 10px;

  box-shadow: 2px 2px 15px 0px black;

  div:first-child {
    font-size: 20px;
    color: #b2163e;
  }
`;

const Position = styled.div`
  width: 80%;
  height: 38px;
  padding: 0 10px;

  background-color: rgba(100, 100, 100, 0.5);

  border: 3px solid
    rgba(
      ${(props) =>
        props.exists
          ? props.classified
            ? `23, 145, 31, 0.9`
            : `255, 0, 0, 0.9`
          : `255, 255, 255, 0.5`}
    );

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 10px;
  font-size: 18px;

  box-shadow: 2px 2px 5px 0px black;

  :hover {
    cursor: pointer;
  }

  #pos {
    margin-right: 10px;
    color: white;

    display: ${(props) => (props.exists ? `flex` : `none`)};
  }

  #team {
    color: ${(props) => (props.classified && props.exists ? `#17911F` : `white`)};
  }

  #flag {
    width: 30px;
    height: 30px;

    margin: 0;

    border-radius: 50%;
  }
`;
