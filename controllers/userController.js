const User = require('../models/User');

exports.promoteToAdmin = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }

    user.isAdmin = true;
    await user.save();

    res.json({ message: 'Usuário promovido a administrador com sucesso.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao promover usuário a administrador.' });
  }
};
