import { Header } from '../components';

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <div className="mx-auto container flex flex-col pl-8 pr-8 pt-8">
        <h1 className="mt-3 pb-2 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl">
          Privacy Policy
        </h1>

        <hr />

        <p className="pb-6 text-left py-4 text-sm leading-normal text-gray-800 lg:text-sm xl:text-sm">
          This Privacy Policy outlines our practices regarding the collection,
          use, and disclosure of information when you visit our website or use
          our services. By accessing our website or using our services, you
          agree to the terms described in this policy.
        </p>

        <h2 className="pb-4 leading-snug text-2xl tracking-tight text-gray-800 lg:leading-tight lg:text-2xl">
          1. Information We Collect
        </h2>

        <h4 className="leading-snug text-lg tracking-tight text-gray-800 lg:leading-tight lg:text-lg">
          1.1 Personal Information:
        </h4>

        <p className="pb-6 text-left py-4 text-sm leading-normal text-gray-800 lg:text-sm xl:text-sm">
          {`During the pre-launch phase, we may collect certain personally
          identifiable information ("Personal Information") from potential
          customers who join our waitlist. This information may include your
          email address.
          `}
        </p>

        <h4 className="leading-snug text-lg tracking-tight text-gray-800 lg:leading-tight lg:text-lg">
          1.2 Usage Data:
        </h4>

        <p className="pb-6 text-left py-4 text-sm leading-normal text-gray-800 lg:text-sm xl:text-sm">
          {`We may also collect non-personally identifiable information ("Usage
          Data") about how you interact with our website. This may include
          information such as your browser type, device information, IP address,
          pages visited, and time spent on our website. We collect this data to
          improve our website and provide a better user experience.`}
        </p>

        <h2 className="pb-4 leading-snug text-2xl tracking-tight text-gray-800 lg:leading-tight lg:text-2xl">
          2. Use of Information
        </h2>

        <h4 className="leading-snug text-lg tracking-tight text-gray-800 lg:leading-tight lg:text-lg">
          2.1 Personal Information:
        </h4>

        <p className="pb-6 text-left py-4 text-sm leading-normal text-gray-800 lg:text-sm xl:text-sm">
          We will only use the Personal Information we collect to communicate
          with you about our services, products, and updates related to
          Chatument. We may also send you important notices, such as changes to
          our terms or policies.
        </p>

        <h4 className="leading-snug text-lg tracking-tight text-gray-800 lg:leading-tight lg:text-lg">
          2.2 Usage Data:
        </h4>

        <p className="pb-6 text-left py-4 text-sm leading-normal text-gray-800 lg:text-sm xl:text-sm">
          We may use Usage Data to analyze trends, administer our website, track
          user movements, and gather demographic information for internal
          purposes. This information helps us understand how our website is
          being used and make improvements accordingly.
        </p>

        <h2 className="pb-4 leading-snug text-2xl tracking-tight text-gray-800 lg:leading-tight lg:text-2xl">
          3. Information Sharing and Disclosure
        </h2>

        <h4 className="leading-snug text-lg tracking-tight text-gray-800 lg:leading-tight lg:text-lg">
          3.1 Service Providers:
        </h4>

        <p className="pb-6 text-left py-4 text-sm leading-normal text-gray-800 lg:text-sm xl:text-sm">
          {` We may engage third-party companies or individuals ("Service
          Providers") to facilitate our website, provide services on our behalf,
          or assist us in analyzing how our website is used. These Service
          Providers may have access to your Personal Information and Usage Data
          to perform tasks on our behalf, but they are obligated not to disclose
          or use it for any other purpose.`}
        </p>

        <h4 className="leading-snug text-lg tracking-tight text-gray-800 lg:leading-tight lg:text-lg">
          3.2 Compliance with Law:
        </h4>

        <p className="pb-6 text-left py-4 text-sm leading-normal text-gray-800 lg:text-sm xl:text-sm">
          We may disclose your Personal Information if required by law or as
          necessary to comply with a legal obligation or protect our rights,
          property, or safety.
        </p>

        <h2 className="pb-4 leading-snug text-2xl tracking-tight text-gray-800 lg:leading-tight lg:text-2xl">
          4. Retention of Information
        </h2>

        <p className="pb-6 text-left py-4 text-sm leading-normal text-gray-800 lg:text-sm xl:text-sm">
          We will retain your Personal Information and Usage Data for as long as
          necessary to fulfill the purposes outlined in this Privacy Policy,
          unless a longer retention period is required or permitted by law.
        </p>

        <h2 className="pb-4 leading-snug text-2xl tracking-tight text-gray-800 lg:leading-tight lg:text-2xl">
          5. Security
        </h2>

        <p className="pb-6 text-left py-4 text-sm leading-normal text-gray-800 lg:text-sm xl:text-sm">
          We value the security of your information and implement reasonable
          measures to protect it from unauthorized access or disclosure.
        </p>

        <h2 className="pb-4 leading-snug text-2xl tracking-tight text-gray-800 lg:leading-tight lg:text-2xl">
          {`6. Children's Privacy`}
        </h2>

        <p className="pb-6 text-left py-4 text-sm leading-normal text-gray-800 lg:text-sm xl:text-sm">
          Our services are not intended for individuals under the age of 18. We
          do not knowingly collect personally identifiable information from
          children. If a parent or guardian becomes aware that their child has
          provided us with personal information without their consent, please
          contact us, and we will take steps to remove the information from our
          records.
        </p>

        <h2 className="pb-4 leading-snug text-2xl tracking-tight text-gray-800 lg:leading-tight lg:text-2xl">
          7. Changes to this Privacy Policy
        </h2>

        <p className="pb-6 text-left py-4 text-sm leading-normal text-gray-800 lg:text-sm xl:text-sm">
          We may update our Privacy Policy from time to time. Any changes will
          be posted on this page and become effective immediately upon posting.
          It is your responsibility to review this Privacy Policy periodically
          for any updates.
        </p>

        <h2 className="pb-4 leading-snug text-2xl tracking-tight text-gray-800 lg:leading-tight lg:text-2xl">
          8. Contact Us
        </h2>

        <p className="pb-6 text-left py-4 text-sm leading-normal text-gray-800 lg:text-sm xl:text-sm">
          If you have any questions about our Privacy Policy or if you would
          like to exercise any of your rights related to your Personal
          Information, please contact us at contact@chatument.com.
        </p>

        <p className="pb-6 text-left py-4 text-sm leading-normal text-gray-800 lg:text-sm xl:text-sm">
          Please note that this Privacy Policy only applies to our website and
          services. If you follow any external links to other websites, their
          privacy policies and practices may differ from ours, and we are not
          responsible for their actions.
        </p>
      </div>
    </>
  );
}
