import { ReactNode, useState } from "react"

export default function SearchAbleLayout(
      {children,
}: {
      children: ReactNode;
}) {

      const [search, setSearch] = useState(""); //검색어 변수와 저장할 state
      //이벤트 핸들러|
      const onChangeSearch = (e : React.ChangeEvent<HTMLInputElement>) => {
            setSearch(e.target.value);
      };
      
      return (<div>
            <div>
                  <input  value={search}
                  onChange={onChangeSearch}
                  placeholder="검색어를 입력하세요."></input>
                  <button>검색</button>
            </div>
            {children}
            </div>
)}