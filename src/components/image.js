import React from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { device } from "../helpers";

const Images = styled.img`
  display: inline-block;
  height: 100vh;

  @media ${device.laptop} {
    width: 100%;
    height: auto;
  }
`;

const Image = (props) => {
  const navigate = useNavigate();
  const onNavigate = () => {
    const selectData = JSON.stringify(props.item);
    console.log(props.item);
    navigate('/selectedLaunch', { state: { data: selectData } });
  }
  
  return (
    <>
      <Images onClick={() => onNavigate()} src={props.url} />
    </>
  );
};

export default Image;
