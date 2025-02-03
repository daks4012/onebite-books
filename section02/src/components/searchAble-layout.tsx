import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react"
import style from "./searchAble-layout.module.css"

export default function SearchAbleLayout(
      {children,
}: {
      children: ReactNode;
}) {
      const router = useRouter();
      const [search, setSearch] = useState(""); //검색어 변수와 저장할 state
      //q는 string, string[], undefinede일 수 있기 때문에 as로 string 타입 유도
      const q = router.query.q as string;

      useEffect(() => { //q를 의존성으로 변화가 생긴다면 search에 값 변경
            setSearch(q || "");
      }, [q]);

      //입력한 내용으로 상태 저장
      const onChangeSearch = (e : React.ChangeEvent<HTMLInputElement>) => {
            setSearch(e.target.value);
      };
      //저장된 내용으로 쿼리 스트링 전송 및 이동 
      const onSubmit = () => {
            if(!search || q === search) return; //없거나 같다면
            router.push(`/search?q=${search}`); //백틱
      }
      //엔터만 눌러도 서브밋 이벤트 핸들러 동작
      const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
            if(e.key === "Enter"){
                  onSubmit();
            }
      }
      
      return (<div>
            <div className={style.searchbar_container}>
                  <input  value={search}
                  onKeyDown={onKeyDown}
                  onChange={onChangeSearch}
                  placeholder="검색어를 입력하세요."></input>
                  <button onClick={onSubmit}>검색</button>
            </div>
            {children}
            </div>
)}