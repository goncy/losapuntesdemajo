import Image from 'next/image';
import {
	Center,
	Grid,
	GridItem,
	Heading,
	Text,
	useMediaQuery,
} from '@chakra-ui/react';

import Link from '@/components/Link';
import { TwitterIcon } from '@/styles/theme/icons';

const Header = () => {
	const [isMobileSize] = useMediaQuery('(max-width: 695px)');

	return (
		<Grid
			as='header'
			templateColumns='repeat(auto-fit, minmax(300px, 1fr))'
			gap={4}
			textAlign={isMobileSize ? 'center' : 'left'}
		>
			<GridItem>
				<Heading as='h1' fontSize='6xl' mb={4}>
					Los apuntes de majo
				</Heading>
				<Text>
					Majo here! 👋🏻, realizo apuntes a mano sobre las tecnologías
					más utilizadas.
				</Text>
				<Text mt={2}>
					Podes sugerirme temas en <TwitterIcon color='#1da1f2' />{' '}
					<Link
						href='https://twitter.com/MajoLedes'
						isExternal
						color='pink.400'
					>
						@majoledes
					</Link>
					.
				</Text>
			</GridItem>

			<Center>
				<Image
					src='/logo.min.svg'
					alt='logo unicorn'
					height='100'
					width='100'
					preload='true'
				/>
			</Center>
		</Grid>
	);
};

export default Header;
