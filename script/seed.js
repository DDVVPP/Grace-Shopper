'use strict';

const db = require('../server/db');
const { User, Wig } = require('../server/db/models');
const { green, red } = require('chalk');
const faker = require('faker');

//creates an array to seed the database with faker data for users
let usersArr = [];
for (let i = 1; i < 101; i++) {
  let newUser = {
    email: faker.internet.email(),
    password: faker.internet.password(),
    salt: faker.lorem.word(),
    googleId: faker.name.firstName(),
    isAdmid: false
  };
  usersArr.push(newUser);
}

//creates an array to seed the databse with faker data for wigs
// let wigsArr = [];
// for (let i = 1; i < 51; i++) {
//   let newWig = {
//     name: `The ${faker.address.city()}`,
//     image: faker.image.imageUrl(),
//     price: faker.random.number(),
//     quantity: 25,
//     description: faker.name.jobDescriptor(),
//     length: 'medium',
//     material: 'human',
//     color: 'brown'
//   };
//   wigsArr.push(newWig);
// }

async function seed() {
  await db.sync({ force: true });
  console.log(green('db synced!'));

  const users = await Promise.all(
    usersArr.map(user => {
      return User.create(user);
    })
  );

  // const wigs = await Promise.all(
  //   wigsArr.map(wig => {
  //     return Wig.create(wig);
  //   })
  // );

  const wigs = await Promise.all([
    Wig.create({
      name: 'East Raphaelle',
      price: 30000,
      quantity: 40,
      description: 'test test test',
      length: 'short',
      material: 'synthetic',
      color: 'alternative',
      image: '/ali-pazani-8JY52A_9hiE-unsplash.png',
      featured: true
    }),
    Wig.create({
      name: 'Lake Daphnee',
      price: 25000,
      quantity: 40,
      description: 'test test test',
      length: 'short',
      material: 'synthetic',
      color: 'blonde',
      image: '/davidcohen-MoA_jgeZdz4-unsplash.png',
      featured: false
    }),
    Wig.create({
      name: 'Michaelton',
      price: 24500,
      quantity: 40,
      description: 'test test test',
      length: 'short',
      material: 'synthetic',
      color: 'alternative',
      image: '/wig-693688_1920.png',
      featured: false
    }),
    Wig.create({
      name: 'Maximilliaside',
      price: 31000,
      quantity: 40,
      description: 'test test test',
      length: 'short',
      material: 'synthetic',
      color: 'black',
      image: '/christian-soler-AP9uBRhyZ7E-unsplash.png',
      featured: true
    }),
    Wig.create({
      name: 'Heidenreichtown',
      price: 21000,
      quantity: 40,
      description: 'test test test',
      length: 'short',
      material: 'synthetic',
      color: 'blonde',
      image: '/justin-essah-t8_KgUw9d1o-unsplash.png',
      featured: false
    }),
    Wig.create({
      name: 'Jasmin',
      price: 35000,
      quantity: 40,
      description: 'test test test',
      length: 'short',
      material: 'synthetic',
      color: 'alternative',
      image: '/mike-lloyd-dLEvAKrZeyk-unsplash.png',
      featured: false
    }),
    Wig.create({
      name: 'New Waino',
      price: 22000,
      quantity: 40,
      description: 'test test test',
      length: 'short',
      material: 'synthetic',
      color: 'alternative',
      image: '/ronny-sison-axDmBtDyV18-unsplash.png',
      featured: false
    }),
    Wig.create({
      name: 'Deangelofort',
      price: 25000,
      quantity: 40,
      description: 'test test test',
      length: 'short',
      material: 'synthetic',
      color: 'alternative',
      image: '/chan-tw7btb8vfrk-unsplash.png',
      featured: true
    }),
    Wig.create({
      name: 'Euna',
      price: 31000,
      quantity: 40,
      description: 'test test test',
      length: 'medium',
      material: 'synthetic',
      color: 'alternative',
      image: '/luis-quintero-3y5Xdo91S2k-unsplash.png',
      featured: false
    }),
    Wig.create({
      name: 'Raphaelle',
      price: 28800,
      quantity: 40,
      description: 'test test test',
      length: 'medium',
      material: 'synthetic',
      color: 'alternative',
      image: '/yns-plt-dMwxvojKy9M-unsplash.png',
      featured: false
    }),
    Wig.create({
      name: 'Sammieton',
      price: 37500,
      quantity: 40,
      description: 'test test test',
      length: 'medium',
      material: 'synthetic',
      color: 'blonde',
      image: '/nikita-belov-1s5Z6_LsnNg-unsplash.png',
      featured: false
    }),
    Wig.create({
      name: 'Kobytown',
      price: 24500,
      quantity: 40,
      description: 'test test test',
      length: 'medium',
      material: 'synthetic',
      color: 'alternative',
      image: '/luis-quintero-gTOfWL7prYA-unsplash.png',
      featured: false
    }),
    Wig.create({
      name: 'Caylashire',
      price: 21000,
      quantity: 40,
      description: 'test test test',
      length: 'medium',
      material: 'synthetic',
      color: 'black',
      image: '/ali-pazani-Rr8uxTw1nkA-unsplash.png',
      featured: true
    }),
    Wig.create({
      name: 'North',
      price: 25000,
      quantity: 40,
      description: 'test test test',
      length: 'medium',
      material: 'synthetic',
      color: 'alternative',
      image: '/pawel-szvmanski-Gzgcau5YSgI-unsplash.png',
      featured: false
    }),
    Wig.create({
      name: 'Khalil',
      price: 35000,
      quantity: 40,
      description: 'test test test',
      length: 'medium',
      material: 'synthetic',
      color: 'alternative',
      image: '/jessica-dabrowski-TETR8YLSqt4-unsplash.png',
      featured: false
    }),
    Wig.create({
      name: 'Vokmanfort',
      price: 38000,
      quantity: 40,
      description: 'test test test',
      length: 'medium',
      material: 'synthetic',
      color: 'blonde',
      image: '/jon-sailer-i_MGY04myhk-unsplash.png',
      featured: false
    }),
    Wig.create({
      name: 'Alessia',
      price: 28000,
      quantity: 40,
      description: 'test test test',
      length: 'long',
      material: 'synthetic',
      color: 'blonde',
      image: '/sharon-mccutcheon-ORCPTrkkezw-unsplash.png',
      featured: false
    }),
    Wig.create({
      name: 'Tyrellview',
      price: 22000,
      quantity: 40,
      description: 'test test test',
      length: 'long',
      material: 'synthetic',
      color: 'alternative',
      image: '/girl-1037995_1920.png',
      featured: true
    }),
    Wig.create({
      name: 'Bergstromberg',
      price: 20000,
      quantity: 40,
      description: 'test test test',
      length: 'long',
      material: 'synthetic',
      color: 'brown',
      image: '/clem-onojeghuo-axoIDVk0ThE-unsplash.png',
      featured: false
    }),
    Wig.create({
      name: 'East Monty',
      price: 31000,
      quantity: 40,
      description: 'test test test',
      length: 'long',
      material: 'synthetic',
      color: 'blonde',
      image: '/cristina-gottardi-QZgm1hjuHSg-unsplash.png',
      featured: false
    }),
    Wig.create({
      name: 'Kamryn',
      price: 28800,
      quantity: 40,
      description: 'test test test',
      length: 'long',
      material: 'synthetic',
      color: 'gray',
      image: '/valeriia-kogan-PD2RYMtsGhc-unsplash.png',
      featured: false
    }),
    Wig.create({
      name: 'Klingbury',
      price: 40000,
      quantity: 40,
      description: 'test test test',
      length: 'long',
      material: 'synthetic',
      color: 'blonde',
      image: '/enzo-tommasi-62yUsl95gyY-unsplash.png',
      featured: false
    }),
    Wig.create({
      name: 'Amaraberg',
      price: 39000,
      quantity: 40,
      description: 'test test test',
      length: 'long',
      material: 'synthetic',
      color: 'alternative',
      image: '/david-4GUr6gyLG1Q-unsplash.png',
      featured: false
    }),
    Wig.create({
      name: 'East Grayson',
      price: 27500,
      quantity: 40,
      description: 'test test test',
      length: 'long',
      material: 'synthetic',
      color: 'alternative',
      image: '/awp-XrJ9mZd3P-g-unsplash.png',
      featured: false
    })
  ]);
  console.log(green(`seeded ${users.length} users`));
  console.log(green(`seeded ${wigs.length} wigs`));

  console.log(green(`seeded successfully`));
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(red('Oh noes! That was weird...'));
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
