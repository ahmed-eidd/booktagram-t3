import React from 'react';
import { TabPanel as CTabPanel } from '@chakra-ui/react';

interface TabPanelProps {
  children?: React.ReactNode;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, ...props }) => {
  return <CTabPanel {...props}>{children}</CTabPanel>;
};

export default TabPanel;
