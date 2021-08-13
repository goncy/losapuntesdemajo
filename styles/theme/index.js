import { extendTheme } from '@chakra-ui/react';

// Global styles overrides
import styles from './styles';

// Foundational styles overrides

// Component styles overrides
import Heading from './components/heading';

const overrides = { styles, components: { Heading } };

const theme = extendTheme(overrides);

export default theme;
