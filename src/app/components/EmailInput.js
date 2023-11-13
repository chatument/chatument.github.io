'use client'
import { useState } from 'react';
import { postEmail } from '../adapters/post-email';

const REGEX_EMAIL =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const EmailInput = () => {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = async () => {
    setLoading(true);
    setSuccess(false);
    setError(false);

    const isValid = REGEX_EMAIL.test(value);

    if (isValid) {
      setSuccess(true);
    }

    if (!isValid) {
      setError(true);
    }

    setLoading(false);
  };

  return (
    <>
      <div className="relative mr-0 md:mr-3">
        <label className="hidden block mb-2 text-sm font-medium">
          Email address
        </label>
        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
          <svg
            className="w-3.5 h-3.5 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 16"
          >
            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"></path>
            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"></path>
          </svg>
        </div>
        <input
          className={`border text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 ${
            success && 'border-green-500'
          } ${error && 'border-rose-500'}`}
          name="email_address"
          aria-label="Email Address"
          placeholder="Your email address..."
          required=""
          type="email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={loading}
        />
      </div>
      <button
        type="button"
        className="text-white w-full mt-8 md:w-fit md:mt-0 bg-indigo-700 hover:bg-indigo-800 font-medium rounded-lg text-sm px-5 py-2 "
        onClick={onSubmit}
        disabled={loading}
      >
        {loading ? 'Sending' : 'Join waitlist'}
      </button>
      </>
  );
};
