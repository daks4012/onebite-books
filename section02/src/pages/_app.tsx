import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
// import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const onClickButton = () => {
    router.push("/book")
  }
  // useEffect(()=>{
  //   router.prefetch('/book')
  // },[])

  return (
  <>
  <header>
    <Link href={"/"}>index</Link>&nbsp;
    <Link href={"/search"}>search</Link>&nbsp;
    <Link href={"/book/1"}>book/1</Link>
    <div>
      <button onClick={onClickButton}>book페이지로 이동</button>
    </div>
    </header>  
  <Component {...pageProps} />
  </>
  );
}