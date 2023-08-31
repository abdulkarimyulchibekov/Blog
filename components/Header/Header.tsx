import React from 'react';
import styles from './header.module.css';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.box}>
				<Image
					className={styles.img}
					src='/favicon.ico'
					alt=''
					height={40}
					width={40}
				/>
				<p className={styles.title}>Blog</p>
			</div>
			<ul className={styles.list}>
				<li className={styles.item}>
					<Link className={styles.link} href={'/'}>
						Home
					</Link>
				</li>
				<li className={styles.item}>
					<Link className={styles.link} href={'/about'}>
						About
					</Link>
				</li>
				<li className={styles.item}>
					<Link className={styles.link} href={'/posts'}>
						Posts
					</Link>
				</li>
			</ul>
		</header>
	);
};
