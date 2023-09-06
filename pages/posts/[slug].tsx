import React from 'react';
import Head from 'next/head';
import styles from './slug.module.css';
import { useRouter } from 'next/router';
import { data } from '../../Content';

const Slug: React.FC = () => {
	const router = useRouter();
	const d = data.find(
		(e) => e.id === (router.query.slug ? +router.query.slug : null),
	);

	return (
		<div className={styles.container}>
			<Head>
				<title>{d?.title}</title>
				<meta
					name='description'
					content='Understanding file structures in React applications.'
				/>
			</Head>
			<header>
				<h1 className={styles.header}>{d?.title}</h1>
			</header>
			<main>{d?.content.map((e) => e)}</main>
		</div>
	);
};

export default Slug;
