import jwt from 'jsonwebtoken';
import User from  '../models/Users';

module.exports = function ({ req }) {
    const Authorization = req.get('Autorization')
    if(Authorization) {
        const token = Authorization.replace('JSW ', '');
        const {id} = jwt.verify(token, process.env.JWT_SECRET);
        return User.findById(id);
    }
}