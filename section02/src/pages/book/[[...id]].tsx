import { useRouter } from "next/router"

export default function Page() {
      const router = useRouter();
      const q = router.query.id;
      return <h1>{q}번째 Book page</h1>
}