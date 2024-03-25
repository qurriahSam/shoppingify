import listImg from '../../assets/list.png';
import pointList from '../../assets/guyPoint.png';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const handleClick = () => navigate('/app');
  return (
    <div className='navbar bg-base-100 md:px-12'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <a className='btn btn-ghost text-xl font-["Rakkas"]'>Shoppingify</a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <button className='btn btn-primary btn-sm' onClick={handleClick}>
          Go To App
        </button>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className='hero min-h-screen md:px-12'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <img src={listImg} className='max-w-lg md:max-w-2xl mb-10' />
        <div>
          <h1 className='text-5xl font-bold font-["Playfair_display"] leading-tight'>
            Take your shopping list wherever you go.
          </h1>
          <p className='py-6'>
            Streamline your grocery shopping with our intuitive shopping list app. Easily create and
            organize lists. Never forget an item again with customizable categories. Simplify your
            errands and stay organized effortlessly.
          </p>
          <button className='btn btn-primary btn-wide'>Get Started</button>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className='hero min-h-screen'>
      <div className='hero-content flex-col lg:flex-row'>
        <img src={pointList} className='max-w-md' />
        <div className='md:ml-12 md:w-2/5'>
          <h1 className='text-3xl font-bold font-["Playfair_display"]'>What will you get ?</h1>
          <p className='py-6'>
            Welcome to our innovative shopping list app, designed to revolutionize your grocery
            shopping experience.
          </p>
          <div className='card card-side shadow-xl p-3 items-center'>
            <span className='material-symbols-rounded text-4xl font-bold mr-2 text-success'>
              task_alt
            </span>
            <div className='card-body p-2'>
              <h2 className='card-title md:text-sm'>Efficiency</h2>
              <p className='md:text-xs'>
                Our app streamlines the shopping process, saving you time and effort by allowing you
                to create and organize your shopping lists quickly and easily.
              </p>
            </div>
          </div>
          <div className='card card-side shadow-xl p-3 items-center mt-4'>
            <span className='material-symbols-rounded text-4xl font-bold mr-2 text-success'>
              task_alt
            </span>
            <div className='card-body p-2'>
              <h2 className='card-title md:text-sm'>Customization</h2>
              <p className='md:text-xs'>
                Tailor your lists to your specific needs with customizable categories and item
                suggestions, ensuring that you never miss an essential item again.
              </p>
            </div>
          </div>
          <div className='card card-side shadow-xl p-3 items-center mt-4'>
            <span className='material-symbols-rounded text-4xl font-bold mr-2 text-success'>
              task_alt
            </span>
            <div className='card-body p-2'>
              <h2 className='card-title md:text-sm'>Budgeting</h2>
              <p className='md:text-xs'>
                Keep track of your spending by setting budget limits and monitoring your expenses
                within the app, helping you to stick to your financial goals while shopping.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className='container'>
      <Header />
      <Hero />
      <div className='md:px-8'>
        <About />
      </div>
    </div>
  );
}
