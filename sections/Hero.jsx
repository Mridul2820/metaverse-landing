'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import styles from '../styles';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, ammount: 0.25 }}
      variants={staggerContainer}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Metaverse
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}>MA</h1>
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>Ness</h1>
        </motion.div>
      </div>
      <motion.div
        variants={slideIn('right', 'twin', 0.2, 1)}
        className="relative w-full md:-mt-5 -mt-3"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-0 -top-7" />
        <img
          src="/cover.png"
          alt="cover"
          className="w-full sm:h-[500px] h-[300px] object-cover rounded-t-[140px] z-10 relative"
        />
        <a href="#about">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-10 relative z-10">
            <img
              src="/stamp.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px]  h-[100px] object-contain"
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
