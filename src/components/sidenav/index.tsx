import './index.css';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

export default function SideNav() {
  return (
    <>
      <ul className='menu bg-base-200 w-16 md:w-20 h-screen flex justify-between py-4'>
        <li>
          <Link to='/' className='no-focus hover:bg-inherit'>
            <img src={logo} alt='logo' />
          </Link>
        </li>
        <span>
          <li>
            <Link to='/' className='tooltip tooltip-right' data-tip='Items'>
              <i className='material-icons'>list</i>
            </Link>
          </li>
          <li className='my-12'>
            <Link to='history' className='tooltip tooltip-right' data-tip='History'>
              <i className='material-icons'>restart_alt</i>
            </Link>
          </li>
          <li>
            <Link to='statistics' className='tooltip tooltip-right' data-tip='Stats'>
              <i className='material-icons'>analytics</i>
            </Link>
          </li>
        </span>
        <li className='bg-warning rounded-md'>
          <a className='tooltip tooltip-right' data-tip='List'>
            <i className='material-icons'>shopping_cart</i>
          </a>
        </li>
      </ul>
    </>
  );
}
