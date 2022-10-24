import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html>
			<Head>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/logo1.png" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Akronim&family=Bubblegum+Sans&family=Comfortaa:wght@400;700&family=Fredericka+the+Great&family=Laila:wght@400;700&family=Moo+Lah+Lah&family=Oregano&family=Poiret+One&family=Seaweed+Script&display=swap" rel="stylesheet" />
			</Head>
			<body>
				<Main />				
				<NextScript />
			</body>
		</Html>
	)
}
