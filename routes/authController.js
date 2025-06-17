const User = require('../models/User');
const jwt = require('jsonwebtoken');

const gerarToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { inspiresIn: '7d'});

exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    try{
        const usuario = new User({ name, email, password});
    }catch(error){
        console.log(error);
    }

}