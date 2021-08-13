import { IconButton } from '@chakra-ui/button';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { AnimatePresence, motion } from 'framer-motion';

import { useColorMode } from '@chakra-ui/color-mode';

const MoonIconBox = motion(MoonIcon);
const SunIconBox = motion(SunIcon);

const ToggleThemeButton = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<AnimatePresence exitBeforeEnter>
			<IconButton
				borderRadius='xl'
				position='fixed'
				top='1rem'
				right='1rem'
				bgColor={colorMode === 'light' ? 'gray.200' : 'gray.800'}
				onClick={toggleColorMode}
				aria-label={
					colorMode === 'light'
						? 'Toggle dark mode'
						: 'Toggle light Mode'
				}
				icon={
					colorMode === 'light' ? (
						<MoonIconBox
							size={6}
							initial={{ x: 20, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							exit={{ x: -20, opacity: 0 }}
						/>
					) : (
						<SunIconBox
							size={6}
							initial={{ x: 20, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							exit={{ x: -20, opacity: 0 }}
						/>
					)
				}
				_hover={{
					bgColor: colorMode === 'light' ? 'gray.300' : 'gray.700',
				}}
				_active={{
					bgColor: colorMode === 'light' ? 'gray.400' : 'gray.600',
				}}
			/>
		</AnimatePresence>
	);
};

export default ToggleThemeButton;
