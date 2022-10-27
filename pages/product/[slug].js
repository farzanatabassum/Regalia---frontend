import { useRouter } from 'next/router';
import SingleProduct from '../../components/SingleProduct';

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
     <SingleProduct img='/dress1.jpg' category='Dress' brand='Yellow' fabric='Diamond Georgette' condition='New with tag' size='M' price='TK 2000'/>
    </>
  );
};

export default Post;