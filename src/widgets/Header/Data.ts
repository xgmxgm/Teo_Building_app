interface INav {
	link: any
	href: string
}

interface IContacts {
	icon: string
	key: any
}

export const Navs: INav[] = [
	{
		link: 'aboutUs',
		href: '/',
	},
	{
		link: 'photoGallery',
		href: '/photo-galleries',
	},
	{
		link: 'Certificates',
		href: '/certificates',
	},
	{
		link: 'Goods',
		href: '/goods',
	},
]

export const Contacts: IContacts[] = [
	{
		icon: '/phone.svg',
		key: 'phone',
	},
	{
		icon: '/mail.svg',
		key: 'mail',
	},
	{
		icon: '/location.svg',
		key: 'place',
	},
]
