const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "User",
  tableName: "users",
  columns: {
    id: { primary: true, type: "int", generated: true },
    username: { type: "varchar" },
    email: { type: "varchar", unique: true },
  },
  relations: {
    favorites: {
      type: "one-to-many",
      target: "Favorite",
      inverseSide: "user",
    },
  },
});
