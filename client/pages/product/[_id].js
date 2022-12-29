import { useRouter } from 'next/router';
import SingleProduct from '../../components/SingleProduct';
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { getproductdetails } from '../../express_api/product';

const Post = () => {
  const router = useRouter();
  const { _id } = router.query;
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getproductdetails(_id).then((parsed) => {
      setProducts(parsed);
      setIsLoading(false);
    });
  }, [_id]);

  return (
    <>
      <Navbar />
      {isLoading && <div>Loading... </div>}
      <SingleProduct
        img={products.image}
        category={products.category}
        brand={products.brand}
        fabric={products.fabric}
        condition={products.condition}
        size={products.size}
        price={products.sellingPrice}
      />
      <Footer />
    </>
  );
};

export default Post;
