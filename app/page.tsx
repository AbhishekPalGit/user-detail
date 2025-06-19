import FetchApi from "@/Services/FetchApi";
import Dashboard from '@/Components/Dashboard'
 export default async function Home() {
  const userData = await FetchApi()
  console.log("datatata", userData)
  return (
    <>
    {
      userData && <Dashboard userDetails= {userData}/>
    }
    </>
  );
}
