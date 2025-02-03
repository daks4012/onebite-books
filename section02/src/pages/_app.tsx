import GlobalLayout from "@/components/global-layout";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactNode } from "react";

//getLayout 타입 선언
type NextPageWinthLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode;
}

export default function App({ Component, pageProps }:
  AppProps & {Component: NextPageWinthLayout;}) {
    const getLayout = Component.getLayout ?? ((page: ReactNode) => (page)); //메서드 호출출
  return (
    <GlobalLayout>    
      {getLayout(<Component {...pageProps}/>)}
    </GlobalLayout>
  );
}