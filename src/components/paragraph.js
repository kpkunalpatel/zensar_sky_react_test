import * as React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: 15px;
  line-height: 1.5em;
  white-space: ${props => props.flag ? 'nowrap' : 'wrap'};; 
  width: ${props => props.flag ? '200px' : '20'}; 
  overflow: ${props => props.flag ? 'hidden' : 'visible'};
  text-overflow: ellipsis;
`

const paragraph = (props) => {

  return (
    <>
      <Paragraph flag={props.flag}>{props.text}</Paragraph>
      <a style={{fontSize: '15px', paddingTop: '10px', cursor: 'pointer', textColor: 'blue'}} href={props.youtubeLink} rel="noreferrer" target="_blank">Watch YouTube Video</a>
    </>
  )
}

export default paragraph;