import {
  Header,
  Landing,
  Features,
  BenefitsLeft,
  BenefitsRight,
  Faq,
  Footer,
  Email,
} from './components';
import { EmailInput } from './components/EmailInput';

export default function Home() {
  return (
    <div>
      <Header />
      <Landing />
      <Features />
      <BenefitsLeft />
      <BenefitsRight />
      <Faq />
      <Email />
      <Footer />
    </div>
  );
}
