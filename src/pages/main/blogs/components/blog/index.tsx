import { useQuery } from 'react-query';
import { BsBook } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { getSingleUserBlog } from 'api/queries';

const MainBlog = () => {
  const [blogData, setBlogData] = useState<any>(null);
  const [blogID, setBlogID] = useState<string>('');
  const param = useParams();

  const { isFetching } = useQuery(
    ['singleBlog', blogID],
    () => getSingleUserBlog({ params: { id: blogID } }),
    {
      onSuccess: (data) => setBlogData(data),
    }
  );

  useEffect(() => {
    setBlogID(param.id as string);
  }, [param]);

  return (
    <>
      <div className='px-24 py-8 space-y-8'>
        {isFetching || blogData === null ? (
          <p>Loading...</p>
        ) : (
          <>
            <>
              <div>
                <header>
                  <section className='flex justify-between items-center'>
                    <div>
                      <h1 className='text-4xl'>{blogData?.title} </h1>
                      <p className='text-gray-500 text-sm mt-1'>
                        <span>
                          Created on:{' '}
                          {moment(blogData?.createdAt).format('MMM DD, YYYY')}
                        </span>
                        {' | '}
                        <small className='text-gray-400'>
                          Last updated:{' '}
                          {moment(blogData?.updatedAt).format('MMM DD, YYYY')}
                        </small>
                      </p>
                    </div>
                    <div>
                      <Link
                        to={`/main/blogs/blog/update/${blogData?._id}`}
                        className='text-lg text-blue500'
                      >
                        Edit post
                      </Link>
                    </div>
                  </section>
                </header>
                <section className=''>
                  <article className='py-6 max-w-2xl'>
                    <p className='flex items-center gap-1 text-gray-400 text-xs mt-1'>
                      <BsBook />
                      <span>{blogData?.readTime} read</span>
                    </p>
                    <div>
                      <img src={blogData?.featuredImage} alt='' />
                    </div>
                    <p className='text-gray-900 text-lg mt-3'>
                      {blogData?.except}
                    </p>
                    <div className='text-gray-700 mt-4'>
                      {parse(blogData?.body)}
                    </div>
                  </article>
                </section>
              </div>
            </>
          </>
        )}
      </div>
    </>
  );
};

export default MainBlog;
