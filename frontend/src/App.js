import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { Player } from 'video-react';
import source from './AVI212.avi';
import source2 from './noel.mov';




function App() {
  return (
    <>
    {/* <>slow blinking</> */}
    <Container>
      <Player style={{padding: 0}}>
        <source src= {source2}  />
      </Player>
      <Player>
        <source src= {source2} />
      </Player>
    </Container>
  </>
  );
}

const Container = styled.span`
padding: 10vh;
height: 40vh;
`;
export default App;
