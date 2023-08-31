import Image from 'next/image';
import React from 'react';
import styles from './style.module.css';
import Link from 'next/link';

export type ArticleItemType = {
	subTitle: string | React.ReactElement;
	children: React.ReactElement[];
};

export type ArticleType = {
	title: string;
	id: number;
	description: string;
	mainImage: React.ReactElement;
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
				subTitle: (
					<h2>
						What is{' '}
						<Link target='_blank' href={'https://react.dev'}>
							React
						</Link>
						?
					</h2>
				),
				children: [
					<Image
						key={4}
						alt='image'
						width={500}
						height={200}
						src={'/images/Picture1.svg'}
					/>,
					<p key={1}>
						Every beginner front-end developer have heard about React at least
						one time. If you ask the question above to the{' '}
						<Link target='_blank' href={'https://www.google.com/'}>
							Google
						</Link>
						, it will answer something like:{' '}
						<b>
							&quot;React is a free and open-source front-end JavaScript library
							for building user interfaces based on components. It is maintained
							by Meta and a community of individual developers and companies.
							React can be used to develop single-page, mobile, or
							server-rendered applications with frameworks like Next.js&quot;
						</b>
						. Do you understand something? There are 4 points that we should
						focus on.
					</p>,
					<ol key={2}>
						<li>
							It is written in <code>JavaScript</code>
						</li>
						<li>It is created by Meta (Facebook)</li>
						<li>It is free (No one will use if it would not be free😁)</li>
						<li>
							It is a <b>library</b> not <b>framework</b>!!!
						</li>
					</ol>,
				],
			},
			{
				subTitle: 'The Birth of React',
				children: [
					<p key={1}>
						Google said that React was created by Facebook, by Meta. However key
						name in this journey was{' '}
						<code>
							<b>Jordan Walke</b>
						</code>
						,a software engineer at Facebook.
					</p>,
					<h4 key={5}>Web Development Before React&apos;s Rise</h4>,
					<p key={2}>
						Before React&apos;s arrival, building dynamic user interfaces was a
						formidable challenge. Web applications relied on the Document Object
						Model (DOM) to represent and manipulate the structure of a web page.
						As user interfaces became more intricate and responsive, interacting
						with the DOM directly became a performance bottleneck.
					</p>,
					<p key={3}>
						Facebook, like many other companies, faced the challenge of managing
						a complex news feed that needed frequent updates and re-renders.
						Traditional approaches to updating the DOM resulted in
						inefficiencies and poor user experiences.
					</p>,
					<p key={4}>
						In 2010, Jordan Walke, a software engineer at Facebook, embarked on
						a mission to address these challenges. Walke&apos;s vision was to
						create a library that could efficiently update user interfaces,
						providing a smoother and more interactive experience. This project
						was initially named <code>&quot;FaxJS.&quot;</code>.
					</p>,
					<p key={6}>
						Walke&apos;s <b>key innovation</b> was the idea of representing the
						user interface as a <code>&quot;virtual&quot;</code> DOM rather than
						interacting directly with the <code>browser&apos;s DOM</code>. This{' '}
						<code>&quot;virtual DOM&quot;</code> could be used to calculate the
						difference between the current UI state and the desired state, and
						then efficiently update only the necessary parts of the actual DOM.
					</p>,
					<h4 key={7}>Hackathon: React&apos;s Genesis</h4>,
					<p key={8}>
						<small style={{ color: 'GrayText' }}>
							<i>
								*Hackathon: *Intensive event where developers collaborate on
								software projects within a limited timeframe
							</i>
						</small>
					</p>,
					<p key={9}>
						The turning point came during a Facebook hackathon event in early
						2011. Walke, along with his team, presented a prototype of{' '}
						<code>&quot;FaxJS.&quot;</code>
						{' 	'}
						The project garnered significant interest and attention from other
						engineers at Facebook, leading to a collective understanding of its
						potential.
					</p>,
					<p key={10}>
						Following the hackathon, the project&apos;s name was changed to
						React. The decision to open-source React was strategic, aiming to
						gather feedback from the developer community and drive further
						innovation. React&apos;s first release to the public occurred in May
						2013.
					</p>,
					<p key={11}>You can get more detailed information on YouTube.</p>,
					<iframe
						key={12}
						width='500'
						height='250'
						src='https://www.youtube.com/embed/8pDqJVdNa44?si=VnUhRFLMdePE1zKe'
						title='YouTube video player'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						allowFullScreen></iframe>,
					<p key={13}>
						<small style={{ color: 'GrayText' }}>
							<i>
								ChatGPT is used(helped me a little bit) in writing this article
							</i>
						</small>
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
						width={500}
						height={200}
						src={'/images/react-folder-structure.png'}
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
						width={500}
						height={200}
						src={'/images/react-folder-structure.png'}
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
