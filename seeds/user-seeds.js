const { User } = require('../models');

const userData = [{
        username: 'John',
        password: 'john'

    },
    {
        username: 'Dude',
        password: 'dude'
    },
    {
        username: 'Groovy',
        password: 'groovy'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;