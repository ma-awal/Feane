import { v4 as uuidv4 } from 'uuid';
import a1 from '../assets/how_1.svg';
import a2 from '../assets/how_2.svg';
import a3 from '../assets/how_3.svg';

const AboutData = [
  {
    id: uuidv4(),
    icon: a1,
    title: 'For Every Taste',
    text: 'Faucibus ante, in porttitor tellus blandit et. Phasellus tincidunt metus lectus sollicitudin.',
  },
  {
    id: uuidv4(),
    icon: a2,
    title: 'Fresh Ingredients',
    text: 'Faucibus ante, in porttitor tellus blandit et. Phasellus tincidunt metus lectus sollicitudin.',
  },
  {
    id: uuidv4(),
    icon: a3,
    title: 'Experienced Chefs',
    text: 'Faucibus ante, in porttitor tellus blandit et. Phasellus tincidunt metus lectus sollicitudin.',
  },
];

export default AboutData;
