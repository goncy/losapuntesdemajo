import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import notes from '@/data/notes.json';

import Header from '@/components/Header';
import Notes from '@/components/Notes';
import BuyMe from '@/components/BuyMe';
import Footer from '@/components/Footer';
import ToggleThemeButton from '@/components/ToggleThemeButtom';

const BoxFramer = motion(Box);

export const getStaticProps = async () => {
	return { props: { notes } };
};

const index = ({ notes }) => {
	return (
		<BoxFramer
			as='main'
			initial={{ y: 50, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
		>
			<Header />
			<Notes notes={notes} />
			<BuyMe />
			<Footer />

			<ToggleThemeButton />
		</BoxFramer>
	);
};

export default index;
