module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  entities: ['./src/modules/**/infra/typeorm/entities/*{.ts,.js}'],
  migrations: ['./src/shared/infra/typeorm/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: './src/shared/infra/typeorm/migrations',
  },
};
