import jwt from 'jsonwebtoken';
require('dotenv').config()

module.exports = (user) => {
    const payload = {
        id:user._id,
        emial: user.emial,
        fullname:user.fullname
    }
    let token = jwt.sign(payload, process.env.JWT_SECRET); 
    console.log(token)
    return token
}