const title = 'Apuntes de majo';
const description =
	'Apuntes hechos a mano sobre las tecnologias mas utilizadas. ¡Expero te sean de ayuda!';

const SEO = {
	title,
	description,
	canonical: 'https://losapuntesdemajo-five.vercel.app',
	openGraph: {
		type: 'website',
		locale: 'en_IE',
		url: 'https://losapuntesdemajo-five.vercel.app',
		title,
		description,
		images: [
			{
				url: 'https://losapuntesdemajo-five.vercel.app/og.png',
				alt: title,
				width: 1280,
				height: 720,
			},
		],
	},
	twitter: {
		handle: '@MajoLedes',
		site: '@MajoLedes',
		cardType: 'summary_large_image',
	},
};

export default SEO;
