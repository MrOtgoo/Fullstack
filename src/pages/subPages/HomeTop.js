import React from "react";
import styled from "styled-components";
import HomepageImage from "../../image/Homepageimg.jpg";
import Header from "../../components/Header";

const Container = styled.div`
  background: url(${HomepageImage}) no-repeat center center fixed;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  width: 300px;
  height: 100px;
  display: flex;
  justify-content: center;
  background: transparent;
  position: relative;
  margin-top: 3rem;
`;

const SubTitleContainer = styled.div`
  width: 300px;
  height: 100px;
  display: flex;
  justify-content: center;
  background: #transparent;
  position: relative;
  margin-top: 3rem;
`;

const Text = styled.span`
  font-size: 20px;
  color: white;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  font-size: 5px;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px;
  border: 2px solid #0073e6;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  background: #0073e6;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;
  
  &:hover {
    background: #005bb8;
  }
`;

const HomeTop = (props) => {
  return (
    <Container>
      <Header user={props.user} darkTheme={false}/>
      <TitleContainer>
        <Text>Instant collaborations</Text>
        <Text>For Remote teams</Text>
      </TitleContainer>
      <SubTitleContainer>
        <InputContainer>
          <Text>All in one for your remote team chats</Text>
          <Text>collaborations and track projects</Text>
        </InputContainer>
      </SubTitleContainer>
      <div>
        <Input placeholder="Email" />
        <Button>Get early access</Button>
      </div>
    </Container>
  );
};

export default HomeTop;

