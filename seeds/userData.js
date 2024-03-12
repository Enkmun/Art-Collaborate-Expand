const { User } = require('../models'); 

const userData = 
[
    {
        username: "jackblack",
        email: "Jack_Black95@yahoo.com",
        password: "BBK!ng5767"
        
    },
    {
        username: "annastewart",
        email: "AnnaStewart938@hotmail.com",
        password: "Sol@rtree50"
        
    },
    {
        username: "maxjenkins",
        email: "M.J.1985@hotmail.com",
        password: "HotSh0t5006"
    },
    {
        username: "amandasanders",
        email: "Amanda.S@gmail.com",
        password: "YoYom4m400"
    },
    {
        username: "loristevens",
        email: "LoriSavesTheDay@gmail.com",
        password: "Prince$$Peaches1"
    },
    {
        username: "sandramalcomb",
        email: "SandieMal94@yahoo.com",
        password: "M@dmax1984"
    },
    {
        username: "thomaspreston",
        email: "tompres1001@gmail.com",
        password: "SaveDaFrogz7"
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;