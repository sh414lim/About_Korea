import { useRouter } from "next/router";
import React from "react";
import MainBanner from "../../components/main/MainBanner";
import MainLayout from "../../layout/main/MainLayout";
import styled from "styled-components";
import SideMenu from "../../common/SideMenu";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

const ListGroup = styled.div`
  height: 80vh;
  background-color: #ebebeb;
`;

type Props = {};

export default function ListPage({}: Props) {
  const router = useRouter();

  return (
    <Container>
      <MainLayout>
        <MainBanner />
        <ListGroup>
          <SideMenu />
        </ListGroup>
      </MainLayout>
    </Container>
  );
}
