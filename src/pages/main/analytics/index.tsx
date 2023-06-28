import React from 'react';
import { BsBook } from 'react-icons/bs';

const Analytics = () => {
  return (
    <>
      <div className='px-24 py-8 space-y-8'>
        <div>
          <section className=''>
            <div>
              <h1 className='text-3xl'>Posts analytics</h1>
              <p className='text-3xl mt-6'>
                <span>May 2023,</span>{' '}
                <small className='text-gray-500'>25 days so far</small>
              </p>
              <div className='max-w-4xl bg-blue500 h-1 my-3'></div>
              <p className='text-2xl mt-3'>Post highlights</p>
              <p className='text-3xl mt-3 flex items-center gap-1'>
                <span>Top posts</span>
                <small className='text-gray-400 text-lg'>
                  earned 2980 impressions
                </small>
              </p>
            </div>
          </section>
          <section className=''>
            <article className='py-6 max-w-2xl'>
              <p className='text-gray-900 text-lg mt-3'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
                temporibus accusantium id ad tempore atque architecto dolor, ab
                magni saepe?
              </p>
              <p className='flex items-center gap-1 text-gray-400 text-xs mt-1'>
                <BsBook />
                <span>10 mins read</span>
              </p>
              <div className='text-gray-700 mt-4'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
                delectus odio, dicta quam soluta id ratione vero eveniet illo.
                Soluta accusantium ad quasi ex mollitia quidem sunt explicabo
                neque corporis? Quae officia tempora earum. Illum reprehenderit
                fugit consequatur error iure facere nam earum aliquid. Ducimus
                quam, accusamus nulla debitis ullam cumque et. Blanditiis cum
                quos dolore atque temporibus at quisquam. Consectetur eaque
                laudantium vel adipisci sed? Nulla eius rem exercitationem
                labore dolor nobis, suscipit facere. Qui perspiciatis maiores
                odio iusto perferendis nisi quam dolorem at dicta consectetur.
                Minima, perspiciatis praesentium? Officia praesentium quae natus
                dolorem aliquid eius maiores quas, aliquam nam minus ex sunt
                fugiat, magni ducimus et necessitatibus inventore impedit libero
                delectus, aut rem esse perspiciatis. Ut, accusamus.
              </div>
            </article>
          </section>
          <section className=''>
            <div>
              <h3 className='text-2xl mt-12'>Posts analytics</h3>
              <p className='text-xl mt-6'>
                <span>May 2023 summary</span>
              </p>
              <div className='max-w-4xl bg-blue500 h-1 my-3'></div>
              <article className='grid grid-cols-2 grid-rows-2 gap-4 max-w-md'>
              <div>
                <p className='text-2xl text-gray-500 mt-3 flex items-center gap-1'>Posts</p>
                <p className='text-2xl'>3</p>
              </div>
              <div>
                <p className='text-2xl text-gray-500 mt-3 flex items-center gap-1 text-center'>Posts Impressions</p>
                <p className='text-2xl'>2.98k views</p>
              </div>
              <div>
                <p className='text-2xl text-gray-500 mt-3 flex items-center gap-1 text-center'>Profile visits</p>
                <p className='text-2xl'>300</p>
              </div>
              <div>
                <p className='text-2xl text-gray-500 mt-3 flex items-center gap-1 text-center'>New followers</p>
                <p className='text-2xl'>275</p>
              </div>
              </article>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Analytics;
