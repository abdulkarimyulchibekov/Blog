import React from 'react';
import Head from 'next/head';
import styles from '../styles/index.module.css';
import Image from 'next/image';
import { data } from '../Content';
import { Card, Header } from '../components';

const BlogIndex: React.FC = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Abdulkarim&apos;s blog</title>
				<meta name='description' content="Abdulkarim's Blog" />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'></meta>
				<link rel='icon' href='/favicon.ico' sizes='any' />
			</Head>
			<Header />
			<div className={styles.hero}>
				<Image
					className={styles.image}
					src='/images/profile-photo.jpg'
					alt="Abdulkarim's blog's profile image"
					width={200}
					height={200}
				/>
				<h1>Hi! Welcome to my blog.</h1>
				<p className={styles.description}>
					My name is Abdulkarim. I&apos;m front-end developer from Uzbekistan. I
					will be very happy to help you with your problems related to IT and
					share my experience with you
				</p>
			</div>
			<main className={styles.main}>
				<h2 className={styles.subtitle}>Read on my blog</h2>
				<ul className={styles.post__list}>
					{data?.filter(Boolean).map((e) => (
						<Card
							key={e.id}
							title={e.title}
							image={e.mainImage}
							desc={e.description}
							id={e.id}
						/>
					))}
				</ul>
			</main>
			<footer className={styles.footer}>
				<p>
					&copy; {new Date().getFullYear()} Abdulkarim&apos;s blog. All rights
					reserved.
				</p>
			</footer>
		</div>
	);
};

export default BlogIndex;
