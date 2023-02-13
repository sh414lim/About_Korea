import React from "react";
import styled from "styled-components";
import { ImgObject } from "../../common/img";

interface Iroute {
  currentRoute: string;
}

const BannerList = styled.div`
  max-width: 90%;
  width: 100%;
  margin: 4rem auto;
  background: #ffffff;
`;

const BannerText = styled.div`
  width: 70%;
`;

const BannerMainTitle = styled.h2`
  font-size: 4.5vw;
  color: #151516;
  font-weight: 900;
`;
const BannerSubTitle = styled.p`
  font-size: 1vw;
  color: #151516;
`;

const BannerListImg = styled.div`
  max-width: 90%;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 0;
`;
const BannerTitle = styled.h2`
  font-size: 4.5vw;
  color: #151516;
  font-weight: 900;
`;

export default function MainBanner({ currentRoute }: Iroute) {
  return (
    <>
      <BannerList>
        <BannerText>
          <BannerMainTitle>About Korea</BannerMainTitle>
          <BannerSubTitle>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
            explicabo labore iste animi cumque aperiam dolores, earum incidunt,
            quasi corrupti rem molestiae accusamus deserunt corporis aspernatur
            alias. Quasi excepturi ipsum labore fuga nemo blanditiis, ipsa
            cumque perferendis voluptatem sed repellendus aut hic? Dolorem a eum
            recusandae id obcaecati quam accusantium laboriosam atque natus
            aspernatur esse animi vitae, nihil exercitationem nesciunt dolore
            minima ipsum aut unde eius dolorum. Est voluptatum nostrum numquam
            in inventore. Commodi ab ullam alias nostrum veniam atque possimus
            odio ex itaque. Tenetur aspernatur eaque nobis voluptas eius dolor
            iste autem expedita neque, ullam deserunt velit rerum quod.
          </BannerSubTitle>
        </BannerText>
      </BannerList>
    </>
  );
}
