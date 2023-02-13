import { useRouter } from "next/router";
import React from "react";
import MainBanner from "../../components/main/MainBanner";
import MainLayout from "../../layout/main/MainLayout";
import styled from "styled-components";
import SideMenu from "../../common/SideMenu";
import CategoryLayout from "../../layout/category/CategoryLayout";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

type Props = {};

export default function ListPage({}: Props) {
  const router = useRouter();
  const currrentRoute = "college";
  console.log(router);

  return (
    <Container>
      <MainLayout>
        메인 레이아웃에서 
      </MainLayout>
    </Container>
  );
}
