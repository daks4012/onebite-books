import SearchAbleLayout from "@/components/searchAble-layout";
import { useRouter } from "next/router"
import { ReactNode } from "react";

export default function Page() {
      const router = useRouter();
      const {q} = router.query;
      return <h1>서치 페이지{q}</h1>
}

//메서드 장착
Page.getLayout = (page: ReactNode) => {
  return <SearchAbleLayout>{page}</SearchAbleLayout>
}