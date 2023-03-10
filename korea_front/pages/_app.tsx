import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { SessionProvider } from "next-auth/react";
import Script from "next/script";
import GlobalStyle from "../styles/GlobalStyle";
import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import cookies from "next-cookies";
import { Context } from "vm";
import { useEffect } from "react";
import { RecoilRoot } from "recoil";
import { theme } from "../styles/theme";
declare global {
  // Kakao 함수를 전역에서 사용할 수 있도록 선언
  interface Window {
    Kakao: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  function kakaoInit() {
    // 페이지가 로드되면 실행
    window.Kakao.init(process.env.KAKAO_LOGIN_PRIVATE_JS_KEY);
    console.log(window.Kakao.isInitialized());
  }
  useEffect(() => {}, []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SessionProvider session={pageProps.session}>
          <RecoilRoot>
            <Component {...pageProps} />
          </RecoilRoot>
          <Script
            src="https://developers.kakao.com/sdk/js/kakao.js"
            onLoad={kakaoInit}
          ></Script>
        </SessionProvider>
      </ThemeProvider>
    </>
  );
}
