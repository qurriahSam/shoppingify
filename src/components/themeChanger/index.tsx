import { useEffect } from 'react';
import { themeChange } from 'theme-change';

export function ThemeChanger() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <label className='swap swap-rotate'>
      <input
        type='checkbox'
        className='theme-controller'
        /* data-toggle-theme={theme === 'light' ? ['dark', 'dark'] : ['light', 'light']} */
        data-toggle-theme='light,dark'
        data-act-class='ACTIVECLASS'
      />
      <i className='material-icons swap-on'>light_mode</i>
      <i className='material-icons swap-off'>dark_mode</i>
    </label>
  );
}
