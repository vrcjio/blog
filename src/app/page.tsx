import Carousel from "@/componets/carousel"
import TopBar from "@/componets/topbar"
import UserArticals from "@/componets/userArticals"
import Loading from "./loading"
import LoadingInit from "@/util/systemInit"

const Page = () => {
  return (
    <>
    <LoadingInit />
    <TopBar />
    <Carousel />
    <div className="fluid-container">
      <UserArticals />
    </div>
    </>
  )
}

export default Page