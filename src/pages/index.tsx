import Head from 'next/head';
import { motion } from 'framer-motion';
import NavGpt from '@/components/nav-gpt';

const Home = () => {
  return (
    <>
      <Head>
        <title>Model Flying New Zealand</title>
        <meta name="description" />
        <link rel="icon" href="/logo-square.jpg" />
      </Head>
      <NavGpt />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <motion.div
          animate={{ y: '0%' }}
          exit={{ opacity: 1 }}
          initial={{ y: '-100%' }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="container flex flex-col items-center justify-center gap-12 px-4 py-16 "
        >
          <h1 className="text-5xl text-center font-extrabold tracking-tight text-white sm:text-[5rem]">
            Model <span className="text-[hsl(280,100%,70%)]">Flying</span> New
            Zealand
          </h1>
        </motion.div>
      </main>
    </>
  );
};

export default Home;
