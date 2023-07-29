import chance4Pets from '../../public/chance_4_pets_21.png';
import loveThyNeighbor from '../../public/love_thy_neighbor_31.png';
import goinLP1 from '../../public/goin_lp_11.png';
import goinLP2 from '../../public/goin_lp_21.png';
import goinImageEdit from '../../public/goin_image_editor1.png';

export const projects = [
	{
		id: 1,
		title: 'Chance 4 Pets 🐱',
		subtitle: 'A Bridge Between Pet Adopters and Rescues',
		description:
			'Chance 4 Pets is a full stack React web app that allows users to view animals available for adoption from local animal rescues, create an account, login, favorite animals, as well as to report an animal in need of shelter intake.',
		tech: 'Technologies used: React, CSS, Ant Design, MongoDB, GCP, Node.js, Express',
		image_url: chance4Pets,
		live_url: 'https://animal-rescue-frontend-js.web.app/',
		github_url: 'https://github.com/cassichan/animal-rescue-frontend',
	},
	{
		id: 2,
		title: 'Love Thy Neighbor ❤️',
		subtitle: 'Sharing the love- One letter at a time',
		description: 'Love Thy Neighbor is a full stack React web app that allows users to create and view love letters. Lifting others up is something I love to do, and I wanted to create a platform for others to do the same.',
		tech: 'Technologies used: React, CSS, Ant Design, GCP, Node.js, Express',
		image_url: loveThyNeighbor,
		live_url: 'https://love-letter-web-cc.web.app/',
		github_url: 'https://github.com/cassichan/love-letter-react',
	},
	// {
	//   "id": 3,
	//   "index": 2,
	//   "title": "Glimmers",
	//   "subtitle": "subtitle",
	//   "description": "project3 description",
	//   "image_url": "/image_url",
	//   "live_url": "live_url",
	//   "github_url": "github_url"
	// },
	{
		id: 4,
		title: "'Landing Page-V1' for Goin-Travel.co 🇨🇴",
		subtitle: 'The Digital Tour Guide of Colombia',
		description:
			'Goin-Travel is a Travel and Tourism app for travelers to find hotels, places, and recreation in Colombia, as well as for the distribution of digital menus and dissemination of events.  Landing page to be used for marketing purposes.',
		tech: 'Technologies used: Angular, HTML, SCSS, PrimeNG',
		image_url: goinLP1,
		live_url: 'https://gointravel.co/landing-page',
		github_url: '',
	},
	{
		id: 5,
		title: "'Landing Page-V2' for Goin-Travel.co 🇨🇴",
		subtitle: 'The Digital Tour Guide of Colombia',
		description:
			'Goin-Travel is a Travel and Tourism app for travelers to find hotels, places, and recreation in Colombia, as well as for the distribution of digital menus and dissemination of events. Landing page to be used for marketing purposes.',
		tech: 'Technologies used: Angular, HTML, SCSS, PrimeNG',
		image_url: goinLP2,
		live_url: 'https://gointravel.co/landing-page-2',
		github_url: '',
	},
	{
		id: 6,
		title: "'Image Editor' Prototype for Goin-Travel.co 📷",
		subtitle: 'The Digital Tour Guide of Colombia',
		description: 'This feature allows users to rotate, flip, grayscale, and download various file types of images. Further UX/UI design and functionality to be implemented in future iterations.',
		tech: 'Technologies used: Angular, HTML, SCSS, Photon',
		image_url: goinImageEdit,
		live_url: 'https://gointravel.co/toolbox/image-editor',
		github_url: '',
	},
];
