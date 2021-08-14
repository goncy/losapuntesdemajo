import Image from 'next/image';
import { Box, Heading, HStack, Text, useColorMode } from '@chakra-ui/react';

import Link from '@/components/Link';

const BuyMe = () => {
	const { colorMode } = useColorMode();

	return (
		<Box
			as='section'
			px={6}
			py={10}
			mt={6}
			mx='auto'
			maxW='900px'
			bgColor={colorMode === 'light' ? '#f5deb3' : '#d0a24d'}
			borderRadius='3xl'
			textAlign='center'
		>
			<Heading fontSize='2xl' mb={2}>
				Ayudame a seguir haciendo apuntes🙈
			</Heading>
			<Text
				mb={6}
				opacity='0.8'
				color={colorMode === 'light' ? 'gray.800' : 'gray.200'}
			>
				Si te sirvieron y te interesa colaborar, podes ayudarme a través
				de Cafecito o Buy Me a &quot;Coffee&quot;.
			</Text>

			<HStack spacing={4} justify='center'>
				<Link href='https://cafecito.app/majoledes' isExternal>
					<Image
						src='https://cdn.cafecito.app/imgs/buttons/button_5.png'
						alt=''
						height='50'
						width='240'
					/>
				</Link>
				<Link
					href='https://www.buymeacoffee.com/apuntesdemajo'
					isExternal
				>
					<Image
						src='https://img.buymeacoffee.com/button-api/?text=Buy me a Sharpie&emoji=😙&slug=apuntesdemajo&button_colour=a06e90&font_colour=ffffff&font_family=Poppins&outline_colour=ffffff&coffee_colour=FFDD00'
						alt=''
						height='50'
						width='240'
					/>
				</Link>
			</HStack>
		</Box>
	);
};

export default BuyMe;
