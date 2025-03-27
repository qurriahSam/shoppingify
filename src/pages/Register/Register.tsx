import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import registerUser from '../../store/auth/reducers/registerUserAsyncReducer';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { Status } from '../../types/types';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [userDetails, setUserDetails] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const navToLogin = () => navigate('/login');

  useEffect(() => {
    if (auth.status === Status.updated) {
      navigate('/login');
    }
  });

  const updateUserDetails = (e: ChangeEvent<HTMLInputElement>) => {
    const key = e.target.id;
    const value = e.target.value;
    setUserDetails({ ...userDetails, [key]: value });
    validateField(key, value);
  };

  const validateField = (key: string, value: string) => {
    let error = '';

    switch (key) {
      case 'email': {
        const emailRegex =
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
        if (!value.trim()) error = 'Email is required.';
        else if (!emailRegex.test(value)) error = 'Enter a valid email.';
        break;
      }
      case 'username':
        if (!value.trim()) error = 'Username is required.';
        else if (value.length < 3)
          error = 'Username must be at least 3 characters.';
        break;
      case 'password':
        if (!value.trim()) error = 'Password is required.';
        else if (value.length < 6)
          error = 'Password must be at least 6 characters.';
        break;
      case 'confirmPassword':
        if (!value.trim()) error = 'Confirm your password.';
        else if (value !== userDetails.password)
          error = 'Passwords do not match.';
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [key]: error }));
  };

  const validateForm = () => {
    const { email, username, password, confirmPassword } = userDetails;

    validateField('email', email);
    validateField('username', username);
    validateField('password', password);
    validateField('confirmPassword', confirmPassword);

    return (
      !errors.email &&
      !errors.username &&
      !errors.password &&
      !errors.confirmPassword
    );
  };

  const hasErrors =
    Object.values(errors).some((error) => error !== '') ||
    Object.values(userDetails).some((value) => value.trim() === '');

  const registerNewUser = (e: SyntheticEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const user = { email: userDetails.email, password: userDetails.password };
      dispatch(registerUser(user));
    }
  };

  return (
    <section className="flex justify-center items-center h-screen relative">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Shoppingify</h2>
          <br />
          <form onSubmit={registerNewUser}>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                id="email"
                type="text"
                className="grow"
                placeholder="Email"
                value={userDetails.email}
                onChange={updateUserDetails}
              />
            </label>
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
            <br />
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Username"
                id="username"
                value={userDetails.username}
                onChange={updateUserDetails}
              />
            </label>
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username}</p>
            )}
            <br />
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow"
                placeholder="password"
                id="password"
                value={userDetails.password}
                onChange={updateUserDetails}
              />
            </label>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
            <br />
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                id="confirmPassword"
                type="password"
                className="grow"
                placeholder="confirm password"
                value={userDetails.confirmPassword}
                onChange={updateUserDetails}
              />
            </label>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
            <br />
            <button
              className="btn btn-primary btn-block"
              disabled={hasErrors || auth.status === Status.loading}
            >
              {auth.status === Status.loading ? (
                <span className="loading loading-dots loading-sm"></span>
              ) : (
                'Register'
              )}
            </button>
          </form>

          <p className="mt-5">
            Already have an account?
            <a className="link link-primary" onClick={navToLogin}>
              Login
            </a>
          </p>
          <p>To use demo account go to login</p>
        </div>
      </div>
    </section>
  );
}
