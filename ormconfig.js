{
  "type";  "postgres",
  "host"; "localhost",
  "port"; 5432,
  "username"; "miusuario",
  "password"; "mipassword",
  "database"; "starwars_blog",
  "synchronize"; false,
  "logging"; false,
  "entities"; ["src/models/**/*.ts"],
  "migrations"; ["src/migrations/**/*.ts"],
  "cli"; {
    "entitiesDir"; "src/models",
    "migrationsDir"; "src/migrations"
  }
}
