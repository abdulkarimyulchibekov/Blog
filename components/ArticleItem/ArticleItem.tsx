import React from 'react';
import { ArticleItemType } from '../../Content';
import styles from './ArticleItem.module.css';

export const ArticleItem: React.FC<ArticleItemType> = ({
	subTitle,
	children,
}) => {
	return (
		<div className={styles.layout}>
			<h2>{subTitle}</h2>
			{children}
		</div>
	);
};
