'use client'

import { motion } from 'framer-motion'
import styles from './Goods.module.scss'
import { useTranslations } from 'next-intl'
import { MGoodItem } from '@/shared/ui/GoodItem'

export const Goods = () => {
	const t = useTranslations()

	const truncateByWords = (text: string, maxWords = 60) => {
		if (!text) return ''
		const words = text.trim().split(/\s+/)
		return words.length > maxWords
			? words.slice(0, maxWords).join(' ') + ' ...'
			: text
	}

	const getGoodsKey = (
		index: number,
		field: 'title' | 'description' | 'image_path' | 'url',
	) => `GoodsPage.${index}.${field}` as Parameters<typeof t>[0]

	const pVariants = {
		hidden: {
			x: -20,
			opacity: 0,
		},
		visible: (custom: number) => ({
			x: 0,
			opacity: 1,
			transition: { delay: custom * 0.3 },
		}),
	}

	return (
		<motion.div
			className={styles.Goods}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.1 }}
		>
			<div className={styles.Content}>
				<div className={styles.Title}>
					<h2 className={styles.TitleText}>{t('Goods')}</h2>
				</div>
				<div className={styles.GoodsBlock}>
					{Array.from({ length: 22 }, (_, i) => i + 1)
						.filter(index => index !== 11)
						.map((index, i) => (
							<MGoodItem
								style={{ overflow: 'hidden' }}
								variants={pVariants}
								custom={i}
								key={index}
								title={t(getGoodsKey(index, 'title'))}
								description={truncateByWords(
									t(getGoodsKey(index, 'description')),
									60,
								)}
								image_path={t(getGoodsKey(index, 'image_path'))}
								url={t(getGoodsKey(index, 'url'))}
							/>
						))}
				</div>
			</div>
		</motion.div>
	)
}
