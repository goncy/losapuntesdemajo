import {
	GridItem,
	Heading,
	HStack,
	Text,
	useColorMode,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

import Link from '@/components/Link';

const item = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
	},
};

const GridItemFramer = motion(GridItem);

const NoteItem = ({
	title,
	level,
	description,
	color,
	darkColor,
	file,
	span = 1,
}) => {
	const { colorMode } = useColorMode();

	return (
		<GridItemFramer
			colSpan={{ base: '1', md: span }}
			as='li'
			listStyleType='none'
			px={6}
			py={10}
			textAlign='center'
			bgColor={colorMode === 'light' ? color : darkColor}
			borderRadius='3xl'
			variants={item}
		>
			<Heading as='h2' mb={6}>
				{title}
			</Heading>
			<Text
				fontSize='xl'
				color={colorMode === 'light' ? 'gray.800' : 'gray.200'}
			>
				{level}
			</Text>
			<Text
				mb={4}
				color={colorMode === 'light' ? 'gray.800' : 'gray.200'}
			>
				{description}
			</Text>

			<HStack spacing={3} display='inline-block'>
				<Link
					href={file}
					isExternal
					display='inline-block'
					py={2}
					px={4}
					color={colorMode === 'light' ? 'gray.800' : 'gray.200'}
					fontWeight='bold'
					textDecoration='none'
					border='2px solid'
					borderColor={
						colorMode === 'light' ? 'gray.800' : 'gray.200'
					}
					borderRadius='lg'
					transition='background 0.3s'
					_hover={{
						textDecoration: 'none',
						color: colorMode === 'light' ? 'gray.100' : 'gray.900',
						bgColor:
							colorMode === 'light' ? 'gray.800' : 'gray.200',
					}}
				>
					Descargar
				</Link>
			</HStack>
		</GridItemFramer>
	);
};

export default NoteItem;
