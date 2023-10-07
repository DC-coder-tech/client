import React, { useState } from 'react';
import Inputs from '../../Components/Inputs/Index';
import Button from '../../Components/Button/Index';

const Forms = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className='bg-light h-screen flex items-center justify-center'>
      <div className='bg-white w-[600px] h-[600px] shadow-lg rounded-lg flex flex-col justify-center items-center'>
        <div className='text-4xl font-semibold'>Welcome {isSignIn ? 'Back' : ''}</div>
        <div className='text-xl font-light mb-14'>
          {isSignIn ? 'Sign in to get explored' : 'Sign up to get started'}
        </div>
        <form className='flex flex-col items-center w-full' onSubmit={(e) => e.preventDefault()}>
          {!isSignIn && (
            <Inputs
              label='Full Name'
              type='text'
              name='name'
              placeholder='Enter your name'
              className='mb-6 w-[50%]'
            />
          )}
          <Inputs
            label='Email address'
            type='email'
            name='email'
            placeholder='Enter your email'
            className='mb-6 w-[50%]'
          />
          <Inputs
            label='Password'
            type='password'
            name='password'
            placeholder='Enter your password'
            className='mb-6 w-[50%]'
          />
          <Button label={isSignIn ? 'Sign In' : 'Sign Up'} type='submit' className='w-[19rem] my-9' />
        </form>
        <div>
          {isSignIn ? "Don't have an account?" : 'Already have an account?'}{' '}
          <span
            className='text-buttonColor cursor-pointer underline'
            onClick={toggleForm}
          >
            {isSignIn ? 'Sign Up' : 'Sign In'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Forms;
