import moment from 'moment';

const timeFormat = 'M/DD/YYYY HH:mm';
const scheduleItems = [
	// Day 1
	{
		title: 'Opening Ceremony',
		time: moment('4/16/2022 10:00', timeFormat)
	},
	{
		title: 'Hacking Begins',
		time: moment('4/16/2022 11:00', timeFormat)
	},
	{
		title: 'Team Building',
		time: moment('4/16/2022 11:15', timeFormat)
	},
	{
		title: 'Check-in Form Due',
		time: moment('4/16/2022 12:00', timeFormat)
	},
	{
		title: 'Sponsorship Fair',
		time: moment('4/16/2022 13:00', timeFormat)
	},
	{
		title: 'Workshops Begin',
		time: moment('4/16/2022 14:00', timeFormat)
	},
	{
		title: 'TypeRacer Tournament',
		time: moment('4/16/2022 14:30', timeFormat)
	},
	{
		title: 'Among Us',
		time: moment('4/16/2022 15:30', timeFormat)
	},
	{
		title: 'Women in Tech Panel',
		time: moment('4/16/2022 18:00', timeFormat)
	},
	{
		title: 'MLH Event (Bob Ross MS Paint)',
		time: moment('4/16/2022 20:00', timeFormat)
	},
	{
		title: 'Chess Blitz Tournament',
		time: moment('4/16/2022 21:00', timeFormat)
	},
	// Day 2
	{
		title: 'CSXBio Panel',
		time: moment('4/17/2022 11:00', timeFormat)
	},
	{
		title: 'CSXFinance Panel',
		time: moment('4/17/2022 13:00', timeFormat)
	},
	{
		title: 'Pictionary',
		time: moment('4/17/2022 14:00', timeFormat)
	},
	{
		title: 'Hacking Ends',
		time: moment('4/17/2022 16:00', timeFormat)
	},
	{
		title: 'Judging Starts',
		time: moment('4/17/2022 16:30', timeFormat)
	},
	{
		title: 'Keynote Speaker',
		time: moment('4/17/2022 21:00', timeFormat)
	},
	{
		title: 'Closing Ceremony',
		time: moment('4/17/2022 21:30', timeFormat)
	},
	{
		title: 'Hackathon Ends',
		time: moment('4/17/2022 22:30', timeFormat)
	}
];

export default scheduleItems;
