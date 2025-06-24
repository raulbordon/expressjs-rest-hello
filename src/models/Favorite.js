const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Favorite",
  tableName: "favorites",
  columns: {
    id: { primary: true, type: "int", generated: true },
  },
  relations: {
    user: {
      type: "many-to-one",
      target: "User",
      joinColumn: true,
      eager: true,
    },
    people: {
      type: "many-to-one",
      target: "People",
      joinColumn: true,
      nullable: true,
      eager: true,
    },
    planet: {
      type: "many-to-one",
      target: "Planet",
      joinColumn: true,
      nullable: true,
      eager: true,
    },
  },
});
