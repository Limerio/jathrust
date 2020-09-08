enum newType {
  new = "new",
  delete = "delete",
  start = "start",
}

enum typeProject {
  basicExpress = "basic-express",
  apiExpress = "api-express",
}

enum language {
  typescript = "ts",
  javascript = "js",
}

enum templateContentNodejs {
  ejs = "ejs",
  pug = "pug",
}

enum symbols {
  info = "ℹ",
  success = "✔",
  warning = "⚠",
  error = "✖",
}

enum database {
  mongoose = "mongoose",
  postgresql = "pg",
  redis = "redis",
  mssql = "mssql",
  mysql = "mysql",
  sqlite = "sqlite3",
  firebase_tools = "firebase-tools",
  mariadb = "mariadb",
}

const choicesDB: Array<any> = [
  { title: "Firebase tools", value: database.firebase_tools },
  { title: "MariaDB", value: database.mariadb },
  { title: "MongoDB (mongoose)", value: database.mongoose },
  { title: "MsSQL", value: database.mssql },
  { title: "MySQL", value: database.mysql },
  { title: "PostGreSQL", value: database.postgresql },
  { title: "Redis", value: database.redis },
  { title: "SQLITE", value: database.sqlite },
];

export {
  newType,
  typeProject,
  language,
  templateContentNodejs,
  symbols,
  database,
  choicesDB,
};
