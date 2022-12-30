import Jwt from 'jsonwebtoken';
import User from '../models/User';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    // Verificando se esse email existe
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Úsuario não existe.' });
    }

    // Verificando se a senha não bate
    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Úsuario não existe.' });
    }

    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: Jwt.sign({ id }, 'bd7e86896a93e6a4074d5fbb8d330d00', {
        expiresIn: '7d',
      }),
    });
  }
}

export default new SessionController();
