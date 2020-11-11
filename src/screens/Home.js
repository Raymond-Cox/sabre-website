import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import InfoRow from "../components/InfoRow";

// Images
import LiveAnnouncementImg from "../assets/live-announcement.png";
import VerifiedUsersImg from "../assets/multi-user-verified.png";

export default function Home() {
  return (
    <MainContainer>
      <Hero />
      <InfoRow
        header="Automated announcements for when you or your crew goes live"
        subheader="Easy 3-step setup to have your own hype-man within your discord community. Follow the announcement to the streamer's twitch url with a single click."
        img={LiveAnnouncementImg}
        reverse={true}
      />
      <InfoRow
        header="Choose between server-owner only or allow others to promote their streams within your server"
        subheader="Want to make sure no announcement goes unnoticed? You also have the option of @everyone tagging the whole server! You can change any of these settings at any time."
        img={VerifiedUsersImg}
      />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
