import Akita from '../assets/Akita.jpg';
import Alaskan from '../assets/Alaskan.jpg';
import Affenpinscher from '../assets/Affenpinscher.jpg';
import Beagle from '../assets/Beagle.jpg';
import Bichon from '../assets/Bichon.jpg';
import Bloodhound from '../assets/Bloodhound.jpg';
import { type Doggy } from '../types/index';

// array of objects iterating data
export const doggies: Doggy[] = [
  {
    id: 1,
    name: 'Akita',
    trait: 'So Sweet',
    image: Akita,
  },
  {
    id: 2,
    name: 'Alaskan',
    trait: 'Very good boi',
    image: Alaskan,
  },

  {
    id: 3,
    name: 'Affenpinscher',
    trait: 'Enjoys naps',
    image: Affenpinscher,
  },

  {
    id: 4,
    name: 'Beagle',
    trait: 'Loves cheese',
    image: Beagle,
  },
  {
    id: 5,
    name: 'Bichon',
    trait: 'Ready to save the world',
    image: Bichon,
  },

  {
    id: 6,
    name: 'Bloodhound',
    trait: 'Ready for anything',
    image: Bloodhound,
  },
];
