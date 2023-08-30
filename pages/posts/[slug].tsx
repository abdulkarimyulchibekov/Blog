import React from 'react';
import Head from 'next/head';
import styles from './slug.module.css'; // Import your CSS module
import { useRouter } from 'next/router';
import { data } from '../../Content';
import { ArticleItem } from '../../components';

const FirstPost: React.FC = () => {
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
			<header className={styles.header}>
				<h1>{d?.title}</h1>
			</header>
			<main>
				{d?.content.map((e) => (
					<ArticleItem subTitle={e.subTitle} key={e.subTitle}>
						{e.children}
					</ArticleItem>
				))}
			</main>
		</div>
	);
};

export default FirstPost;
