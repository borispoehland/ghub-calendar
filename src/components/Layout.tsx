import Navbar from './Navbar';
import Footer from './Footer';

interface IProps extends HasChildren {}

const Layout = ({ children }: IProps): JSX.Element => {
  return (
    <div className="max-w-7xl m-auto px-4 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex my-3">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
