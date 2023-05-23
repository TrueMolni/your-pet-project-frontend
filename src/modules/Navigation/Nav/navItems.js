import { nanoid } from 'nanoid';

const navItems = [
  {
    id: nanoid(),
    text: 'News',
    link: '/news',
  },
  {
    id: nanoid(),
    text: 'Find pet',
    link: '/notices/sell',
  },
  {
    id: nanoid(),
    text: 'Our friends',
    link: '/friends',
  },
];

export default navItems;
