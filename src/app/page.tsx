import Carousel from "@/componets/carousel"
import TopBar from "@/componets/topbar"
import UserArticals from "@/componets/userArticals"
import LoadingInit from "@/util/systemInit"
export default function HomePage(){
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
