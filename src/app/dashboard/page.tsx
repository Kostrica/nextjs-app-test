'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import styles from './dashboard.module.scss';


export default function DashboardPage() {
  return (
    <motion.div
      className="flex min-h-screen h-screen flex-col items-center justify-between py-12 px-3 md:p-12"
      initial={{ backgroundColor: '#dbdfe0' }}
      animate={{ backgroundColor: '#f9fafb' }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col items-center justify-between">
        <h3 className="text-3xl mb-24">Dashboard Page</h3>
        <motion.div
          className={clsx(styles.Box)}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [1, 1, 1, 1, 1],
            scale: [1, 1.2, 1.2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ['20%', '20%', '50%', '50%', '20%']
          }}
          transition={{ duration: 2 }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.5 }
          }}
          whileTap={{
            scale: 0.5,
            borderRadius: '50%',
            transition: { duration: 0.2 }
          }}
          whileInView={{ opacity: 1 }}
          
        />
      </div>
    </motion.div>
  );
}
