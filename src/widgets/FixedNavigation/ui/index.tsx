import Link from 'next/link'
import { Links } from '../Data'
import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import styles from './FixedNavigation.module.scss'

export const FixedNavigation = () => {
	const [scrollPosition, setScrollPosition] = useState(0)

	const t = useTranslations('DesktopHeader')
	const pathName = usePathname()

	useEffect(() => {
		const handleScroll = () => {
			setScrollPosition(window.scrollY)
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	})

	return (
		<>
			<div
				className={
					scrollPosition > 500
						? styles.FixedNavigation
						: styles.FixedNavigationAbsotule
				}
			>
				{Links.map((link, index) => (
					<ul key={index} style={{ listStyle: 'none' }}>
						<li className={styles.Li}>
							<Link
								className={styles.Link}
								href={`/${pathName.split('/')[1]}${link.href}`}
							>
								{t(link.link)}
							</Link>
						</li>
					</ul>
				))}
			</div>
		</>
	)
}
