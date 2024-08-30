'use client'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import './tab.css'

import React from 'react'

const TabTest = () => {
  return (
    <Tabs className=' w-[90%] mx-auto'>
    <TabList >
      <Tab>All</Tab>
      <Tab>Operational</Tab>
      <Tab>Under Consturction</Tab>
      <Tab>Planing</Tab>
      <Tab>Land Clearing</Tab>
    </TabList>

    <TabPanel>
      <h2>All</h2>
    </TabPanel>
    <TabPanel>
      <h2>Operational</h2>
    </TabPanel>
    <TabPanel>
      <h2>Under Consturction</h2>
    </TabPanel>
    <TabPanel>
      <h2>Planing</h2>
    </TabPanel>
    <TabPanel>
      <h2>Land Clearing</h2>
    </TabPanel>
  </Tabs>
  )
}

export default TabTest