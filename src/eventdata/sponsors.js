/**
 * This file contains all the sponsor information for the sponsor section of the index
 */

import { base } from '$app/paths';

export default {
	gold: [
		{
			src: `${base}/sponsorlogos/eastbanc.png`,
			alt: 'East Banc Sponsor Logo',
			href: 'https://eastbanctech.com/'
		}
	],
	silver: [
		/**EMPTY WAA */
	],
	bronze: [
		{
			src: `${base}/sponsorlogos/collinsaero.png`,
			alt: 'Collins Aerospace Sponsor Logo',
			href: 'https://www.collinsaerospace.com/'
		},
		{
			src: `${base}/sponsorlogos/blueridge.png`,
			alt: 'Blueridge Networks Sponsor Logo',
			href: 'https://www.blueridgenetworks.com/'
		}
	]
};
