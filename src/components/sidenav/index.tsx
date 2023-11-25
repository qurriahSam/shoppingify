import './index.css';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

export default function SideNav() {
  return (
    <ul className='menu bg-base-200 w-20 h-screen flex justify-between py-4'>
      <Link to='/' className='hover:bg-base-200 no-focus active:bg-white'>
        <img
          id='imp'
          src={logo}
          className='no-focus focus:bg-base-200 hover:bg-base-200 active:bg-white'
          alt='My Happy SVG'
        />
      </Link>
      <span>
        <li>
          <Link to='/'>
            <a className='tooltip tooltip-right' data-tip='Items'>
              <i className='material-icons'>list</i>
            </a>
          </Link>
        </li>
        <li className='my-12'>
          <Link to='history'>
            <a className='tooltip tooltip-right' data-tip='History'>
              <i className='material-icons'>restart_alt</i>
            </a>
          </Link>
        </li>
        <li>
          <Link to='statistics'>
            <a className='tooltip tooltip-right' data-tip='Stats'>
              <i className='material-icons'>analytics</i>
            </a>
          </Link>
        </li>
      </span>
      <li className='bg-warning rounded-md'>
        <a className='tooltip tooltip-right' data-tip='List'>
          <i className='material-icons'>shopping_cart</i>
        </a>
      </li>
    </ul>
  );
}
