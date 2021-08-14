const styles = {
	global: ({ colorMode }) => ({
		body: {
			color: colorMode === 'light' ? 'gray.700' : 'gray.300',
			bgColor: colorMode === 'light' ? 'gray.100' : 'gray.900',
		},
		'#__next': {
			p: '40px',
			mx: 'auto',
			minH: '100vh',
			w: '100%',
			maxW: '900px',
		},
	}),
};

export default styles;
