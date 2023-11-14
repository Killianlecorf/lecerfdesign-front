import Header from "@/Components/Header/Header"
import Image from 'next/image';
import imgHome from '../src/Assets/Img/photo_home.svg'

export default function Page() {
  return (
    <main className="Home">
        <Header />
        <div className="backgroundImage">
          <Image src={imgHome} alt="photo home"/>
        </div>
    </main>
  )
}
