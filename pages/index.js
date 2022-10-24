import Image from "next/image"

export default function Home() {
  return (
    <div >
       <Image src='/homepage.jpg' alt='homepage' width={4000} height={2000} className='object-cover'></Image>

    </div>
  )
}
