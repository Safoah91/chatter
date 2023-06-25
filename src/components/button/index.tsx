import { Link } from 'react-router-dom';
import { ButtonProps } from './type';

const Button = ({ text, type, link, onClick }: ButtonProps) => {
  return (
    <>
      {type === 'primary' ? (
        <button
          onClick={onClick}
          type='submit'
          className='w-full border bg-blue500 text-white rounded-md text-base font-bold px-8 py-2.5 hover:bg-blue500/90 transition-all duration-300'
        >
          {text}
        </button>
      ) : type === 'secondary' ? (
        <button
          onClick={onClick}
          type='submit'
          className='w-full border border-blue500 rounded-md text-base font-bold px-8 py-2.5 hover:bg-gray-100 text-blue500 transition-all duration-300'
        >
          {text}
        </button>
      ) : type === 'primary-link' ? (
        <Link
          to={`${link}`}
          className='border border-blue500 bg-blue500 text-white rounded-md text-base font-bold px-8 py-2.5 hover:border-blue500 hover:bg-white hover:text-gray-700 transition-all duration-300'
        >
          {text}
        </Link>
      ) : type === 'secondary-link' ? (
        <Link
          to={`${link}`}
          className='border text-blue500 border-blue500 rounded-md text-base font-bold px-8 py-2.5 hover:bg-blue500 hover:text-white transition-all duration-300'
        >
          {text}
        </Link>
      ) : (
        <Link
          to={`${link}`}
          className='border border-blue500 bg-blue500 text-white rounded-md text-base font-bold px-8 py-2.5 hover:border-blue500 hover:bg-white hover:text-gray-700 transition-all duration-300'
        >
          {text}
        </Link>
      )}
    </>
  );
};

export default Button;
