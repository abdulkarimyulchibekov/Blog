import { useState, useEffect } from 'react';
import styles from './header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Drawer } from '../';

export const Header = () => {
	const [isClient, setIsClient] = useState(false);
	const [open, setOpen] = useState(false);
	let width = 0;

	useEffect(() => {
		setIsClient(true);
	}, []);

	const handleOpen = () => {
		setOpen(true);
		document.querySelector('body')?.classList.add('hidden');
	};

	if (isClient) {
		width = window.innerWidth;
	}
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
			{isClient && width >= 650 ? (
				<nav>
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
				</nav>
			) : (
				<button onClick={handleOpen} className={styles.btn}>
					☰
				</button>
			)}
			<Drawer open={open} setOpen={setOpen} />
		</header>
	);
};
