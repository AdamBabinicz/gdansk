import React from "react";
import PrimaryButton from "./PrimaryButton";
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
              {/* <AiFillHome /> */}
              Start
            </SidebarLink>
            <SidebarLink to="/poczatki" onClick={props.toggle} offset={-60}>
              {/* <AiFillProfile /> */}
              Początki
            </SidebarLink>
            <SidebarLink to="/nazwa" onClick={props.toggle} offset={-60}>
              {/* <AiFillCustomerService /> */}
              Nazwa
            </SidebarLink>
            <SidebarLink to="/rozwoj" onClick={props.toggle} offset={-60}>
              {/* <AiFillProfile /> */}
              Rozwój
            </SidebarLink>
            <SidebarLink to="/amberif" onClick={props.toggle} offset={-60}>
              {/* <AiOutlineProfile /> */}
              Amberif
            </SidebarLink>
            <SidebarLink to="/ciekawostki" onClick={props.toggle} offset={-60}>
              {/* <AiOutlineProfile /> */}
              Ciekawostki
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrap>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
