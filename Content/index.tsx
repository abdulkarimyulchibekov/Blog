import Image from 'next/image';
import React from 'react';
import styles from './style.module.css';

export type ArticleItemType = {
	subTitle: string;
	children: React.ReactNode[];
};

export type ArticleType = {
	title: string;
	id: number;
	description: string;
	mainImage: React.ReactNode;
	content: ArticleItemType[];
};

export const data: ArticleType[] = [
	// ------------------ First Article -------------------------
	{
		title: 'All About React.js',
		id: 1,
		description: 'In this article I want to share my knowledge about React.js',
		mainImage: (
			<Image
				src={'/images/Picture1.svg'}
				alt='image'
				width={350}
				height={168}
			/>
		),
		content: [
			{
				subTitle: 'What Is React?',
				children: [
					<p key={1}>
						React is a free and open-source front-end JavaScript library for
						building user interfaces based on components. It is maintained by
						Meta and a community of individual developers and companies. React
						can be used to develop single-page, mobile, or server-rendered
						applications with frameworks like Next.js.
					</p>,
					<Image
						key={2}
						alt='image'
						width={500}
						height={200}
						src={'/images/Picture1.svg'}
					/>,
					<p key={3}>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, non
						consectetur eos{' '}
						<code className={styles.red}> tempora repellendus </code> qui
						laudantium error corrupti nobis soluta explicabo dolores cupiditate
						iste
						<b> autem? Explicabo </b>
						maxime sint obcaecati iure?
					</p>,
				],
			},
			{
				subTitle: 'History of React',
				children: [
					<p key={1}>
						Lorem ipsum <i> dolor sit amet </i> consectetur, adipisicing elit.
						Veritatis, aliquam. Enim numquam vel fugit voluptatem, obcaecati
						unde neque. Cum aspernatur praesentium excepturi nostrum accusantium
						consequuntur recusandae ut et, magni vitae.
					</p>,
					<Image
						key={2}
						alt='image'
						width={500}
						height={200}
						src={'/images/Picture1.svg'}
					/>,
					<p key={3}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
						rem error culpa laudantium voluptate dicta architecto in fuga
						nesciunt provident doloremque labore aut vero officia, delectus
						minima dolor qui. Libero!
					</p>,
				],
			},
		],
	},
	// ================== Second Article =========================
	{
		title: 'React File Structures',
		id: 2,
		description:
			'In this article I want to share my knowledge about file structures, their benefits and drawbacks of them.',
		mainImage: (
			<Image
				src={'/images/react-folder-structure.png'}
				alt='image'
				width={350}
				height={168}
			/>
		),
		content: [
			{
				subTitle: 'What is file structure',
				children: [
					<p key={1}>React is very popular JavaScript framework</p>,
					<Image
						key={2}
						alt='image'
						width={200}
						height={200}
						src={'https://placehold.co/200x200'}
					/>,
					<p key={3}>it is very good</p>,
				],
			},
			{
				subTitle: 'History of React',
				children: [
					<p key={1}>
						When developing a React application, organizing your files and
						folders properly is crucial for maintainability and scalability.
					</p>,
					<Image
						key={2}
						alt='image'
						width={200}
						height={200}
						src={'https://placehold.co/200x200'}
					/>,
					<p key={3}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
						rem error culpa laudantium voluptate dicta architecto in fuga
						nesciunt provident doloremque labore aut vero officia, delectus
						minima dolor qui. Libero!
					</p>,
				],
			},
		],
	},
];
