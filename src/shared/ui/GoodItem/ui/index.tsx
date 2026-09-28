import { forwardRef, type FC } from 'react'
import styles from './GoodItem.module.scss'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'

interface IProps {
	title: string
	description: string
	image_path: string
	url: string
}

export const GoodItem = forwardRef<HTMLDivElement, IProps>(
	({ description, title, image_path, url }, ref) => {
		const t = useTranslations()

		return (
			<div className={styles.GoodItem} ref={ref}>
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
	},
)

export const MGoodItem = motion(GoodItem)
