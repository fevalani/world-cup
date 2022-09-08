import styled from "styled-components";
import Group from "./Group";
import groups from "../assets/content/groups";

export default function GroupGrid({ setClassified, classified, classifyTeamIsComplete }) {
  const groupsArray = Object.keys(groups);
  return (
    <Margin classifyTeamIsComplete={classifyTeamIsComplete}>
      <Title>Selecione os 1ᵒˢ, 2ᵒˢ e 3ᵒˢ colocados</Title>
      <Container>
        {groupsArray.map((group, i) => (
          <Group
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

const Margin = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  pointer-events: ${(props) => (props.classifyTeamIsComplete ? "none" : "auto")};
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
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
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(8, 1fr);
    grid-gap: 20px;

    margin: 20px;
    margin-bottom: 40px;
  }
`;
