import styled from "styled-components";

export const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  min-height: 100vh;
  display: grid;
  place-items: center;
  /* height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; */
  color: #333;
  z-index: 999;
`;

export const PopupInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
  width: 100%;
  max-height: 100%;
  height: aut;
  width: 640px;
  background: #fff;

  h3 {
    font-size: 1.5rem;
  }

  img {
    max-width: 65%;
  }

  p {
    font-size: 1.1rem;
  }
  em {
    margin-top: 0.5rem;
    font-style: italic;
    font-size: 1rem;
  }

  @media screen and (max-width: 670px) {
    font-size: 1.4rem;
    width: 90%;
    p {
      font-size: 0.9rem;
    }
    img {
      max-width: 100%;
    }
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  border: none;
  font-size: 2rem;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    top: 12px;
    right: 12px;
  }
`;
