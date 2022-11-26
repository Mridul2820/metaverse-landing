'use client';
import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`${textStyles} font-normal text-sm text-secondary-white`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span key={index} variants={textVariant2} className="inline-block">
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => <h2>Title Text</h2>;
