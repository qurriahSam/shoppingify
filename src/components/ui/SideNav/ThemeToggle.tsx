import { useEffect } from 'react';
import { themeChange } from 'theme-change';

export function ThemeToggle() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <label className='swap swap-rotate'>
      <input
        type='checkbox'
        className='theme-controller'
        data-toggle-theme='light,dark'
        data-act-class='ACTIVECLASS'
      />
      <i className='material-symbols-outlined swap-on'>light_mode</i>
      <i className='material-symbols-outlined swap-off'>dark_mode</i>
    </label>
  );
}
