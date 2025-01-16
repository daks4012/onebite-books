import { ReactNode } from "react"
import style from "../styles/index.module.css"
import SearchAbleLayout from "@/components/searchAble-layout"

export default function Home() {
  return <>
  <h1 className={style.h1}>인덱스 페이지</h1>
  <h2 className={style.h2}>이건 블루로</h2>
  </>
}
Home.getLayout = (page: ReactNode) => {
  return <SearchAbleLayout>{page}</SearchAbleLayout>
}