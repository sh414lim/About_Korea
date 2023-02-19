import { useRouter } from "next/router";
import React from "react";
import MainBanner from "../../components/main/MainBanner";
import MainLayout from "../../layout/main/MainLayout";
import styled from "styled-components";
import SideMenu from "../../common/SideMenu";
import CategoryLayout from "../../layout/category/CategoryLayout";
import { ImgObject } from "../../common/img";
import Category from "../../components/main/Category";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

export default function ListPage() {
  const router = useRouter();
  const currrentRoute = "college";
  console.log(router);

  return (
    <>
      <MainLayout>
        <Container></Container>
      </MainLayout>
    </>
  );
}
