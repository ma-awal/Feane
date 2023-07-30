import { v4 as uuidv4 } from 'uuid';

import c1 from '../assets/small-1.jpg';
import c2 from '../assets/small-2.jpg';
import c3 from '../assets/small-3.jpg';

const NewsData = [
  {
    id: uuidv4(),
    img: c1,
    title: ' Branding, Cunsulting ',
    heading: 'The top 13 benefits of proctive managed services',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    date: '05 Jan 2023',
  },
  {
    id: uuidv4(),
    img: c2,
    title: ' Branding, Cunsulting ',
    heading: 'The top 13 benefits of proctive managed services',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    date: '05 Jan 2023',
  },
  {
    id: uuidv4(),
    img: c3,
    title: ' Branding, Cunsulting ',
    heading: 'The top 13 benefits of proctive managed services',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    date: '05 Jan 2023',
  },
];
export default NewsData;
