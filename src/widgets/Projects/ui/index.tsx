'use client'

import { motion } from 'framer-motion'
import styles from './Projects.module.scss'
import { useTranslations } from 'next-intl'
import { Project } from '@/shared/ui/Project'

export const Projects = () => {
	const t = useTranslations('Projects')

	const pVariants = {
		hidden: {
			x: 100,
			opacity: 0,
		},
		visible: (custom: number) => ({
			x: 0,
			opacity: 1,
			transition: { delay: custom * 0.2 },
		}),
	}

	return (
		<>
			<motion.div
				className={styles.Projects}
				initial='hidden'
				whileInView='visible'
				viewport={{ amount: 0.1, once: true }}
				style={{ overflow: 'hidden' }}
			>
				<div className={styles.Content}>
					<div className={styles.Up}>
						<motion.h2
							className={styles.Title}
							variants={pVariants}
							custom={2}
							style={{ overflow: 'hidden' }}
						>
							{t('title')}
						</motion.h2>
					</div>
					<div className={styles.Down} style={{ overflow: 'hidden' }}>
						<Project />
					</div>
				</div>
			</motion.div>
		</>
	)
}
