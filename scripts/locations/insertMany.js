db.locations.insertMany([
  // MongoDB adds the _id field with an ObjectId if _id is not present
  {
    location: 'Tanzania',
    description: 'It is a sovereign state in eastern Africa within the African Great Lakes region. It borders Kenya and Uganda to the north; Rwanda, Burundi, and the Democratic Republic of the Congo to the west; Zambia, Malawi, and Mozambique to the south; and the Indian Ocean to the east. Mount Kilimanjaro, Africa\'s highest mountain, is in north-eastern Tanzania.'
  },
  {
    location: 'Antartica',
    description: 'It contains the geographic South Pole and is situated in the Antarctic region of the Southern Hemisphere, almost entirely south of the Antarctic Circle, and is surrounded by the Southern Ocean. At 14,000,000 square kilometres (5,400,000 square miles), it is the fifth-largest continent.'
  },
  {
    location: 'Peru',
    description: 'officially the Republic of Peru (Spanish: About this sound República del Perú (help·info)), is a country in western South America. It is bordered in the north by Ecuador and Colombia, in the east by Brazil, in the southeast by Bolivia, in the south by Chile, and in the west by the Pacific Ocean. Peru is an extremely biodiverse country with habitats ranging from the arid plains of the Pacific coastal region in the west to the peaks of the Andes mountains vertically extending from the north to the southeast of the country to the tropical Amazon Basin rainforest in the east with the Amazon river.'
  },
  {
    location: 'Galapagos Islands',
    description: '(official name: Archipiélago de Colón, other Spanish name: Las Islas Galápagos, Spanish pronunciation: [las ˈiʱla ɣaˈlapaɣo]), part of the Republic of Ecuador, are an archipelago of volcanic islands distributed on either side of the equator in the Pacific Ocean surrounding the centre of the Western Hemisphere, 906 km (563 mi) west of continental Ecuador. The islands are known for their vast number of endemic species and were studied by Charles Darwin during the second voyage of HMS Beagle. His observations and collections contributed to the inception of Darwin\'s theory of evolution by means of natural selection.'
  },
  {
    location: 'Paris',
    description: 'the capital and most populous city of France, with an area of 105 square kilometres (41 square miles) and a population of 2,206,488.[5][6] Since the 17th century, Paris has been one of Europe\'s major centres of finance, commerce, fashion, science, music, and painting. The Paris Region had a GDP of €681 billion (US$850 billion) in 2016, accounting for 31 per cent of the GDP of France.[7] In 2013–2014, the Paris Region had the third-highest GDP in the world and the largest regional GDP in the EU. According to the Economist Intelligence Unit Worldwide Cost of Living Survey in 2018, Paris was the second-most expensive city in the world, behind Singapore and ahead of Zurich, Hong Kong, Oslo and Geneva.[8]'
  }
])

db.locations.insertMany([{
    location: 'Alabama',
    description: ''
  }, {
    location: 'New Orleans',
    description: ''
  }, {
    location: 'Tennesee',
    description: ''
  }, {
    location: 'Paris',
    description: ''
  }, {
    location: 'Antartica',
    description: ''
  }, {
    location: 'Tanzania',
    description: ''
  }

])