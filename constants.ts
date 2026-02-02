import { Player, Trophy } from './types';

export const COLORS = {
  blue: '#004D98',
  red: '#A50044',
  gold: '#EDBB00',
  dark: '#050510'
};

export const SQUAD_DATA: Player[] = [
  {
    id: 1,
    name: "Robert Lewandowski",
    number: 9,
    position: "Forward",
    image: "https://picsum.photos/400/600?random=1",
    stats: { pace: 78, shooting: 91, passing: 79, dribbling: 86 }
  },
  {
    id: 2,
    name: "Pedri",
    number: 8,
    position: "Midfielder",
    image: "https://picsum.photos/400/600?random=2",
    stats: { pace: 79, shooting: 75, passing: 88, dribbling: 90 }
  },
  {
    id: 3,
    name: "Lamine Yamal",
    number: 19,
    position: "Winger",
    image: "https://picsum.photos/400/600?random=3",
    stats: { pace: 89, shooting: 82, passing: 84, dribbling: 93 }
  },
  {
    id: 4,
    name: "Gavi",
    number: 6,
    position: "Midfielder",
    image: "https://picsum.photos/400/600?random=4",
    stats: { pace: 80, shooting: 72, passing: 83, dribbling: 85 }
  },
  {
    id: 5,
    name: "Marc-André ter Stegen",
    number: 1,
    position: "Goalkeeper",
    image: "https://picsum.photos/400/600?random=5",
    stats: { pace: 45, shooting: 10, passing: 88, dribbling: 50 }
  },
  {
    id: 6,
    name: "Ronald Araújo",
    number: 4,
    position: "Defender",
    image: "https://picsum.photos/400/600?random=6",
    stats: { pace: 85, shooting: 50, passing: 70, dribbling: 65 }
  }
];

export const TROPHIES: Trophy[] = [
  {
    id: 1,
    name: "Champions League",
    count: 5,
    year: "2015",
    description: "The most prestigious club competition in European football."
  },
  {
    id: 2,
    name: "La Liga",
    count: 27,
    year: "2023",
    description: "The top professional football division of the Spanish football league system."
  },
  {
    id: 3,
    name: "Copa del Rey",
    count: 31,
    year: "2021",
    description: "An annual knockout football competition in Spanish football."
  },
  {
    id: 4,
    name: "FIFA Club World Cup",
    count: 3,
    year: "2015",
    description: "International men's association football competition."
  }
];