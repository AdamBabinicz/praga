import React from "react";
import styled from "styled-components";
import Map from "../img/map.png";
import Phone from "../img/phone.png";
import Send from "../img/send.png";

const Container = styled.div`
  height: 100vh;
  background: url("/img/12.jpg") center/cover no-repeat fixed;
`;
const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const FormContainer = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;
const Title = styled.h2`
  margin-top: 0;
  margin: 50px;
  color: #4e8cff;
  @media only screen and (max-width: 480px) {
    margin: 20px;
  }
`;
const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    height: 50%;
    margin-right: 0;
  }
`;
const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    height: 50%;
  }
`;
const Input = styled.input`
  width: 200px;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    padding: 5px;
  }
`;
const TextArea = styled.textarea`
  width: 200px;
  height: 60%;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    padding: 5px;
    margin-top: 20px;
  }
`;
const Button = styled.button`
  border: none;
  padding: 15px;
  background: #c7991c;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    opacity: 0.5;
  }
  @media only screen and (max-width: 480px) {
    padding: 5px;
    font-size: 14px;
  }
`;
const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
    margin-top: 20px;
  }
`;
const AddressItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;
const Icon = styled.img`
  width: 20px;
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    width: 15px;
  }
`;
const Text = styled.span`
  font-size: 20px;
  margin-right: 15px;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>
            Pytania? <br /> Chętnie odpowiem!
          </Title>
          <Form>
            <LeftForm>
              <Input placeholder="Imię lub Nick" />
              <Input placeholder="Email" />
              <Input placeholder="Temat" />
            </LeftForm>
            <RightForm>
              <TextArea placeholder="Wiadomość" />
              <Button>Wyślij</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer>
          <AddressItem>
            <Icon src={Map} />
            <Text>50°05′16″N 14°25′16″E</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Phone} />
            <Text>12444</Text>
            <Text>236 001 111 (ústředna)</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Send} />
            <Text>
              <a
                href="https://www.praha.eu/jnp/cz/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.praha.eu
              </a>
            </Text>
            <Text>info@praha.eu</Text>
          </AddressItem>
        </AddressContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;
