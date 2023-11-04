import { EmailInput } from './EmailInput';

export const Email = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-16">
      <div className="md:flex md:items-center">
        <EmailInput />
      </div>
      <div className="text-sm font-medium text-gray-500 p-6">
        {`By joining the waitlist, you agree with Chatument's`}{' '}
        <a
          rel="nofollow"
          className="text-indigo-500 hover:underline"
          href="/privacy-policy"
        >
          Privacy Policy
        </a>
        .
      </div>
    </div>
  );
};
