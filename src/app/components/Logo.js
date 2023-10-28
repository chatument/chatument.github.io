import Image from 'next/image';

export const Logo = () => {
  return (
    <span className="flex items-center space-x-2">
      <Image
        src="/chatument_logo.svg"
        alt="Logo"
        width="32"
        height="32"
        className="w-8 rounded-lg"
      />
      <span className="text-2xl text-indigo-600 font-medium">Chatument</span>
    </span>
  );
};
