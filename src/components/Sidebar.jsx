import React from "react";
import {
  AiFillProfile,
  AiFillHome,
  AiFillCustomerService,
  AiOutlineProfile,
} from "react-icons/ai";
import {
  SidebarContainer,
  SidebarWrap,
  Icon,
  CloseIcon,
  SidebarLink,
  SidebarMenu,
} from "./SidebarElements";
const Sidebar = (props) => {
  return (
    <>
      <SidebarContainer isOpen={props.isOpen}>
        <SidebarWrap>
          <Icon onClick={props.toggle}>
            <CloseIcon />
          </Icon>
          <SidebarMenu>
            <SidebarLink to="/" onClick={props.toggle} offset={-60}>
              <AiFillHome />
              Start
            </SidebarLink>
            <SidebarLink to="/próg" onClick={props.toggle} offset={-60}>
              <AiFillProfile />
              Próg
            </SidebarLink>
            <SidebarLink to="/miasto" onClick={props.toggle} offset={-60}>
              <AiFillCustomerService />
              Miasto
            </SidebarLink>
            <SidebarLink to="/waluta" onClick={props.toggle} offset={-60}>
              <AiFillProfile />
              Waluta
            </SidebarLink>
            <SidebarLink to="/kontakt" onClick={props.toggle} offset={-60}>
              <AiOutlineProfile />
              Kontakt
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrap>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
