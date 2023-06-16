import React from "react";
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Tabsection = () => {
    const [tabIndex, setTabIndex] = useState(0);
  return (
    <div>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Car Toys And Games</Tab>
          <Tab>Sport Cars</Tab>
          <Tab>Fire Trucks</Tab>
          <Tab>Classic Cars</Tab>
          <Tab>Police Cars</Tab>
        </TabList>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  );
};

export default Tabsection;
