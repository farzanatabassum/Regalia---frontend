import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import ProductItem from '../components/ProductItem';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Image
        src="/homepage.jpg"
        alt="homepage"
        width={4000}
        height={2000}
        className="object-cover"
      ></Image>
      {/* Product list */}
      <ProductItem />
      <Footer />
    </div>
  );
}
