import { extendTheme } from '@chakra-ui/react';

// Global styles overrides
import styles from './styles';

// Foundational styles overrides
import fonts from './foundations/fonts';

// Component styles overrides
import Heading from './components/heading';

const overrides = { styles, fonts, components: { Heading } };

const theme = extendTheme(overrides);

export default theme;
