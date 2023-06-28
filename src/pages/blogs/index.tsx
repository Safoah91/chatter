import { get } from "api";
import Button from "components/button";
import { FC } from "react";
import { BsBook } from "react-icons/bs";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const Blogs: FC<{}> = () => {
  const { data, isFetching } = useQuery(['listBlogs'], () =>
    get(`/blogs`)
  );
  
  return <>
  <div className='border border-gray-300 rounded-md px-24 py-8 space-y-8'>
        <header>
          <section className='flex justify-between items-center'>
            <div>
              <h1 className='text-4xl'>Blogs</h1>
              <p className='text-gray-500 text-sm mt-1'>
                Explore different content you'd love
              </p>
            </div>
            <div>
              <Button
                text='Post a content'
                type='secondary-link'
                link='/main/blogs/blog/create'
              />
            </div>
          </section>
        </header>
        <section className='border border-x-gray-300 rounded-md'>
          {isFetching ? (
            <p>Loading...</p>
          ) : (
            data?.map((blog: any) => (
              <div key={blog?._id} className='shadow-sm'>
                <article className='py-6 px-10 max-w-2xl'>
                  <h3 className='text-2xl'>{blog?.title}</h3>
                  <p className='flex items-center gap-1 text-gray-400 text-xs mt-1'>
                    <BsBook />
                    <span>{blog?.readTime} read</span>
                  </p>
                  <p className='text-gray-500 my-3'>{blog?.except}</p>
                  <Link to={`/blogs/blog/${blog?._id}`} className='text-lg text-blue500'>
                    View more
                  </Link>
                </article>
              </div>
            ))
          )}
        </section>
      </div>
  </>;
};

export default Blogs;
