import { BsHeartFill } from 'react-icons/bs';
import Link from './ui-components/Link';

const Footer = (): JSX.Element => {
  return (
    <footer className="flex items-center justify-center gap-1 mb-3">
      Made with <BsHeartFill color="red" /> by{' '}
      <Link href="https://www.borispoehland.com" label="Boris Pöhland" />
    </footer>
  );
};

export default Footer;
