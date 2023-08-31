import React from 'react';
import styles from './drawer.module.css';
import Link from 'next/link';

interface IProps {
	open: boolean;
	setOpen: Function;
}

export const Drawer = ({ open, setOpen }: IProps) => {
	const handleClose = () => {
		setOpen(false);
		document.querySelector('body')?.classList.remove('hidden');
	};
	return (
		<>
			<div className={open ? `${styles.drawer} ${styles.open}` : styles.drawer}>
				<button className={styles.xbtn} onClick={handleClose}>
					X
				</button>
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
			</div>
			<div
				onClick={handleClose}
				className={open ? `${styles.bg} ${styles.paper}` : styles.paper}></div>
		</>
	);
};
