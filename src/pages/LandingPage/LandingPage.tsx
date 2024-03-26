import listImg from '../../assets/list.png';
import wom from '../../assets/ayo-ogunseinde-wom.jpg';
import ind from '../../assets/naga-sajjanapu-ind.jpg';
import blk from '../../assets/curtis-powell-b-guy.jpg';

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

function Reviews() {
  const reviews = [
    {
      name: 'Josh Kinyua',
      comment:
        'I cannot imagine my grocery shopping without this app now. It has completely streamlined the process for me. The customization options are fantastic, and I love how easy it is to share lists with my family. The reminders are also a game-changer, helping me stay organized even on my busiest days. Highly recommend!',
      img: blk,
    },
    {
      name: 'Chris shah',
      comment:
        'This app has made my life so much easier. I no longer have to worry about forgetting items at the store because everything is neatly organized in one place. The smart suggestions are surprisingly accurate, and the cross-platform sync is incredibly handy. Plus, being able to set a budget and track my expenses within the app has helped me stay on track financially. Definitely my go-to shopping companion!',
      img: ind,
    },
    {
      name: 'Margaret Atieno',
      comment:
        "I've tried several shopping list apps before, but none compare to this one. The user interface is clean and intuitive, making it a breeze to navigate. I love how I can customize categories to fit my shopping needs perfectly. Sharing lists with my partner has never been easier, and the real-time updates ensure we never double-buy items. This app has truly simplified my grocery shopping routine, and I can't imagine life without it!",
      img: wom,
    },
  ];
  function Review({ person }: { person: { name: string; img: string; comment: string } }) {
    return (
      <div className='card w-96 bg-base-100 shadow-xl md:mr-7 mb-10'>
        <div className='card-body'>
          <div className='flex mb-2'>
            <img className='rounded-full w-14 h-14 mr-3' src={person.img} alt='Profile picture' />
            <h2 className='card-title md:text-sm'>{person.name}</h2>
          </div>
          <p className='md:text-xs md:h-32 mb-4'>{person.comment}</p>
          <div className='flex'>
            {[1, 2, 3, 4, 5].map((s) => (
              <span className='material-symbols-rounded text-warning' key={s}>
                star
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className='hero min-h-screen'>
      <div className='hero-content flex-col'>
        <h1 className=' font-extrabold font-["Playfair_display"] text-3xl'>Testimonials</h1>
        <div className='flex flex-col md:flex-row justify-center items-center'>
          {reviews.map((person, index) => (
            <Review key={index} person={person} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className='footer p-10 bg-yellow-700 text-neutral-content'>
      <aside>
        <p>Shoppingify</p>
      </aside>
      <nav>
        <h6 className='footer-title'>Follow Us on Social Media: </h6>
        <div className='grid grid-flow-col gap-4'>
          <a>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              className='fill-current'
            >
              <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z'></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              className='fill-current'
            >
              <path d='M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z'></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              className='fill-current'
            >
              <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z'></path>
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <div className='container mx-auto'>
      <Header />
      <Hero />
      <div className='md:px-8'>
        <About />
        <Reviews />
      </div>
      <Footer />
    </div>
  );
}
