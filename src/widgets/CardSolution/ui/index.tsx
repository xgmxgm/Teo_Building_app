'use client'

import Image from 'next/image'
import { CartsData } from '../Data'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import styles from './CardSolution.module.scss'

export const CardSolution = () => {
	const t = useTranslations('CompanyOffers.cardSolution')

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
			className={styles.CardSolution}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.1 }}
		>
			<div className={styles.Content}>
				{CartsData.map((CartData, index) => (
					<motion.div
						variants={pVariants}
						custom={index}
						key={index}
						className={styles.Card}
						style={{ overflow: 'hidden' }}
					>
						<div className={styles.BackgroundImg}>
							<div className={styles.CardBody}>
								<div className={styles.Icon}>
									<Image
										src={CartData.icon}
										alt='icon'
										width={40}
										height={40}
									/>
								</div>
								<div className={styles.CardTitle}>
									<h3>{t(CartData.key)}</h3>
								</div>
								<div className={styles.CardInfo}>
									<p>{t(CartData.info)}</p>
								</div>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</motion.div>
	)
}
