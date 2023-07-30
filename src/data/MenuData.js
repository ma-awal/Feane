import { v4 as uuidv4 } from 'uuid';
import m1 from '../assets/1.jpg';
import m2 from '../assets/2.jpg';
import m3 from '../assets/3.jpg';
import m4 from '../assets/4.jpg';
import m5 from '../assets/5.jpg';
import m6 from '../assets/6.jpg';

const MenuData = [
  {
    id: uuidv4(),
    rating: 5,
    reviews: 9,
    title: ' Bras Pork Chops',
    img: m1,
    category: 'Break Fast',
    price: 54,
    oldPrice: 56,
  },
  {
    id: uuidv4(),
    rating: 4.5,
    reviews: 3,
    title: ' Bras Pork Chops',
    img: m6,
    category: 'Break Fast',
    price: 54,
    oldPrice: 56,
  },
  {
    id: uuidv4(),
    rating: 5,
    reviews: 23,
    title: ' Bras Pork Chops',
    img: m2,
    category: 'Lunch',
    price: 54,
    oldPrice: 56,
  },
  {
    id: uuidv4(),
    rating: 4,
    reviews: 5,
    title: ' Bras Pork Chops',
    img: m5,
    category: 'Lunch',
    price: 54,
    oldPrice: 56,
  },
  {
    id: uuidv4(),
    rating: 4.5,
    reviews: 7,
    title: ' Bras Pork Chops',
    img: m3,
    category: 'Dinner',
    price: 54,
    oldPrice: 56,
  },
  {
    id: uuidv4(),
    rating: 4,
    reviews: 2,
    title: ' Bras Pork Chops',
    img: m4,
    category: 'Dinner',
    price: 54,
    oldPrice: 56,
  },
];
export default MenuData;
