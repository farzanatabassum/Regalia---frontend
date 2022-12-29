import { useRouter } from 'next/router';
import SingleProduct from '../../components/SingleProduct';
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { getproductdetails, getProductViews } from '../../express_api/product';
// import { getProductViews } from '../../express_api/product';

const Post = () => {
  const router = useRouter();
  const { _id } = router.query;
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(-1);

  useEffect(() => {
    if (count == 0) {
      return;
    }
    count++;
    getProductViews(_id).then((data) => {
      console.log(data);
      setCount(data.totalViews);
      // setProducts(data);
      // setIsLoading(false);
    });
    getproductdetails(_id).then((parsed) => {
      console.log('Single', parsed);
      setProducts(parsed);
      setIsLoading(false);
    });
  }, [_id]);

  return (
    <>
      <Navbar />
      {isLoading && <div>Loading... </div>}
      <SingleProduct
        count={count}
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
