const { Artwork } = require('../models');

const artworkData = 
[
    {
        title: "The Leaf",
        artist_username: 'jackblack',
        description: "A photo that captures the the beauty after a storm",
        filename: "art1.jpg",
        portfolio_id: 1
    },
    {
        title: "Vibrant Flower",
        artist_username: 'amandasanders',
        description: "A flower drench in water droplets",
        filename: "art2.jpg",
        portfolio_id: 2
    },
    {
        title: "Urban Sunset",
        artist_username: 'sandramalcomb',
        description: "An urban ally set against a beautiful sunset after a storm",
        filename:"art3.jpg",
        portfolio_id: 3
    },
    {
        title: "Flower Pop",
        artist_username: 'thomaspreston',
        description:"An unfinished watercolor of flowers",
        filename:"art4.jpg",
        portfolio_id: 4
    },
    {
        title: "Greek Vacation ",
        artist_username: 'maxjenkins',
        description: "A tempera painting of the view from Santorini",
        filename: "art5.jpg",
        portfolio_id: 5
    },
    {
        title: "A view of Yosemite",
        artist_username: 'annastewart',
        description: "An unfinished arcylic painting of Yosemite National Park ",
        filename: "art6.jpg",
        portfolio_id: 6
    },
    {
        title: "Ocean views",
        artist_username: 'loristevens',
        description: "A tempera painting of an idyllic beach scene",
        filename: "art7.jpg",
        portfolio_id: 7
    },
    {
        title: "Lost in abstraction",
        artist_username: 'jackblack',
        description:"A blue and black inky pin on paper made of 3D shapes with in 3D shapes",
        filename:"art8.jpg",
        portfolio_id: 1
    },
];

const seedArtwork = () => Artwork.bulkCreate(artworkData);

module.exports = seedArtwork;