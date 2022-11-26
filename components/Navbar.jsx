'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';
import styles from '../styles';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img src="/search.svg" alt="search" className="w-8 h-8 object-contain" />
      <h2 className="font-extrabold text-2xl text-white">METAVERSE</h2>
    </div>
  </motion.nav>
);

export default Navbar;
