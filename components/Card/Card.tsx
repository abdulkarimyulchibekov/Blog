import React from 'react';
import styles from './card.module.css';
import Link from 'next/link';
import Image from 'next/image';

interface IProps {
	title: string;
	desc: string;
	image: React.ReactElement;
	id: number;
}

export const Card = (props: IProps) => {
	const { title, desc, image, id } = props;
	console.log(image);

	return (
		<li className={`${styles.list__item} ${styles.card}`}>
			<Image
				src={image?.props?.src}
				width={image?.props?.width}
				height={image?.props?.height}
				className={styles.cardImage}
				alt={image?.props?.alt}
			/>
			<div className={styles.box}>
				<h4 className={styles.title}>{title}</h4>
				<p className={styles.cardDescription}>{desc}</p>
				<Link className={styles.cardButton} href={`/posts/${id}`}>
					More
				</Link>
			</div>
		</li>
	);
};
