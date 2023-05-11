import { Activity,ActivityHeart } from "./icons/general"
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between w-full ">
      <div className="bg-red-50 w-[1440px] h-screen">
        <Activity/><ActivityHeart/>
      </div>
    </div>
  )
}
