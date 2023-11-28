import { Roboto } from "next/font/google"
import Image from "next/image"
import profile from '../../public/img/profiletest.png'
const roboto = Roboto({
  subsets: ['latin'],
  weight:['100', '300', '400','500','700','900']
})
export default function Home() {

  return (
    <main className="home_container" >
      <div className="circle">
        <Image
          src={profile}
          alt="profile test"
          sizes='300em'
          style={{
            width: '100%',
            height: 'auto',
            
          }}  
        />
      </div>
      <div className="home_text_container">
        <p className={roboto.className}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, sapiente suscipit? Explicabo, doloremque sequi. Debitis velit voluptatum vero tenetur accusamus nihil nisi exercitationem pariatur nemo qui eius, reiciendis doloremque! Eum eaque iure porro quia nemo exercitationem reiciendis nostrum culpa eius a pariatur non deserunt est, quam adipisci, maxime quas corrupti nulla id? Corporis voluptate tenetur quam perspiciatis illo cupiditate voluptas. .</p><br /><br />
        <p className={roboto.className}>Contact: davidroaf@gmail.com <br /> Current Residence: Alexandria, VA</p>
      </div>
    </main>
  )
}
