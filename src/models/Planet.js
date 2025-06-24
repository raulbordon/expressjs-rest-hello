const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Planet",
  tableName: "planets",
  columns: {
    id: { primary: true, type: "int", generated: true },
    name: { type: "varchar" },
    population: { type: "varchar" },
    climate: { type: "varchar" },
  },
  relations: {
    favorites: {
      type: "one-to-many",
      target: "Favorite",
      inverseSide: "planet",
    },
  },
});
