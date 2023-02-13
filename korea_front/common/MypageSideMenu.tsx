import React from "react";
import styled from "styled-components";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import HomeIcon from "@mui/icons-material/Home";
import MessageIcon from "@mui/icons-material/Message";
import SchoolIcon from "@mui/icons-material/School";
import SettingsIcon from "@mui/icons-material/Settings";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import EmailIcon from "@mui/icons-material/Email";
import StarIcon from "@mui/icons-material/Star";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";

const SideMenu = styled.div`
  width: 15vw;
  /* background-color: #f1f5fb; */
  /* margin: 0px 0px 0px 0px; */
  height: 46vh;
  margin: 40px 0px 0px 0px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 20px;
`;

const SideListGroup = styled.ul`
  display: flex;
  flex-direction: column;
`;

const SideListItem = styled.li`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  color: black;
  /* margin: 20px 0px 0px 0px; */
  padding: 20px 0px 20px 30px;
  border-radius: 15px;
  &:hover {
    color: white;
    background-color: black;
    transition: 0.5s;
  }
`;
const Logo = styled.span`
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;
const CateTitle = styled.span`
  font-size: 17px;
  font-weight: 600;
  padding: 5px 0px 0px 20px;
`;
export default function MypageSideMenu() {
  return (
    <>
      <SideMenu>
        <Logo></Logo>
        <SideListGroup>
          <SideListItem>
            <HomeIcon fontSize="large" />
            <CateTitle>Home</CateTitle>
          </SideListItem>
          <SideListItem>
            <StarBorderPurple500Icon fontSize="large" />
            <CateTitle>Favirite</CateTitle>
          </SideListItem>
          <SideListItem>
            <AirplaneTicketIcon fontSize="large" />
            <CateTitle>Trip</CateTitle>
          </SideListItem>
          <SideListItem>
            <SchoolIcon fontSize="large" />
            <CateTitle>College</CateTitle>
          </SideListItem>
          <SideListItem>
            <EmailIcon fontSize="large" />
            <CateTitle>Review</CateTitle>
          </SideListItem>
          <SideListItem>
            <SettingsIcon fontSize="large" />
            <CateTitle>Setting</CateTitle>
          </SideListItem>
        </SideListGroup>
      </SideMenu>
    </>
  );
}
