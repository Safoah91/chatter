import Button from 'components/button';
import { useState } from 'react';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  const [openTab, setOpenTab] = useState(false);

  const handleTab = () => {
    setOpenTab(!openTab)
  }
  return (
    <>
      {/* Mobile Header Nav */}
      <header className='md:hidden bg-white w-full'>
        <nav className='w-full pt-4'>
          <div className='w-full grid grid-cols-2 items-center justify-center px-3'>
            <p className='text-blue500 text-2xl font-bold'>CHATTER</p>
            <div className='justify-self-end' onClick={handleTab}>
              <HiBars3BottomRight className='text-blue500' size={25} />
            </div>
          </div>
          <div className={openTab === false ? 'hidden' : 'bg-lightYellow py-10'}>
            <ul className='flex flex-col gap-4 px-3'>
              <li onClick={handleTab}>
                <Link
                  to='/'
                  className='text-sm px-4 py-2 hover:text-gray-600 transition-all duration-300'
                >
                  Home
                </Link>
              </li>
              <li onClick={handleTab}>
                <Link
                  to='/about'
                  className='text-sm px-4 py-2 hover:text-gray-500 transition-all duration-300'
                >
                  About us
                </Link>
              </li>
              <li onClick={handleTab}>
                <Link
                  to='/contact'
                  className='text-sm px-4 py-2 hover:text-gray-500 transition-all duration-300'
                >
                  Contact
                </Link>
              </li>
              <li onClick={handleTab}>
                <Link
                  to='/blogs'
                  className='text-sm px-4 py-2 hover:text-gray-500 transition-all duration-300'
                >
                  Blogs
                </Link>
              </li>
            </ul>
            <div className='flex flex-col gap-3 px-7 mt-5'>
              <Button type='secondary-link' onClick={handleTab} text='Log in' link='/login' />
              <Button type='primary-link' onClick={handleTab} text='Sign up' link='/register' />
            </div>
          </div>
        </nav>
      </header>
      {/* Desktop Header Nav */}
      <header className='sm:hidden md:block bg-white max-w-[82rem] mx-auto py-5'>
        <nav className='flex justify-between items-center'>
          <div className='text-blue500 text-5xl font-bold'>CHATTER</div>
          <ul className='flex justify-between gap-1'>
            <li>
              <Link
                to='/'
                className='text-base px-4 py-2 font-bold hover:text-gray-500 transition-all duration-300'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/about'
                className='text-base  px-4 py-2 font-bold hover:text-gray-500 transition-all duration-300'
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to='/contact'
                className='text-bas px-4 py-2 font-bold hover:text-gray-500 transition-all duration-300'
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to='/blogs'
                className='text-base px-4 py-2 font-bold hover:text-gray-500 transition-all duration-300'
              >
                Blogs
              </Link>
            </li>
          </ul>
          <div className='flex gap-5'>
            <Button type='secondary-link' text='Log in' link='/login' />
            <Button type='primary-link' text='Sign up' link='/register' />
          </div>
        </nav>
      </header>
      <main className='overflow-x-hidden'>
        <Outlet />
      </main>
      {/* Mobile footer Nav */}
      <footer className='md:hidden bg-lightYellow px-6 pt-9 pb-24'>
        <div className='mx-auto'>
          <nav className='flex flex-col justify-between items-start gap-6'>
            <div className='text-blue500 text-3xl font-bold'>CHATTER</div>
            <ul className='flex flex-col gap-1'>
              <li className='pb-2'>
                <h3 className='text-xl font-medium'>Explore</h3>
              </li>
              <li>
                <Link
                  to='/'
                  className='text-lg text-gray-600 py-2 hover:text-gray-500 transition-all duration-300'
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  to='/about'
                  className='text-lg text-gray-600 py-2 hover:text-gray-500 transition-all duration-300'
                >
                  Trending blogs
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className='text-lg py-2 text-gray-600 hover:text-gray-500 transition-all duration-300'
                >
                  Chatter for teams
                </Link>
              </li>
            </ul>
            <ul className='flex flex-col gap-1'>
              <li className='pb-2'>
                <h3 className='text-2xl font-medium'>Support</h3>
              </li>
              <li>
                <Link
                  to='/'
                  className='text-lg text-gray-600 py-2 hover:text-gray-500 transition-all duration-300'
                >
                  Support docs
                </Link>
              </li>
              <li>
                <Link
                  to='/'
                  className='text-lg text-gray-600 py-2 hover:text-gray-500 transition-all duration-300'
                >
                  Join slack
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className='text-lg py-2 text-gray-600 hover:text-gray-500 transition-all duration-300'
                >
                  Contact
                </Link>
              </li>
            </ul>
            <ul className='flex flex-col gap-1'>
              <li className='pb-2'>
                <h3 className='text-2xl font-medium'>Official blog</h3>
              </li>
              <li>
                <Link
                  to='/'
                  className='text-lg text-gray-600 py-2 hover:text-gray-500 transition-all duration-300'
                >
                  Official blog
                </Link>
              </li>
              <li>
                <Link
                  to='/'
                  className='text-lg text-gray-600 py-2 hover:text-gray-500 transition-all duration-300'
                >
                  Engineering blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
      {/* Desktop footer Nav */}
      <footer className='sm:hidden md:block bg-lightYellow pt-9 pb-24'>
        <div className='max-w-[82rem] mx-auto'>
          <nav className='flex justify-between items-start'>
            <div className='text-blue500 text-5xl font-bold'>CHATTER</div>
            <ul className='flex flex-col gap-1'>
              <li className='pb-6'>
                <h3 className='text-2xl font-medium'>Explore</h3>
              </li>
              <li>
                <Link
                  to='/'
                  className='text-lg text-gray-600 py-2 hover:text-gray-500 transition-all duration-300'
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  to='/about'
                  className='text-lg text-gray-600 py-2 hover:text-gray-500 transition-all duration-300'
                >
                  Trending blogs
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className='text-lg py-2 text-gray-600 hover:text-gray-500 transition-all duration-300'
                >
                  Chatter for teams
                </Link>
              </li>
            </ul>
            <ul className='flex flex-col gap-1'>
              <li className='pb-6'>
                <h3 className='text-2xl font-medium'>Support</h3>
              </li>
              <li>
                <Link
                  to='/'
                  className='text-lg text-gray-600 py-2 hover:text-gray-500 transition-all duration-300'
                >
                  Support docs
                </Link>
              </li>
              <li>
                <Link
                  to='/'
                  className='text-lg text-gray-600 py-2 hover:text-gray-500 transition-all duration-300'
                >
                  Join slack
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className='text-lg py-2 text-gray-600 hover:text-gray-500 transition-all duration-300'
                >
                  Contact
                </Link>
              </li>
            </ul>
            <ul className='flex flex-col gap-1'>
              <li className='pb-6'>
                <h3 className='text-2xl font-medium'>Official blog</h3>
              </li>
              <li>
                <Link
                  to='/'
                  className='text-lg text-gray-600 py-2 hover:text-gray-500 transition-all duration-300'
                >
                  Official blog
                </Link>
              </li>
              <li>
                <Link
                  to='/'
                  className='text-lg text-gray-600 py-2 hover:text-gray-500 transition-all duration-300'
                >
                  Engineering blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Layout;
