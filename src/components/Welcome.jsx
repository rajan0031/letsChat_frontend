import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";
export default function Welcome() {
  const [userName, setUserName] = useState("");



  useEffect(() => {
    const fetchUserName = async () => {
      const user = JSON.parse(localStorage.getItem('desi-chat'));
      if (user) {
        setUserName(user.username);
      }
    };

    fetchUserName();
  }, []); // Dependency array is empty because you only want to run this effect on component mount



  return (
    <Container>
      <img src={Robot} alt="" />
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff; /* WhatsApp background color */
  color: #075e54; /* WhatsApp primary text color */
  height: 100vh;
  width: 100vw;
  img {
    height: 20rem;
  }
  span {
    color: #25d366; /* WhatsApp green */
  }
`;
