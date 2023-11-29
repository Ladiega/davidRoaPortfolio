import { Roboto } from "next/font/google"
import Image from "next/image"
import profile from '../../public/img/profiletest.png'
import Ham from "./components/Hambutton/Hambutton"
import Bio from "./bio/page"
const roboto = Roboto({
  subsets: ['latin'],
  weight:['100', '300', '400','500','700','900']
})
export default function Home() {

  return (
    <main className="home_container" >
       <Bio/> 
    </main>
  )
}
