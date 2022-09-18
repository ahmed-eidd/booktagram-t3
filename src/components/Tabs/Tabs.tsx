import { Tabs as CTabs, TabList, TabPanels, Tab } from '@chakra-ui/react';
import classes from './Tabs.module.scss';
import { colors } from '../../styles/abstract/colors';

interface TabsProps {
  tabs?: string[];
  className?: string;
  children?: React.ReactNode;
  justify?:
    | 'center'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
    | 'flex-start'
    | 'flex-end';
}

const Tabs: React.FC<TabsProps> = ({
  tabs = [],
  className = '',
  children,
  justify,
}) => {
  const { primary } = colors;

  const tabSelected = {
    opacity: '100% !important',
    boxShadow: '0 !important',
    borderBottom: `2px solid ${primary}`,
    outline: 'none',
  };
  return (
    <CTabs variant='unstyled' className={[classes.Tabs, className].join(' ')}>
      <TabList
        style={{
          justifyContent: justify
            ? justify
            : tabs?.length > 4
            ? 'space-between'
            : 'flex-start',
        }}
        className={classes.TabList}
      >
        {tabs?.map((el) => (
          <Tab _selected={tabSelected} className={classes.Tab} key={el}>
            {el}
          </Tab>
        ))}
      </TabList>
      <TabPanels>{children}</TabPanels>
    </CTabs>
  );
};

export default Tabs;
