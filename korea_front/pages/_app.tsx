import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { SessionProvider } from "next-auth/react";
import theme from "../styles/theme";
import Script from "next/script";
import GlobalStyle from "../styles/GlobalStyle";

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
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
          <Script
            src="https://developers.kakao.com/sdk/js/kakao.js"
            onLoad={kakaoInit}
          ></Script>
        </SessionProvider>
      </ThemeProvider>
    </>
  );
}
