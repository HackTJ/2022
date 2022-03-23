import dayjs from 'dayjs';

const timeFormat = 'M/DD/YYYY HH:mm';
const scheduleItems = [
	// Day 1
	{
		title: 'Doors Open',
		time: dayjs('4/16/2022 10:00', timeFormat)
	},
	{
		title: 'Sponsorship Fair',
		time: dayjs('4/16/2022 10:00', timeFormat)
	},
	{
		title: 'Opening Ceremony',
		time: dayjs('4/16/2022 11:00', timeFormat)
	},
	{
		title: 'Doors Close',
		time: dayjs('4/16/2022 11:00', timeFormat)
	},
	{
		title: 'Hacking Begins',
		time: dayjs('4/16/2022 11:30', timeFormat)
	},
	{
		title: 'Team Building',
		time: dayjs('4/16/2022 11:30', timeFormat)
	},
	{
		title: 'Lunch',
		time: dayjs('4/16/2022 13:00', timeFormat)
	},
	{
		title: 'Workshops Begin',
		time: dayjs('4/16/2022 14:00', timeFormat)
	},
	{
		title: 'Afternoon Snack',
		time: dayjs('4/16/2022 16:00', timeFormat)
	},
	{
		title: 'Dinner',
		time: dayjs('4/16/2022 19:00', timeFormat)
	},
	// Day 2
	{
		title: 'Midnight Snack',
		time: dayjs('4/17/2022 00:00', timeFormat)
	},
	{
		title: 'Early Morning Snack',
		time: dayjs('4/17/2022 04:00', timeFormat)
	},
	{
		title: 'Hacking Ends',
		time: dayjs('4/17/2022 08:00', timeFormat)
	},
	{
		title: 'Breakfast',
		time: dayjs('4/17/2022 08:00', timeFormat)
	},
	{
		title: 'Judging Starts',
		time: dayjs('4/17/2022 09:00', timeFormat)
	},
	{
		title: 'Closing Ceremony',
		time: dayjs('4/17/2022 11:30', timeFormat)
	},
	{
		title: 'Hackathon Ends',
		time: dayjs('4/17/2022 12:00', timeFormat)
	}
];

export default scheduleItems;
