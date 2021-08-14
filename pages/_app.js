import { ChakraProvider } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';

import SEO from '../next-seo.config';
import theme from '@/styles/theme';

import '@fontsource/kanit/700.css';
import '@fontsource/rubik/400.css';

import Head from '@/components/Head';

const MyApp = ({ Component, pageProps }) => {
	return (
		<ChakraProvider theme={theme} resetCSS>
			<Head />
			<DefaultSeo {...SEO} />
			<Component {...pageProps} />
		</ChakraProvider>
	);
};

export default MyApp;
