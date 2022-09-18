import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import classes from './Layout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div>
        <Nav />
        <div className={classes.container}>{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
