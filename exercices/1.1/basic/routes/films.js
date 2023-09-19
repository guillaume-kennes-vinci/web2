var express = require('express');
var router = express.Router();

const MENU = [
  {
    id: 1,
    title: 'Oppenheimer',
    duration: '180',
    budget: '100',
    link: 'https://www.rottentomatoes.com/m/oppenheimer_2023',
  },
  {
    id: 2,
    title: 'The Batman',
    duration: '176',
    budget: '185',
    link: 'https://www.rottentomatoes.com/m/the_batman',  
  },
  {
    id: 3,
    title: 'Star Wars III',
    duration: '140',
    budget: '113',
    link: 'https://www.rottentomatoes.com/m/star_wars_episode_iii_revenge_of_the_sith',
    },
];

// Read all the pizzas from the menu
router.get('/', (req, res, next) => {
  console.log('GET /films');
  res.json(MENU);
});

module.exports = router;
