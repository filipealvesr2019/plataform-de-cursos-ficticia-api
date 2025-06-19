const User = require('../models/User');
const jwt = require('jsonwebtoken');

const gerarToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { inspiresIn: '7d'});

exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    try{
        const usuario = new User({ name, email, password});
        await usuario.save();
        res.status(201).json({ token: gerarToken(usuario._id)})
    }catch(error){
        console.log('erro ao registrar usuario!', error);
    }

}

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try{
        const usuario = await User.findOne({ email });
        if(!usuario || !(await usuario.comparePassword(password))){
            return res.status(401).json({ erro: 'Credencials inválidas'});
        }

        res.json({ token: gerarToken(usuario._id)});
    } catch(error){
        console.log('erro ao fazer login', error)
    }
}