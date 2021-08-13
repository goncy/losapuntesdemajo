import { Box, HStack, Text } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icon';

import socials from '@/data/socials';

import Link from '@/components/Link';

const Footer = () => {
	return (
		<Box mt={8} textAlign='center'>
			<HStack
				as='ul'
				mb={2}
				spacing={8}
				listStyleType='none'
				display='flex'
				justifyContent='center'
			>
				{socials.map((social) => (
					<SocialLink key={social.name} {...social} />
				))}
			</HStack>
			<Text>Hecho con ♥️</Text>
		</Box>
	);
};

const SocialLink = ({ href, name, icon, color }) => {
	return (
		<li>
			<Link
				href={href}
				isExternal
				_hover={{ color: color, textDecoration: 'none' }}
			>
				<Icon as={icon} aria-hidden='true' mr={1} fill='none' />
				{name}
			</Link>
		</li>
	);
};

export default Footer;
