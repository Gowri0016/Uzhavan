import React, { createContext, useState } from 'react';
import Org from '../Asset/Organic.jpg';
import Fer from '../Asset/Fertlizer.jpg';
import Eco from '../Asset/Eco-friendly.jpg';
import Green from '../Asset/GreenField Bio Fertilizer.jpg';
import Naturl from '../Asset/Natural Boost Compost.jpg';
import Pure from '../Asset/Pure Earth Vermicompost.jpg';
import Bio from '../Asset/BioGrow Organic Mix.png';
// Data to share
const banners = [
  {
    id: 1,
    title: 'Organic Farming Practices',
    subtitle: 'Sustainable methods to grow healthy crops.',
    image: Org,
    bg: 'bg-green-700/50',
  },
  {
    id: 2,
    title: 'Arowwai Fertilizer Benefits',
    subtitle: 'Boost your yield with eco-friendly nutrients.',
    image: Fer,
    bg: 'bg-yellow-600/40',
  },
  {
    id: 3,
    title: 'Eco-friendly Crop Growth',
    subtitle: 'Nature-first approach to farming innovation.',
    image: Eco,
    bg: 'bg-emerald-800/50',
  },
];

const fertilizerProducts = [
  {
    id: 1,
    name: 'Arowwai Organic Fertilizer',
    price: 250,
    image: Fer, // Local import
  },
  {
    id: 2,
    name: 'Eco Crop Booster',
    price: 350,
    image: Eco, // Local import
  },
  {
    id: 3,
    name: 'GreenField Bio Fertilizer',
    price: 300,
    image: Green,
  },
  {
    id: 4,
    name: 'Natural Boost Compost',
    price: 220,
    image: Naturl,
  },
  {
    id: 5,
    name: 'Pure Earth Vermicompost',
    price: 280,
    image: Pure,
  },
  {
    id: 6,
    name: 'BioGrow Organic Mix',
    price: 310,
    image: Bio,
  },
];


// Create Context
export const DataContext = createContext();

// Context Provider component
export const DataProvider = ({ children }) => {
  // If you want to make data dynamic later, you can use state here
  const [products] = useState(fertilizerProducts);
  const [bannerData] = useState(banners);

  return (
    <DataContext.Provider value={{ products, bannerData }}>
      {children}
    </DataContext.Provider>
  );
};
