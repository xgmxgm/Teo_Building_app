import type { FC } from 'react'
import styles from './GoodItem.module.scss'
import { useTranslations } from 'next-intl'

interface IProps {
	title: string
	description: string
	image_path: string
	url: string
}

export const GoodItem: FC<IProps> = ({
	description,
	title,
	image_path,
	url,
}) => {
	const t = useTranslations()

	return (
		<div className={styles.GoodItem}>
			<div className={styles.Up}>
				<img alt={title} src={image_path} />
			</div>
			<div className={styles.Center}>
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
			<div className={styles.Down}>
				<button className={styles.Button}>
					<a target='_blank' href={url}>
						{t('ReadMore')}
					</a>
				</button>
			</div>
		</div>
	)
}
