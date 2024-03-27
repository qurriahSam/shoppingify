import './index.css';
import { Link } from 'react-router-dom';

import logo from '../../../assets/logo.svg';
import { ThemeToggle } from './ThemeToggle';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { Status } from '../../../types/types';

type ToggleDrawer = () => void;

export default function SideNav({ toggleDrawer }: { toggleDrawer: ToggleDrawer }) {
  const shopList = useSelector((state: RootState) => state.shoppingList);

  function getLen() {
    let len = 0;
    shopList.list.forEach((cat) => {
      len += cat.items.length;
    });
    return len;
  }

  return (
    <div className='w-16 md:w-20 h-screen flex flex-col justify-between py-4'>
      <Link to='/app' className='ps-2 md:ps-4'>
        <img src={logo} alt='logo' />
      </Link>
      <ul className='menu py-4'>
        <li>
          <Link to='/app' className='tooltip tooltip-right' data-tip='Items'>
            <i className='material-symbols-outlined'>list</i>
          </Link>
        </li>
        <li className='my-12'>
          <Link to='history' className='tooltip tooltip-right' data-tip='History'>
            <i className='material-symbols-outlined'>restart_alt</i>
          </Link>
        </li>
        <li>
          <Link to='statistics' className='tooltip tooltip-right' data-tip='Stats'>
            <i className='material-symbols-outlined'>analytics</i>
          </Link>
        </li>
      </ul>
      <ThemeToggle />
      <div className='ps-2 md:ps-4'>
        <button className='btn btn-primary btn-circle shadow' onClick={toggleDrawer}>
          <a className='tooltip tooltip-right font-normal indicator' data-tip='List'>
            {shopList.update === Status.updated && shopList.list.length > 0 ? (
              <span className='indicator-item badge badge-secondary text-xs font-medium'>
                {getLen()}
              </span>
            ) : null}

            <i className='material-symbols-outlined'>shopping_cart</i>
          </a>
        </button>
      </div>
    </div>
  );
}
