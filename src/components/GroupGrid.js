import { useState } from "react";

import styled from "styled-components";
import Group from "./Group";
import groups from "../assets/content/groups";

export default function GroupGrid({ setClassified, classified, classifyTeamIsComplete }) {
  const groupsArray = Object.keys(groups);
  const [groupSelected, setGroupSelected] = useState("A");
  return (
    <Margin classifyTeamIsComplete={classifyTeamIsComplete}>
      <Title>Selecione os 1ᵒˢ, 2ᵒˢ e 3ᵒˢ colocados</Title>
      {window.innerWidth < 468 ? (
        <GroupsBarContainer>
          <p>Grupos:</p>
          <GroupsBar classifyTeamIsComplete={classifyTeamIsComplete}>
            {groupsArray.map((group, i) => {
              return (
                <GroupButton
                  groupSelected={groupSelected === group}
                  key={i}
                  onClick={() => setGroupSelected(group)}
                >
                  {group}
                </GroupButton>
              );
            })}
          </GroupsBar>
        </GroupsBarContainer>
      ) : (
        ""
      )}
      <Container>
        {groupsArray.map((group, i) => (
          <Group
            focus={window.innerWidth < 478 ? groupSelected === group : true}
            key={i}
            name={group}
            group={groups[group]}
            classified={classified}
            setClassified={setClassified}
          ></Group>
        ))}
      </Container>
    </Margin>
  );
}

const GroupsBarContainer = styled.div`
  width: 100%;

  > p {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
    margin-left: 10px;
  }
`;

const GroupsBar = styled.div`
  width: 90%;
  height: 100%;

  margin: 0 auto;

  font-weight: bold;

  pointer-events: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GroupButton = styled.p`
  width: 30px;
  height: 30px;
  font-size: 18px;

  margin-bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;

  background-color: ${(props) => (props.groupSelected ? "#17911F" : "#454545")};
`;

const Margin = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  pointer-events: ${(props) => (props.classifyTeamIsComplete ? "none" : "auto")};

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Container = styled.div`
  color: white;

  margin: 20px;
  margin-bottom: 40px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 20px;

  flex-wrap: wrap;

  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 20px;

    margin: 20px;
    margin-bottom: 40px;
  }

  @media (max-width: 478px) {
    display: flex;
    flex-direction: row;

    margin: 20px;
    margin-bottom: 40px;
  }
`;
