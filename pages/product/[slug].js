import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2  lg:h-auto  object-cover w-7/12 object-top rounded"
              src="/dress1.jpg"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-60 mt-6 lg:mt-0 ">
            <h1 className="text-gray-900  text-3xl title-font font-medium mb-3 ">
             Description
              </h1>
              <h2 className=" mb-2 text-lg title-font text-gray-500 tracking-widest">
                <span className='font-bold'>Category:</span> Dress
              </h2>
              <h2 className=" mb-2 text-lg title-font text-gray-500 tracking-widest">
              <span className='font-bold'>Brand:</span> Yellow
              </h2>
              <h2 className=" mb-2 text-lg title-font text-gray-500 tracking-widest">
              <span className='font-bold'>Fabric:</span> Diamond Georgette
              </h2>
              <h2 className="mb-2 text-lg title-font text-gray-500 tracking-widest">
              <span className='font-bold'>Condition:</span> New with tag
              </h2>
              <h2 className=" mb-2 text-lg title-font text-gray-500 tracking-widest">
              <span className='font-bold'>Size:</span> M
              </h2>
              <h2 className=" mb-2 text-lg title-font text-gray-500 tracking-widest">
              <span className='font-bold'>Price:</span> Tk 2000
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Post;