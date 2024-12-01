'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert ( 'Movies', [
      {
        id: 1,
        "title": "Hotel Transylvania 3 : Summer Vacation",
        "director": "Gandy Tartakovsky",
        "release_year": 2018,
        "genre": "Sci-Fi",
        "rating": 8.8,
        "img" : "/images/hotel.webp",
        "details" : "A sleuthing, supernaturally infused mystery charting Wednesday Addams' years as a student at Nevermore Academy. Wednesday's attempts to master her emerging ..." ,
        "link" : "https://www.youtube.com/watch?v=Ku52zNnft8k"
      },
      {
        id: 2,
        "title": "Ratatouille",
        "director": "berd",
        "release_year": 2007,
        "genre": "carton",
        "rating": 9.2,
        "img" : "/images/rata.webp",
        "details" : "Set mostly in Paris, the plot follows a young rat Remy (Oswalt) who dreams of becoming a chef at Auguste Gusteau's (Garrett) restaurant.",
        "link" : "https://www.youtube.com/watch?v=1LRKWIOJHDs"
      },
      {
        id: 3,
        "title": "Joker",
        "director": "tad flips",
        "release_year": 2019,
        "genre": "Thriller",
        "rating": 8.6,
        "img" : "/images/joker.webp",
        "details" : "Arthur Fleck, a party clown and a failed stand-up comedian, leads an impoverished life with his ailing mother. However, when society shuns him and brands ...",
        "link" : "https://www.youtube.com/watch?v=_OKAwz2MsJs"
      },
      {
        id: 4,
        "title": "See",
        "director": "fransis larens",
        "release_year": 2019,
        "genre": "Action",
        "rating": 9.0,
         "img" : "/images/see.webp",
         "details" : "Far in a dystopian future, the human race has lost the sense of sight, and society has had to find new ways to interact, build, hunt, and to survive.",
         "link" : ""
      },
      {
        id: 5,
        "title": "Despicable Me 2",
        "director": "pir kaflin",
        "release_year": 1994,
        "genre": "Crime",
        "rating": 8.9,
         "img" : "/images/des.webp",
         "details" : "When a new criminal comes to town, the Anti-Villain League decides to hire Gru in order to fight him off.",
         "link" : "https://www.youtube.com/watch?v=7Rg0y7NT1gU"
      },
      {
        id: 6,
        "title": "Shrek",
        "director": "Robert Zemeckis",
        "release_year": 1994,
        "genre": "Drama",
        "rating": 8.8,
        "img" : "/images/shrek.webp",
        "details" : "A mean lord exiles fairytale creatures to the swamp of a grumpy ogre, who must go on a quest and rescue a princess for the lord in order to get his land back.",
        "link" : "https://www.youtube.com/watch?v=CwXOrWvPBPk"
      },
      {
        id: 7,
        "title": "Interstellar",
        "director": "nolan",
        "release_year": 1993,
        "genre": "Biography",
        "rating": 9.0,
        "img" : "/images/inter.webp",
        "details" : "A group of explorers make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an ...",
        "link" : "https://www.youtube.com/watch?v=60h6lpnSgck"
      },
      {
        id: 8,
        "title": "Rango",
        "director": "The Wachowskis",
        "release_year": 1999,
        "genre": "Sci-Fi",
        "rating": 8.7,
         "img" : "/images/rango.webp",
         "details" : "Rango is an ordinary chameleon who accidentally winds up in the town of Dirt, a lawless outpost in the Wild West in desperate need of a new sheriff.",
         "link" : "https://www.youtube.com/watch?v=DTxUAIje5gA"
      },
      {
        id: 9,
        "title": "Wednesday",
        "director": "David Fincher",
        "release_year": 1999,
        "genre": "Drama",
        "rating": 8.8,
         "img" : "/images/wed.webp",
         "details" : "A sleuthing, supernaturally infused mystery charting Wednesday Addams' years as a student at Nevermore Academy. Wednesday's attempts to master her emerging ...",
         "link" : "https://www.youtube.com/watch?v=Di310WS8zLk"
      },
      {
        id: 10,
        "title": "Elemental",
        "director": "Frank Darabont",
        "release_year": 2020,
        "genre": "Drama",
        "rating": 9.3,
        "img" : "/images/ele.webp",
        "details" : "The film journeys alongside an unlikely pair, Ember and Wade, in a city where fire-, water-, land- and air-residents live together. The fiery young woman and ...",
        "link" : "https://www.youtube.com/watch?v=sXUnCAJMtCY"
      },
      {
        id: 11,
        "title": "Inside out",
        "director": "Frank Darabont",
        "release_year": 2020,
        "genre": "Drama",
        "rating": 9.3,
        "img" : "/images/ins.webp",
        "details" : "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best ...",
        "link" : "https://www.youtube.com/watch?v=sXUnCAJMtCY"
      },
      {
        id: 12,
        "title": "Coup",
        "director": "Frank Darabont",
        "release_year": 2020,
        "genre": "Drama",
        "rating": 9.3,
        "img" : "/images/cop.webp",
        "details" : "A mysterious grifter appears on an isolated seaside estate claiming to be a wealthy family's new chef.",
        "link" : "https://www.youtube.com/watch?v=sXUnCAJMtCY"
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
