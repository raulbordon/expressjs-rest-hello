const { createConnection } = require("typeorm");
const User = require("./models/User");
const People = require("./models/People");
const Planet = require("./models/Planet");
const Favorite = require("./models/Favorite");

const connectDB = async () => {
  await createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "miusuario",
    password: "mipassword",
    database: "starwars_blog",
    ssl: false,
    synchronize: true,
    entities: [User, People, Planet, Favorite],
  });
};

module.exports = connectDB;
