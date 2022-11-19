import Image from 'next/image';
import ProductItem from '../components/ProductItem';

export default function Home() {
  return (
    <div>
      <Image
        src="/homepage.jpg"
        alt="homepage"
        width={4000}
        height={2000}
        className="object-cover"
      ></Image>
      {/* Product list */}
      <ProductItem />
    </div>
  );
}
