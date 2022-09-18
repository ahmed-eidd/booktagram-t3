// import { GetServerSidePropsContext } from 'next';
import React from 'react';
import classes from './Dashboard.module.scss';
import Sidebar from './Sidebar/Sidebar';

interface DashboardProps {
  children: React.ReactNode;
}

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  // useEffect(() => {}, []);
  return (
    <div className={classes.Dashboard}>
      <Sidebar />
      <div className={classes.Content}>{children}</div>
    </div>
  );
};

export default Dashboard;

// export async function getServerSideProps({
//   locale,
// }: GetServerSidePropsContext) {
//   return {
//     props: {
//       // You can get the messages from anywhere you like. The recommended
//       // pattern is to put them in JSON files separated by language and read
//       // the desired one based on the `locale` received from Next.js.
//       messages: (await import(`../../content/locale/${locale}.json`)).default,
//     },
//   };
// }
