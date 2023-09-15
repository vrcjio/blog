import Carousel from "@/componets/carousel"
import TopBar from "@/componets/topbar"
import UserArticals from "@/componets/userArticals"

const page = () => {
  return (
    <>
    <TopBar />
    <Carousel />
    <div className="fluid-container">
      <UserArticals />
    </div>
    </>
  )
}

export default page