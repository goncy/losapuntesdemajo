import { Grid } from '@chakra-ui/react';
import NoteItem from './NoteItem';

const Notes = ({ notes }) => {
	return (
		<Grid
			as='ul'
			gridTemplate='auto / repeat(auto-fit, minmax(250px, 1fr))'
			gap={5}
			mt={8}
		>
			{notes.map((note) => (
				<NoteItem key={note.id} {...note} />
			))}
		</Grid>
	);
};

export default Notes;
