const { Sequelize, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

// Inisialisasi koneksi SQLite
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: process.env.DB_STORAGE || ".././users.db", // Lokasi file database
  logging: false, // Nonaktifkan logging SQL untuk kenyamanan
});

// Definisi model User
const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: "Name cannot be empty" },
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: { msg: "Must be a valid email address" },
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: { args: [8, 255], msg: "Password must be at least 8 characters long" },
    },
  },
});

// Hook untuk hashing password sebelum menyimpan ke database
User.beforeCreate(async (user) => {
  if (user.password) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
  }
});

// Definisi model Story
const Story = sequelize.define("Story", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    defaultValue: () => `story-${Math.random().toString(36).substr(2, 9)}`, // Generate ID unik
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: "Name cannot be empty" },
    },
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true, // Deskripsi opsional
  },
  photoUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isUrl: { msg: "Must be a valid URL" },
    },
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
  lat: {
    type: DataTypes.FLOAT,
    allowNull: true, // Lokasi opsional
  },
  lon: {
    type: DataTypes.FLOAT,
    allowNull: true, // Lokasi opsional
  },
});



// Sinkronisasi model dengan database
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully!");
    await sequelize.sync({ alter: true }); // Alter untuk memperbarui tabel tanpa kehilangan data
    console.log("Database & tables created/updated!");
  } catch (err) {
    console.error("Error initializing database:", err);
  }
})();

module.exports = { sequelize, User, Story };
