import React, { useState } from 'react';
import Product from './Product.js';
import cpGamerMaster from '../images/cyberpower-gamermaster.jpg';
import cpSupreme from '../images/cyberpower-supreme.jpg';
import cpXtreme from '../images/cyberpower-xtreme.jpg';
import elementMR from '../images/ibuypower-elementmr.jpg';
import slateMR from '../images/ibuypower-slatemr.jpg';
import traceMR from '../images/ibuypower-tracemr.jpg';
import nzxtCreatorBlack from '../images/nzxt-creators-black.avif';
import nzxtCreatorWhite from '../images/nzxt-creators-white.avif';
import nzxtFoundationBlack from '../images/nzxt-foundation-black.avif';
import nzxtFoundationWhite from '../images/nzxt-foundation-white.avif';
import nzxtStreamerBlack from '../images/nzxt-streamer-black.avif';
import nzxtStreamerWhite from '../images/nzxt-streamer-white.avif';

const Shop = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      src: cpGamerMaster,
      name: 'gamer master',
      company: 'CyberPowerPC',
      cpu: 'AMD Ryzen 7 3700X',
      gpu: 'NVIDIA GeForce GTX 1660 Super',
      memory: '16GB',
      storage: '500GB SSD + 1TB HDD',
      price: '999.99',
    },
    {
      id: 2,
      src: cpSupreme,
      name: 'gamer supreme',
      company: 'CyberPowerPC',
      cpu: 'Intel Core i7-11700KF',
      gpu: 'NVIDIA GeForce RTX 3070Ti',
      memory: '32GB',
      storage: '500GB SSD + 2TB HDD',
      price: '1999.99',
    },
    {
      id: 3,
      src: cpXtreme,
      name: 'gamer Xtreme',
      company: 'CyberPowerPC',
      cpu: 'Intel Core i7-11700F',
      gpu: 'NVIDIA GeForce RTX 3060 Ti',
      memory: '16GB',
      storage: '500GB SSD + 1TB HDD',
      price: '1499.99',
    },
    {
      id: 4,
      src: elementMR,
      name: 'element MR',
      company: 'iBuyPowerPC',
      cpu: 'Intel Core i7-11700KF',
      gpu: 'NVIDIA GTX 1660Ti 6GB',
      memory: '16GB',
      storage: '240GB SSD + 1TB HDD',
      price: '1299.99',
    },
    {
      id: 5,
      src: slateMR,
      name: 'slate MR',
      company: 'iBuyPowerPC',
      cpu: 'AMD Ryzen 5 5600X',
      gpu: 'AMD Radeon RX 6600 XT 8GB',
      memory: '16GB',
      storage: '480GB SSD + 1TB HDD',
      price: '1299.99',
    },
    {
      id: 6,
      src: traceMR,
      name: 'trace MR',
      company: 'iBuyPowerPC',
      cpu: 'AMD Ryzen 5 3600',
      gpu: 'AMD Radeon RX 550 2GB',
      memory: '8GB',
      storage: '240GB SSD',
      price: '799.99',
    },
    {
      id: 7,
      src: nzxtCreatorBlack,
      altSrc: nzxtCreatorWhite,
      name: 'creator PC',
      company: 'nzxt',
      cpu: 'Intel Core i9-11900K',
      gpu: 'NVIDIA GeForce RTX 3080 Ti',
      memory: '64GB',
      storage: '1TB SSD + 4TB HDD',
      price: '3499.99',
    },
    {
      id: 8,
      src: nzxtFoundationBlack,
      altSrc: nzxtFoundationWhite,
      name: 'foundation PC',
      company: 'nzxt',
      cpu: 'Intel Core i3-9100F',
      gpu: 'NVIDIA GEFORCE GTX 1660 Super',
      memory: '16GB',
      storage: '500GB SSD',
      price: '1199.99',
    },
    {
      id: 9,
      src: nzxtStreamerBlack,
      altSrc: nzxtStreamerWhite,
      name: 'streamer PC',
      company: 'nzxt',
      cpu: 'AMD Ryzen 5 5600X',
      gpu: 'GeForce RTX™ 3070',
      memory: '16GB',
      storage: '1TB SSD',
      price: '1799.99',
    },
  ]);

  const shopList = products.map((image) => (
    <Product image={image.src} name={image.name} company={image.company} price={image.price} key={image.id} />
  ));

  return (
    <div className="shop">
      <h1>Discover</h1>
      <div className="products">{shopList}</div>
    </div>
  );
};

export default Shop;
