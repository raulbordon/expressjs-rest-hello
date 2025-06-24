const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "People",
  tableName: "people",
  columns: {
    id: { primary: true, type: "int", generated: true },
    name: { type: "varchar" },
    height: { type: "varchar" },
    gender: { type: "varchar" },
  },
  relations: {
    favorites: {
      type: "one-to-many",
      target: "Favorite",
      inverseSide: "people",
    },
  },
});
