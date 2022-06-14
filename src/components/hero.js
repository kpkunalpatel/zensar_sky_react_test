import * as React from "react";
import styled from "styled-components";
import { device } from "../helpers";

import Image from "./image";
import Lockup, { LockupContainer } from "./lockup";
import beer from "../images/space.jpg";
import Wrapper from "../layout/wrapper";
import Clock from "./clock";

const Hero = styled.div`
  color: white;
  height: 100vh;
  overflow: hidden;

  @media ${device.laptop} {
    width: 100%;
    height: auto;
    max-height: 100vh;
    overflow: hidden;
    position: relative;
  }

  ${LockupContainer} {
    position: absolute;
    padding-top: 200px;
    width: 100%;
    max-width: 550px;
  }
`;

// const dummyText = `Space Exploration Technologies Corp. is an American aerospace manufacturer and space transportation services company headquartered in Hawthorne, California. It was founded in 2002 by Elon Musk with the goal of reducing space transportation costs to enable the colonization of Mars.`;

const hero = (props) => {
  return (
    <>
      <Hero>
        <Wrapper>
          <Lockup text={''} tag="h1" title="Space X" />
          <Clock />
        </Wrapper>
        <Image url={beer} />
      </Hero>
    </>
  );
};

export default hero;
