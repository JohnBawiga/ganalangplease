import React from "react";
import styled from "styled-components";

const Item = styled.div`
  color: #fdfffd;
  margin: 2rem 1rem;
  position: relative;
  border: 2px solid #fdfffd;
  border-radius: 20px;
  transition: all 0.3s ease;
  background-color: #0c1f2e;
  flex-grow: 1; /* Ensure equal distribution of space */
  min-width: 20rem; /* Adjust as per your design needs */
  padding: 2rem; /* Adjust padding as needed */
`;

const Name = styled.h2`
  font-size: ${props => props.theme.fontlg};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: #fdfffd;
  margin-top: 1rem;
  word-wrap: break-word;
  word-break: break-word;
  text-align: center;
`;

const Position = styled.h2`
  font-size: ${props => props.theme.fontmd};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  color: #fdfffd;
  margin-top: 1rem;
  word-wrap: break-word;
  word-break: break-word;
  text-align: center;
`;

const Details = styled.ul`
  list-style-type: disc;
  font-size: 1rem;
  margin: 1rem 0;
  padding: 0;
  color: #fdfffd;
  word-wrap: break-word;
  word-break: break-word;
`;

const DetailItem = styled.li`
  font-size: ${props => props.theme.fontmd};
  margin-bottom: 0.5rem;
  word-wrap: break-word;
  word-break: break-word;
`;

const Component = ({ name = "", position = "", details = [] }) => {
  return (
    <Item>
      <Name>{name}</Name>
      <Position>{position}</Position>
      <Details>
        {details.map((detail, index) => (
          <DetailItem key={index}>{detail}</DetailItem>
        ))}
      </Details>
    </Item>
  );
};

export default Component;
