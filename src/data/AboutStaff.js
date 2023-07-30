import { v4 as uuidv4 } from 'uuid';
import s1 from '../assets/staff_1.jpg';
import s2 from '../assets/staff_2.jpg';
import s3 from '../assets/staff_3.jpg';
import s4 from '../assets/staff_4.jpg';
import s5 from '../assets/staff_5.jpg';

const AboutStaff = [
  {
    id: uuidv4(),
    img: s1,
    name: 'Jone De',
    title: 'Chef',
  },
  {
    id: uuidv4(),
    img: s2,
    name: 'Pablo Hemels',
    title: 'Chef',
  },
  {
    id: uuidv4(),
    img: s3,
    name: 'Maria Lopez',
    title: 'Chef',
  },
  {
    id: uuidv4(),
    img: s4,
    name: 'Pablo Hemels',
    title: 'Chef',
  },
  {
    id: uuidv4(),
    img: s5,
    name: 'Maria Lopez',
    title: 'Chef',
  },
];

export default AboutStaff;
