let users = []; // Simpan data user sementara (gunakan database di produksi)

const regisController = (req, res) => {
  const { name_user, email_user, password_user } = req.body;

  // Validasi input
  if (!name_user || !email_user || !password_user) {
    return res.status(400).json({
      error: true,
      message: "All fields are required (name, email, password).",
    });
  }

  // Validasi panjang password
  if (password_user.length < 8) {
    return res.status(400).json({
      error: true,
      message: "Invalid input. Password must be at least 8 characters.",
    });
  }

  // Validasi email unik
  const existingUser = users.find((user) => user.email_user === email_user);
  if (existingUser) {
    return res.status(409).json({
      error: true,
      message: "Email already exists.",
    });
  }

  // Tambahkan pengguna baru ke database (sementara array)
  const newUser = { name_user, email_user, password_user };
  users.push(newUser);

  return res.status(201).json({
    error: false,
    message: "User Created",
  });
};

module.exports = regisController;
