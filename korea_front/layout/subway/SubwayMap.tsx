import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import Link from "next/link";
import axios from "axios";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0px 0px 0px;
`;

const MapBox = styled.div`
  height: 85vh;
  width: 35vw;
  margin: 0px 0px 0px 20px;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 60vh;
  width: 25vw;
`;

const FindMap = styled.div`
  height: 50vh;
  width: 30vw;
  margin: 20px 0px 0px 0px;
  background-color: yellow;
`;

const SubImg = styled.img`
  object-fit: cover;
  width: 30vw;
  height: 32vh;
  position: relative;
`;

export default function SubwayMap() {
  const [position, setPosition] = useState({
    lat: 37.55262330412975,
    lng: 126.9728733697602,
  });
  const [weatherInfo, setWeatherInfo] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${position.lat}&lon=${position.lng}&appid=42ab373a0da8b86322e7d23c198bf55d`
      )
      .then((res) => {
        console.log(res);
        setWeatherInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(position);
  }, [position]);

  return (
    <Container>
      <MapBox>
        <Map
          center={{ lat: position.lat, lng: position.lng }}
          style={{
            width: "35vw",
            height: "85vh",
            borderRadius: "10px",
            opacity: 0.8,

            boxShadow:
              "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
          }}
          onClick={(_t, mouseEvent) =>
            setPosition({
              lat: mouseEvent.latLng.getLat(),
              lng: mouseEvent.latLng.getLng(),
            })
          }
        ></Map>
      </MapBox>
      <SubContainer>
        <FindMap>{/* <SubImg src={ImgObject.findMap} /> */}</FindMap>
        <FindMap>123</FindMap>
        <FindMap>123</FindMap>
      </SubContainer>
    </Container>
  );
}
