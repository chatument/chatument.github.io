import Link from "next/link";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer>
      
      <div className="mx-auto container p-4 py-6 lg:py-8">
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <Logo />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Follow us
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a
                    href="https://www.linkedin.com/company/chatument"
                    className="hover:underline "
                  >
                    Linkedin
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline"
                  >
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Legal
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link href="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" /> */}
        <div className="sm:flex sm:items-center sm:justify-between mt-6">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2023{' '}
            <a className="hover:underline">
              Chatument™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
