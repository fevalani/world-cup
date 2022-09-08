import { useState } from "react";
import styled from "styled-components";

import Round from "./Round";
import cup from "../assets/images/cup.png";

export default function Keying({ classified }) {
  const [champion, setChampion] = useState([{}, {}]);
  const [third, setThird] = useState([{}, {}]);
  const [quarters, setQuarters] = useState([{}, {}, {}, {}, {}, {}, {}, {}]);
  const [semi, setSemi] = useState([{}, {}, {}, {}]);
  const [finals, setFinals] = useState([{}, {}, {}, {}]);
  return (
    <Margin>
      <Title>Quem será o grande Campeão?</Title>
      <Container>
        <Final apear={champion[0].name && third[0].name}>
          <img src={cup} alt={"taça"} />
          <div>
            <div id="title">Campeão!!</div>
            <img id="flag" src={champion[0].flag} alt={"flag"} />
            <div id="name">{champion[0].name}</div>
          </div>
          <div id="restart" onClick={() => window.location.reload()}>
            RESTART
          </div>
        </Final>
        <Rounds>
          <p>Oitavas de final</p>
          <Round
            round="1"
            quarters={quarters}
            setQuarters={setQuarters}
            teamA={classified.A[0]}
            teamB={classified.B[1]}
          />
          <Round
            round="2"
            quarters={quarters}
            setQuarters={setQuarters}
            teamA={classified.C[0]}
            teamB={classified.D[1]}
          />
          <Round
            round="3"
            quarters={quarters}
            setQuarters={setQuarters}
            teamA={classified.E[0]}
            teamB={classified.F[1]}
          />
          <Round
            round="4"
            quarters={quarters}
            setQuarters={setQuarters}
            teamA={classified.G[0]}
            teamB={classified.H[1]}
          />
          <p></p>
        </Rounds>
        <Rounds>
          <p>Quartas de final</p>
          <Round round="9" semi={semi} setSemi={setSemi} teamA={quarters[0]} teamB={quarters[1]} />
          <Round round="10" semi={semi} setSemi={setSemi} teamA={quarters[2]} teamB={quarters[3]} />
          <p></p>
        </Rounds>
        <Rounds>
          <p>Semifinal</p>
          <Round round="13" finals={finals} setFinals={setFinals} teamA={semi[0]} teamB={semi[1]} />
          <p></p>
        </Rounds>
        <Finals>
          <p>Final</p>
          <Round round="16" setChampion={setChampion} teamA={finals[0]} teamB={finals[1]} />
          <img src={cup} alt="cup"></img>

          <p>Terceiro colocado</p>
          <Round round="15" setThird={setThird} teamA={finals[2]} teamB={finals[3]} />
        </Finals>
        <Rounds>
          <p>Semifinal</p>
          <Round round="14" finals={finals} setFinals={setFinals} teamA={semi[2]} teamB={semi[3]} />
          <p></p>
        </Rounds>
        <Rounds>
          <p>Quartas de final</p>
          <Round round="11" semi={semi} setSemi={setSemi} teamA={quarters[4]} teamB={quarters[5]} />
          <Round round="12" semi={semi} setSemi={setSemi} teamA={quarters[6]} teamB={quarters[7]} />
          <p></p>
        </Rounds>
        <Rounds>
          <p>Oitavas de final</p>
          <Round
            round="5"
            quarters={quarters}
            setQuarters={setQuarters}
            teamA={classified.B[0]}
            teamB={classified.A[1]}
          />
          <Round
            round="6"
            quarters={quarters}
            setQuarters={setQuarters}
            teamA={classified.D[0]}
            teamB={classified.C[1]}
          />
          <Round
            round="7"
            quarters={quarters}
            setQuarters={setQuarters}
            teamA={classified.F[0]}
            teamB={classified.E[1]}
          />
          <Round
            round="8"
            quarters={quarters}
            setQuarters={setQuarters}
            teamA={classified.H[0]}
            teamB={classified.G[1]}
          />
          <p></p>
        </Rounds>
      </Container>
    </Margin>
  );
}

const Margin = styled.div`
  margin: 0;
  padding: 0;
  margin-bottom: 50px;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-top: 100px;
`;

const Container = styled.div`
  width: 80%;
  height: 800px;

  padding: 0 40px 0;
  margin-bottom: 40px;

  display: flex;

  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);

  p {
    font-weight: bold;
    text-align: center;
  }
  @media (max-width: 768px) {
    height: 100%;
    display: block;
  }
`;

const Rounds = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: row;
    p {
      display: none;
    }
  }
`;
const Finals = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: relative;

  > img {
    width: 120px;
    margin: 20px 0;
  }
`;

const Final = styled.div`
  width: 100vw;
  height: 100vh;

  display: ${(props) => (props.apear ? "flex" : "none")};

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  background-color: rgba(255, 255, 255, 0.7);

  > img {
    width: 300px;
    height: 500px;
  }

  > div {
    width: 100%;
    height: 100%;
    color: #b2163e;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    #title {
      font-size: 150px;
    }
    #name {
      font-size: 40px;
    }
    #flag {
      width: 300px;
      height: 180px;

      box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.5);

      background-color: #b2163e;
    }
  }
  #restart {
    width: 200px;
    height: 40px;

    font-size: 20px;

    margin: 20px;
    color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    border-radius: 10px;

    background-color: #b2163e;
  }

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;

    > img {
      width: 100px;
      height: 100px;
    }

    > div {
      #title {
        font-size: 50px;
      }
      #name {
        font-size: 20px;
      }
      #flag {
        width: 150px;
        height: 90px;
      }
    }
  }
`;
