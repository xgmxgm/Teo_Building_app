'use client'

import Image from 'next/image'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'
import { forwardRef, useState } from 'react'
import styles from './AchievementCard.module.scss'

type TAchievement = {
	value: number
	text: string
}

interface IProps {
	title: string
	icon: string
	Achievement: TAchievement
	variants: any
	custom: number
}

export const AchievementCard = forwardRef<HTMLDivElement, IProps>(
	({ title, icon, Achievement, custom, variants }: IProps, ref) => {
		const [isVisible, setIsVisible] = useState<boolean>(false)

		return (
			<motion.div
				variants={variants}
				custom={custom}
				initial='hidden'
				whileInView='visible'
				viewport={{
					once: true,
					amount: 0.5,
				}}
				className={styles.AchievementCard}
				ref={ref}
				style={{ overflow: 'hidden' }}
				onViewportEnter={() => setIsVisible(true)}
			>
				<div className={styles.Content}>
					<div className={styles.Up}>
						<h2 className={styles.Title}>{title}</h2>
					</div>
					<div className={styles.Down}>
						<Image src={icon} alt='icon' width={50} height={50} />
						<h2>
							{isVisible && <CountUp end={Achievement.value} duration={5} />}
							{Achievement.text}
						</h2>
					</div>
				</div>
			</motion.div>
		)
	},
)
