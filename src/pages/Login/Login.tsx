import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import loginUser from '../../store/auth/reducers/loginUserAsyncReducer';
import useLocalStorage from '../../service/localStorageService';
import { Status } from '../../types/types';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const { saveUserDetails } = useLocalStorage('user');
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const navToRegister = () => navigate('/register');

  useEffect(() => {
    if (auth.status === Status.updated && auth.user.email) {
      saveUserDetails({
        _id: auth.user._id as string,
        email: auth.user.email as string,
      });
      navigate('/app');
    }
  });

  const validateField = (key: string, value: string) => {
    let error = '';

    if (key === 'email') {
      if (!value) error = 'Email is required.';
    }

    if (key === 'password') {
      if (!value) error = 'Password is required.';
    }

    setErrors((prev) => ({ ...prev, [key]: error }));
  };

  const updateUserDetails = (e: ChangeEvent<HTMLInputElement>) => {
    const key = e.target.id;
    const value = e.target.value;
    setUserDetails({ ...userDetails, [key]: value });
    validateField(key, value);
  };

  const isFormValid = !errors.email && !errors.password;

  const loginNewUser = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(loginUser(userDetails));
  };

  return (
    <section className='flex justify-center items-center h-screen'>
      <div className='card w-96 bg-base-100 shadow-xl'>
        <div className='card-body'>
          <h2 className='card-title'>Shoppingify</h2>
          {false && (
            <div className='label' hidden>
              <span className='label-text-alt text-error'>
                Wrong Email or Password.
              </span>
            </div>
          )}
          <form onSubmit={loginNewUser}>
            <label className='input input-bordered flex items-center gap-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 16 16'
                fill='currentColor'
                className='w-4 h-4 opacity-70'
              >
                <path d='M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z' />
                <path d='M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z' />
              </svg>
              <input
                id='email'
                type='text'
                className='grow'
                placeholder='Email'
                value={userDetails.email}
                onChange={updateUserDetails}
              />
            </label>
            {errors.email ? (
              <div className='label'>
                <span className='label-text-alt text-error'>
                  {errors.email}
                </span>
              </div>
            ) : (
              <br />
            )}

            <label className='input input-bordered flex items-center gap-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 16 16'
                fill='currentColor'
                className='w-4 h-4 opacity-70'
              >
                <path
                  fillRule='evenodd'
                  d='M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z'
                  clipRule='evenodd'
                />
              </svg>
              <input
                id='password'
                type='password'
                className='grow'
                placeholder='password'
                value={userDetails.password}
                onChange={updateUserDetails}
              />
            </label>
            {errors.password ? (
              <div className='label'>
                <span className='label-text-alt text-error'>
                  {errors.password}
                </span>
              </div>
            ) : (
              <br />
            )}

            <button
              className='btn btn-primary btn-block'
              disabled={
                !isFormValid ||
                userDetails.email.length < 1 ||
                userDetails.password.length < 1 ||
                auth.status === Status.loading
              }
            >
              {auth.status === Status.loading ? (
                <span className='loading loading-dots loading-sm'></span>
              ) : (
                'Login'
              )}
            </button>
          </form>
          <p className='mt-3'>
            Don't have an account?
            <a className='link link-primary' onClick={navToRegister}>
              Register
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
