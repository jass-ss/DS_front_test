import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Link from 'next/link';
import { StyledLayout, Inner, StyledNav } from './Layout_style';
import Footer from './Footer';
import Categoty from './Categoty';

type childType = {
	children: React.ReactNode;
};

function Layout({ children }: childType) {
	return (
		<StyledLayout>
			<Head>
				<title>devspace</title>
				<meta name='SNS' content='개발 커뮤니티 devspace' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<main>
				<Categoty />
				<Inner>
					<p>1280px</p>
					{children}
				</Inner>
			</main>
			<Footer />
		</StyledLayout>
	);
}

export default Layout;
