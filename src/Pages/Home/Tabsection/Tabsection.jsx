import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabCard from "./TabCard";

const Tabsection = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(`https://toy-cars-assignment-11-server-anikbsmrstucse.vercel.app/cars`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const carToysGames = toys.filter(
    (items) => items.toy_category === "Toys & Games"
  );
  const carToys = carToysGames.slice(0, 6);
  const sportCars = toys.filter(
    (items) => items.toy_sub_category === "Sports Cars"
  );
  const classicCars = toys.filter(
    (items) => items.toy_sub_category === "Classic Cars"
  );
  const policeCars = carToysGames.slice(10, 13);
  const fireTrucks = carToysGames.slice(6, 10);

  return (
    <div className="py-10 my-5">
      <h1 className="text-4xl text-center font-bold mb-5">Car Toys</h1>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Car Toys And Games</Tab>
          <Tab>Sport Cars</Tab>
          <Tab>Fire Trucks</Tab>
          <Tab>Classic Cars</Tab>
          <Tab>Police Cars</Tab>
        </TabList>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-10">
            {carToys.map((item) => (
              <TabCard key={item._id} item={item}></TabCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-10">
            {sportCars.map((item) => (
              <TabCard key={item._id} item={item}></TabCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-10">
            {fireTrucks.map((item) => (
              <TabCard key={item._id} item={item}></TabCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-10">
            {classicCars.map((item) => (
              <TabCard key={item._id} item={item}></TabCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-10">
            {policeCars.map((item) => (
              <TabCard key={item._id} item={item}></TabCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Tabsection;
