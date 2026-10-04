'use client'

import Image from 'next/image'
import { Images } from '../data'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import styles from './Certificates.module.scss'

export const Certificates = () => {
	const t = useTranslations()

	const pVariants = {
		hidden: {
			x: 100,
			opacity: 0,
		},
		visible: (custom: number) => ({
			x: 0,
			opacity: 1,
			transition: { delay: custom * 0.8 },
		}),
	}

	return (
		<motion.div
			className={styles.Certificates}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true }}
		>
			<div className={styles.Content}>
				<div className={styles.Title}>
					<h2 className={styles.TitleText}>{t('Certificates')}</h2>
				</div>
				<div className={styles.CertificatesBlock}>
					{Images.map((img, index) => (
						<motion.div key={index} variants={pVariants} custom={index}>
							<Image
								className={styles.Img}
								src={img.href}
								alt='Certificate'
								width={550}
								height={800}
								style={{ maxWidth: '100%', height: 'auto' }}
								priority={true}
							/>
						</motion.div>
					))}
				</div>
			</div>
		</motion.div>
	)
}
