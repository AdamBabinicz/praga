import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  width: 100%;
  height: 100%;
  position: fixed;
  background: #4e8cff;
  z-index: 9999;
  align-items: center;
  top: 0;
  right: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
`;
export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;
export const Icon = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: 2.3rem;
  outline: none;
  background: transparent;
  cursor: pointer;
`;
export const SidebarWrap = styled.div`
  color: #fff;
  margin-top: 4rem;
`;
export const SidebarMenu = styled.ul`
  width: 100%;
  list-style: none;
  margin: 0;
  display: grid;
  justify-content: center;
`;
export const SidebarLink = styled(LinkR)`
  padding: 1rem 3rem;
  font-size: 2rem;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 2rem;
  cursor: pointer;
  margin: 1rem 2rem;

  @media only screen and (max-width: 480px) {
    font-size: 1.5rem;
  }

  &:hover {
    color: #fff;
    background: #f54748;
    transition: 0.2s;
  }
`;
