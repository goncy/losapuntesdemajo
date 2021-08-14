import { Grid } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import NoteItem from './NoteItem';

const container = {
	hidden: { opacity: 1 },
	visible: {
		opacity: 1,
		transition: {
			delayChildren: 0.4,
			staggerChildren: 0.1,
		},
	},
};

const GridFramer = motion(Grid);

const Notes = ({ notes }) => {
	return (
		<GridFramer
			as='ul'
			gridTemplate='auto / repeat(auto-fit, minmax(250px, 1fr))'
			gap={5}
			mt={8}
			variants={container}
			initial='hidden'
			animate='visible'
		>
			{notes.map((note) => (
				<NoteItem key={note.id} {...note} />
			))}
		</GridFramer>
	);
};

export default Notes;
