import dayjs from 'dayjs';

const timeFormat = 'M/DD/YYYY HH:mm';
const scheduleItems = [
	// Day 1
	{
		title: 'Opening Ceremony',
		time: dayjs('4/16/2022 10:00', timeFormat)
	},
	{
		title: 'Hacking Begins',
		time: dayjs('4/16/2022 11:00', timeFormat)
	},
	{
		title: 'Team Building',
		time: dayjs('4/16/2022 11:15', timeFormat)
	},
	{
		title: 'Check-in Form Due',
		time: dayjs('4/16/2022 12:00', timeFormat)
	},
	{
		title: 'Sponsorship Fair',
		time: dayjs('4/16/2022 13:00', timeFormat)
	},
	{
		title: 'Workshops Begin',
		time: dayjs('4/16/2022 14:00', timeFormat)
	},
	{
		title: 'TypeRacer Tournament',
		time: dayjs('4/16/2022 14:30', timeFormat)
	},
	{
		title: 'Among Us',
		time: dayjs('4/16/2022 15:30', timeFormat)
	},
	{
		title: 'Women in Tech Panel',
		time: dayjs('4/16/2022 18:00', timeFormat)
	},
	{
		title: 'MLH Event (Bob Ross MS Paint)',
		time: dayjs('4/16/2022 20:00', timeFormat)
	},
	{
		title: 'Chess Blitz Tournament',
		time: dayjs('4/16/2022 21:00', timeFormat)
	},
	// Day 2
	{
		title: 'CSXBio Panel',
		time: dayjs('4/17/2022 11:00', timeFormat)
	},
	{
		title: 'CSXFinance Panel',
		time: dayjs('4/17/2022 13:00', timeFormat)
	},
	{
		title: 'Pictionary',
		time: dayjs('4/17/2022 14:00', timeFormat)
	},
	{
		title: 'Hacking Ends',
		time: dayjs('4/17/2022 16:00', timeFormat)
	},
	{
		title: 'Judging Starts',
		time: dayjs('4/17/2022 16:30', timeFormat)
	},
	{
		title: 'Keynote Speaker',
		time: dayjs('4/17/2022 21:00', timeFormat)
	},
	{
		title: 'Closing Ceremony',
		time: dayjs('4/17/2022 21:30', timeFormat)
	},
	{
		title: 'Hackathon Ends',
		time: dayjs('4/17/2022 22:30', timeFormat)
	}
];

export default scheduleItems;
