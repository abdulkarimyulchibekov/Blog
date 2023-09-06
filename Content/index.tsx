import Image from 'next/image';
import React from 'react';
import styles from './style.module.css';
import Link from 'next/link';

export type ArticleType = {
	title: string;
	id: number;
	description: string;
	mainImage: React.ReactElement;
	content: React.ReactElement[];
};

export const data: ArticleType[] = [
	// ------------------ First Article -------------------------
	{
		title: 'History of React.js',
		id: 1,
		description:
			'In this article I write about history, that even one guy can change everything, you need only spend some effort',
		mainImage: (
			<Image
				src={'/images/Picture1.svg'}
				alt='image'
				quality={100}
				width={350}
				height={168}
			/>
		),
		content: [
			<h2 key={202}>
				What is{' '}
				<Link target='_blank' href={'https://react.dev'}>
					React
				</Link>
				?
			</h2>,
			<Image
				key={44}
				alt='image'
				quality={100}
				width={500}
				height={200}
				src={'/images/Picture1.svg'}
			/>,
			<p className={styles.text} key={1}>
				Every beginner front-end developer have heard about React at least one
				time. If you ask the question above to the{' '}
				<Link target='_blank' href={'https://www.google.com/'}>
					Google
				</Link>
				, it will answer something like:{' '}
				<b>
					&quot;React is a free and open-source front-end JavaScript library for
					building user interfaces based on components. It is maintained by Meta
					and a community of individual developers and companies. React can be
					used to develop single-page, mobile, or server-rendered applications
					with frameworks like Next.js&quot;
				</b>
				. Do you understand something? There are 4 points that we should focus
				on.
			</p>,
			<ol className={styles.text} key={2}>
				<li className={styles.item}>
					It is written in <code>JavaScript</code>
				</li>
				<li className={styles.item}>It is created by Meta (Facebook)</li>
				<li className={styles.item}>
					It is free (No one will use if it would not be free😁)
				</li>
				<li className={styles.item}>
					It is a <b>library</b> not <b>framework</b>!!!
				</li>
			</ol>,
			<h2 key={20}>The Birth of React</h2>,
			<p className={styles.text} key={111}>
				Google said that React was created by Facebook, by Meta. However key
				name in this journey was{' '}
				<code>
					<b>Jordan Walke</b>
				</code>{' '}
				,a software engineer at Facebook.
			</p>,
			<h3 key={5}>Web Development Before React&apos;s Rise</h3>,
			<p className={styles.text} key={222}>
				Before React&apos;s arrival, building dynamic user interfaces was a
				formidable challenge. Web applications relied on the Document Object
				Model (DOM) to represent and manipulate the structure of a web page. As
				user interfaces became more intricate and responsive, interacting with
				the DOM directly became a performance bottleneck.
			</p>,
			<p className={styles.text} key={3}>
				Facebook, like many other companies, faced the challenge of managing a
				complex news feed that needed frequent updates and re-renders.
				Traditional approaches to updating the DOM resulted in inefficiencies
				and poor user experiences.
			</p>,
			<p className={styles.text} key={4}>
				In 2010, Jordan Walke, a software engineer at Facebook, embarked on a
				mission to address these challenges. Walke&apos;s vision was to create a
				library that could efficiently update user interfaces, providing a
				smoother and more interactive experience. This project was initially
				named <code>&quot;FaxJS.&quot;</code>.
			</p>,
			<p className={styles.text} key={6}>
				Walke&apos;s <b>key innovation</b> was the idea of representing the user
				interface as a <code>&quot;virtual&quot;</code> DOM rather than
				interacting directly with the <code>browser&apos;s DOM</code>. This{' '}
				<code>&quot;virtual DOM&quot;</code> could be used to calculate the
				difference between the current UI state and the desired state, and then
				efficiently update only the necessary parts of the actual DOM.
			</p>,
			<h3 key={7}>Hackathon: React&apos;s Genesis</h3>,
			<p key={8}>
				<small style={{ color: 'GrayText' }}>
					<i>
						*Hackathon: *Intensive event where developers collaborate on
						software projects within a limited timeframe
					</i>
				</small>
			</p>,
			<p className={styles.text} key={9}>
				The turning point came during a Facebook hackathon event in early 2011.
				Walke, along with his team, presented a prototype of{' '}
				<code>&quot;FaxJS.&quot;</code>
				{' 	'}
				The project garnered significant interest and attention from other
				engineers at Facebook, leading to a collective understanding of its
				potential.
			</p>,
			<p className={styles.text} key={10}>
				Following the hackathon, the project&apos;s name was changed to React.
				The decision to open-source React was strategic, aiming to gather
				feedback from the developer community and drive further innovation.
				React&apos;s first release to the public occurred in May 2013.
			</p>,
			<p className={styles.text} key={11}>
				You can get more detailed information on YouTube.
			</p>,
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
					<i>ChatGPT is used(helped me a little bit) in writing this article</i>
				</small>
			</p>,
		],
	},
	// ================== Second Article =========================
	{
		title: 'File structure in React.JS',
		mainImage: (
			<Image
				src={'/images/react-folder-structure.png'}
				alt='Article image'
				width={350}
				quality={100}
				height={168}
			/>
		),
		id: 2,
		description:
			'In this article I want to tell you about 2 types of file structure in React.js',
		content: [
			<h2 key={2}>What is file structure and why it is so important?</h2>,
			<Image
				key={1}
				src={'/images/FileStructure.png'}
				alt='Image describing what is file Structure'
				width={500}
				quality={100}
				height={168}
			/>,
			<p key={3}>
				A file structure in <b>web development</b> is the organization and
				arrangement of files and directories within a project. It is important
				because it promotes <b>organization</b>, <b>maintainability</b>,{' '}
				<b>collaboration</b>, and <b>efficiency</b> in managing and developing
				software. A well-designed file structure helps developers find,
				understand, and work on code more effectively while facilitating project
				scalability and long-term maintainability.
			</p>,
			<p key={4}>
				There re lots of types of file structures, in this article I want to
				explain you only three most used structures.
			</p>,
			<h3 key={6}>Types of structures</h3>,
			<p key={100}>There are lots of types of file structures, and I choose two most popular of them to compare</p>,
			<ul key={5}>
				<li>Traditional (Component-Based) File Structure</li>
				<li>Feature-Based File Structure</li>
				<li>Atomic Design File Structure</li>
				<li>Layered Architecture File Structure</li>
				<li>Monolithic File Structure</li>
			</ul>,
			<p key={7}>
				They all designed for different purposes and they all have advantages
				and disadvantages as well.
			</p>,
			<h2 key={8}>Traditional (Component-Based) File Structure</h2>,
			<h3 key={10}>Explanation</h3>,
			<p key={9}>
				Explanation: This structure organizes files based on components. Each
				component has its own folder containing its JavaScript file, styles, and
				any related files (such as tests).
			</p>,
			<h3 key={21}>Pros (Advantages):</h3>,
			<ol key={22}>
				<li className={styles.m5}>
					<b>
						<code>Modularity: </code>
					</b>
					Components are organized as separate entities, making it easy to
					manage and reuse them throughout the application. This modularity
					promotes code reusability.
				</li>
				<li className={styles.m5}>
					<b>
						<code>Separation of Concerns: </code>
					</b>
					Each component typically has its own folder or directory, allowing for
					a clear separation of concerns. This separation makes it easier to
					maintain and update specific parts of the application without
					affecting others.
				</li>
				<li className={styles.m5}>
					<b>
						<code>Readability: </code>
					</b>
					The structure is intuitive and aligns with the mental model of
					developers, making code more readable and understandable.
				</li>
				<li className={styles.m5}>
					<b>
						<code>Scalability: </code>
					</b>
					The component-based structure scales well with larger applications, as
					new components can be added without major changes to the existing
					structure.
				</li>
				<li className={styles.m5}>
					<b>
						<code>Isolation for Testing: </code>
					</b>
					Components can be easily isolated for unit testing, improving code
					quality and test coverage.
				</li>
			</ol>,
			<h3 key={24}>Cons (disadvantages):</h3>,
			<ol key={25}>
				<li className={styles.m5}>
					<b>
						<code>Deep Folder Hierarchy: </code>
					</b>
					As the project grows, the folder structure can become deep and
					complex, potentially making it harder to navigate and locate files.
				</li>
				<li className={styles.m5}>
					<b>
						<code>Code Duplication: </code>
					</b>
					Components may share common utility functions, leading to duplicated
					code across various components.
				</li>
				<li className={styles.m5}>
					<b>
						<code>Finding Related Components: </code>
					</b>
					It can be time-consuming to locate related components that work
					together to form a feature or functionality.
				</li>
				<li className={styles.m5}>
					<b>
						<code>Complex Imports: </code>
					</b>
					The need to navigate through a deep directory structure can result in
					long and complex import paths, which might be less convenient.
				</li>
				<li className={styles.m5}>
					<b>
						<code>Lack of High-Level Structure: </code>
					</b>
					A pure component-based structure may lack high-level organization for
					features or functionalities, which can make it harder to see the
					bigger picture of how components fit together.
				</li>
			</ol>,
			<p key={23}>
				To address some of the cons, developers often combine component-based
				structures with other organization approaches, like feature-based
				organization or the use of containers for higher-level components. This
				hybrid approach can strike a balance between modularity and high-level
				organization. Ultimately, the choice of file structure depends on the
				specific project requirements and development team preferences.
			</p>,
			<h3 key={12}>Project Root:</h3>,
			<ul key={13}>
				<li>
					<b>
						<code>src: </code>
					</b>
					This is the main source code directory where all your application code
					resides.
				</li>
				<li className={`${styles.lstn} ${styles.mt10}`}>
					<ul>
						<li className={styles.m5}>
							<b>
								<code>components: </code>
							</b>
							This folder contains individual React component folders. Each
							component folder typically includes:
						</li>
						<li className={`${styles.lstn} ${styles.mt10}`}>
							<ul>
								<li className={styles.m5}>
									<b>
										<code>ComponentName.js: (or .jsx/.tsx)</code>
									</b>
									The main JavaScript file for the component.
								</li>
								<li className={styles.m5}>
									<b>
										<code>
											ComponentName.css (or .scss/.styles.tsx{' '}
											<i>recommended when using styled components</i>):{' '}
										</code>
									</b>
									Styles for the component.
								</li>
								<li className={styles.m5}>
									<b>
										<code>ComponentName.test.js (or .ts): </code>
									</b>
									Tests for the component.
								</li>
								<li className={styles.m5}>
									<b>
										<code>Other related files: </code>
									</b>
									Such as images, icons, or sub-components if necessary.
								</li>
								<li className={styles.m5}>
									<i>
										Note: You can wrap this all four files in one folder as in
										the image
									</i>
								</li>
							</ul>
						</li>
						<li className={styles.m5}>
							<b>
								<code>containers: </code>
							</b>
							Sometimes used for higher-level components or views that wrap
							multiple components.
						</li>
						<li className={styles.m5}>
							<b>
								<code>services: </code>
							</b>
							Utility functions or API calls.
						</li>
						<li className={styles.m5}>
							<b>
								<code>assets: </code>
							</b>
							Static assets like images, fonts, or other resources.
						</li>
						<li className={styles.m5}>
							<b>
								<code>styles: </code>
							</b>
							Global or shared styles (e.g., variables.scss (or .css/.less),
							global.css (or .scss/.less)).
						</li>
						<li className={styles.m5}>
							<b>
								<code>utils: </code>
							</b>
							Helper functions or utilities used throughout the project.
						</li>
						<li className={styles.m5}>
							<b>
								<code>contexts: </code>
							</b>
							React Context API providers and consumers if used.
						</li>
						<li className={styles.m5}>
							<b>
								<code>hooks: </code>
							</b>
							Custom React hooks.
						</li>
						<li className={styles.m5}>
							<b>
								<code>config: </code>
							</b>
							Configuration files or constants.
						</li>
						<li className={styles.m5}>
							<b>
								<code>routes: </code>
							</b>
							If using React Router, this folder can contain route definitions.
						</li>
						<li className={styles.m5}>
							<b>
								<code>App.js: (or .jsx/.tsx)</code>
							</b>
							The main application component where routing is often set up.
						</li>
						<li className={styles.m5}>
							<b>
								<code>index.js(or .jsx/.tsx): </code>
							</b>
							The entry point for the application, where ReactDOM.render is
							called.
						</li>
					</ul>
				</li>
			</ul>,
			<h3 key={18}>Notes:</h3>,
			<ul key={201}>
				<li className={styles.m5}>
					This structure is simple and suitable for small to medium-sized
					projects.
				</li>
				<li className={styles.m5}>
					Components are organized individually, making it easy to locate and
					work on specific parts of the application.
				</li>
				<li className={styles.m5}>
					However, as the project grows, managing a deep folder structure within
					the components directory can become challenging.
				</li>
				<li className={styles.m5}>
					Consider using a state management library like Redux for complex state
					management.
				</li>
			</ul>,
			<Image
				key={11}
				quality={100}
				src={'/images/component-based.png'}
				width={500}
				height={200}
				alt='Component-based file structure image'
			/>,
			<h2 key={131}>Feature-Based file structure</h2>,
			<h3 key={14}>Explanation</h3>,
			<p key={15}>
				In this structure, files are organized based on features or
				functionalities rather than components. Each feature or page of your
				application has its own directory containing all relevant files,
				including components, actions, reducers, styles, and tests.
			</p>,
			<h3 key={16}>Project Root:</h3>,
			<ul key={17}>
				<li className={styles.m5}>
					<b>
						<code>src: </code>
					</b>
					The main source code directory where your application code resides.
				</li>
				<li className={`${styles.m5} ${styles.lstn}`}>
					<ul>
						<li className={styles.m5}>
							<b>
								<code>features: </code>
							</b>
							In this structure, the <code>`features`</code> directory holds all
							the individual features or modules of your application. Each
							feature typically includes:
						</li>
						<li className={`${styles.m5} ${styles.lstn}`}>
							<ul>
								<li className={styles.m5}>
									<b>
										<code>FeatureName: </code>
									</b>
								</li>
								<li className={`${styles.m5} ${styles.lstn}`}>
									<ul style={{ listStyleType: 'disc' }}>
										<li className={styles.m5}>
											<b>
												<code>components: </code>
											</b>
										</li>
										<li className={`${styles.m5} ${styles.lstn}`}>
											<ul style={{ listStyleType: 'circle' }}>
												<li className={styles.m5}>
													<b>
														<code>ComponentName.js(or .jsx/.tsx): </code>
													</b>
													The main JavaScript file for the component.
												</li>
												<li className={styles.m5}>
													<b>
														<code>
															ComponentName.css (or .scss/.tsx/.less):{' '}
														</code>
													</b>
													Styles for the component.
												</li>
												<li className={styles.m5}>
													<b>
														<code>ComponentName.test.js (.ts): </code>
													</b>
													Tests for the component.
												</li>
												<li className={styles.m5}>
													<b>
														<code>Other related files: </code>
													</b>
													Such as images or sub-components.
												</li>
											</ul>
										</li>
										<li className={styles.m5}>
											<b>
												<code>containers: </code>
											</b>
											Higher-level components or views related to the feature.
										</li>
										<li className={styles.m5}>
											<b>
												<code>actions: </code>
											</b>
											Redux or other state management actions specific to the
											feature.
										</li>
										<li className={styles.m5}>
											<b>
												<code>reducers: </code>
											</b>
											Redux reducers specific to the feature.
										</li>
										<li className={styles.m5}>
											<b>
												<code>selectors: </code>
											</b>
											Selectors to access state from the feature&apos;s reducer.
										</li>
										<li className={styles.m5}>
											<b>
												<code>sagas (optional): </code>
											</b>
											Redux-Saga or other side-effect management related to the
											feature.
										</li>
										<li className={styles.m5}>
											<b>
												<code>store (optional): </code>
											</b>
											If you are using MobX or other state management library
											this folder can replace <code>sagas</code>,{' '}
											<code>actions</code>, <code>reducers</code> and{' '}
											<code>selectors</code>.
										</li>
										<li className={styles.m5}>
											<b>
												<code>api (optional): </code>
											</b>
											API-related functions or services.
										</li>
										<li className={styles.m5}>
											<b>
												<code>FeatureName.js: </code>
											</b>
											An entry point or main file for the feature.
										</li>
										<li className={styles.m5}>
											<b>
												<code>index.js (or .jsx/.tsx): </code>
											</b>
											The entry point for the application, where ReactDOM.render
											is called.
										</li>
									</ul>
								</li>
								<li className={styles.m5}>
									<b>
										<code>FeatureName: ...</code>
									</b>
								</li>
								<li className={styles.m5}>
									<b>
										<code>FeatureName: ...</code>
									</b>
								</li>
							</ul>
						</li>
						<li className={styles.m5}>
							<b>
								<code>assets: </code>
							</b>
							Static assets like images, fonts, or other resources.
						</li>
						<li className={styles.m5}>
							<b>
								<code>styles: </code>
							</b>
							Global or shared styles (e.g., variables.scss, global.css, .less).
						</li>
						<li className={styles.m5}>
							<b>
								<code>utils: </code>
							</b>
							Helper functions or utilities used throughout the project.
						</li>
						<li className={styles.m5}>
							<b>
								<code>contexts: </code>
							</b>
							React Context API providers and consumers if used.
						</li>
						<li className={styles.m5}>
							<b>
								<code>hooks: </code>
							</b>
							Custom React hooks.
						</li>
						<li className={styles.m5}>
							<b>
								<code>config: </code>
							</b>
							Configuration files or constants.
						</li>
						<li className={styles.m5}>
							<b>
								<code>routes: </code>
							</b>
							If using React Router, this folder can contain route definitions.
						</li>
						<li className={styles.m5}>
							<b>
								<code>App.js (or .jsx/.tsx): </code>
							</b>
							The main application component where routing is often set up.
						</li>
						<li className={styles.m5}>
							<b>
								<code>index.js (or .jsx/.tsx/.ts): </code>
							</b>
							The entry point for the application, where ReactDOM.render is
							called.
						</li>
					</ul>
				</li>
			</ul>,
			<h3 key={19}>Notes:</h3>,
			<ul key={20}>
				<li className={styles.m5}>
					The feature-based structure promotes organization by grouping related
					code together.
				</li>
				<li className={styles.m5}>
					Features are self-contained, making it easier to develop and maintain
					specific functionality.
				</li>
				<li className={styles.m5}>
					This structure is highly scalable and suitable for medium to
					large-sized projects.
				</li>
				<li className={styles.m5}>
					Components, actions, reducers, and other feature-specific code reside
					within their respective feature folders.
				</li>
				<li className={styles.m5}>
					It may require a more complex build process or tooling to handle
					dynamic imports and code splitting for features.
				</li>
				<li className={styles.m5}>
					Consider code-splitting for better performance, especially if your
					application becomes large.
				</li>
			</ul>,
		],
	},
];
