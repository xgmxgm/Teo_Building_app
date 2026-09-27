import styles from './Goods.module.scss'
import { useTranslations } from 'next-intl'
import { GoodItem } from '@/shared/ui/GoodItem'

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

	return (
		<div className={styles.Goods}>
			<div className={styles.Content}>
				<div className={styles.Title}>
					<h2 className={styles.TitleText}>{t('Goods')}</h2>
				</div>
				<div className={styles.GoodsBlock}>
					{Array.from({ length: 22 }, (_, i) => {
						const index = i + 1

						if (index == 11) return

						return (
							<GoodItem
								key={index}
								title={t(getGoodsKey(index, 'title'))}
								description={truncateByWords(
									t(getGoodsKey(index, 'description')),
									60,
								)}
								image_path={t(getGoodsKey(index, 'image_path'))}
								url={t(getGoodsKey(index, 'url'))}
							/>
						)
					})}
				</div>
			</div>
		</div>
	)
}
