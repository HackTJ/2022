/**
 * This file contains all the sponsor information for the sponsor section of the index
 */

import { base } from '$app/paths';

export default {
	gold: [
		{
			src: `${base}/sponsorlogos/eastbanc.png`,
			alt: 'EastBanc Technologies Logo',
			href: 'https://eastbanctech.com/'
		}
	],
	silver: [
		{
			src: `${base}/sponsorlogos/janestreet.png`,
			alt: 'Jane Street Logo',
			href: 'https://www.janestreet.com/'
		}
	],
	bronze: [
		{
			src: `${base}/sponsorlogos/collinsaero.png`,
			alt: 'Collins Aerospace Logo',
			href: 'https://www.collinsaerospace.com/'
		},
		{
			src: `${base}/sponsorlogos/blueridge.png`,
			alt: 'Blue Ridge Networks Logo',
			href: 'https://www.blueridgenetworks.com/'
		},
		{
			src: `${base}/sponsorlogos/alarmcom.png`,
			alt: 'Alarm.com Logo',
			href: 'https://alarm.com/'
		}
	]
};
