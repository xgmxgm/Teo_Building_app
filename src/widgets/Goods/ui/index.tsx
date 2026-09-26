import { useTranslations } from 'next-intl'
import styles from './Goods.module.scss'

export const Goods = () => {
	const t = useTranslations()

	return (
		<div className={styles.Goods}>
			<div className={styles.Content}>
				<div className={styles.Title}>
					<h2 className={styles.TitleText}>{t('Goods')}</h2>
				</div>
				<div className={styles.GoodsBlock}>
					
				</div>
			</div>
		</div>
	)
}
