import { Box } from '@chakra-ui/react';

import notes from '@/data/notes.json';

import Header from '@/components/Header';
import Notes from '@/components/Notes';
import BuyMe from '@/components/BuyMe';
import Footer from '@/components/Footer';
import ToggleThemeButton from '@/components/ToggleThemeButtom';

export const getStaticProps = async () => {
	return { props: { notes } };
};

const index = ({ notes }) => {
	return (
		<Box as='main'>
			<Header />
			<Notes notes={notes} />
			<BuyMe />
			<Footer />

			<ToggleThemeButton />
		</Box>
	);
};

export default index;
