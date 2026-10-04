'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import styles from './Achievements.module.scss'
import { AchievementCard } from '@/shared/ui/AchievementCard'

export const Achievements = () => {
	const t = useTranslations('AchievementCards')

	const pVariants = {
		hidden: {
			x: -100,
			opacity: 0,
		},
		visible: (custom: number) => ({
			x: 0,
			opacity: 1,
			transition: { delay: custom * 0.2 },
		}),
	}

	return (
		<motion.div
			className={styles.Achievements}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.5 }}
		>
			<div className={styles.Content}>
				<div className={styles.Text}>
					<p className={styles.Numbs}>{t('Numbs')}</p>
					<h2 className={styles.Title}>TEO BUILDING</h2>
				</div>
				<div className={styles.Cards}>
					<AchievementCard
						variants={pVariants}
						custom={1}
						title={t('engineers')}
						icon='engineer.svg'
						Achievement={{ value: 10, text: '+' }}
					/>
					<AchievementCard
						variants={pVariants}
						custom={2}
						title={t('completedProjects')}
						icon='ruler.svg'
						Achievement={{ value: 100, text: '+' }}
					/>
					<AchievementCard
						variants={pVariants}
						custom={3}
						title={t('clients')}
						icon='users.svg'
						Achievement={{ value: 200, text: '+' }}
					/>
					<AchievementCard
						variants={pVariants}
						custom={4}
						title={t('experience')}
						icon='wheelbarrow.svg'
						Achievement={{ value: 15, text: ' лет' }}
					/>
				</div>
			</div>
		</motion.div>
	)
}
