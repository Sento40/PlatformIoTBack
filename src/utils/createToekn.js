import jsw from 'jsonwebtoken';

module.exports = (user, remember) => {
    if(remember === true){
        const payload = {
            id:user._id,
            emial: user.emial,
            fullname:user.fullname
        }
        return jwt.sing(payload, process.env.JWT_SECRET);
    }else{
        const payload = {
            id:user._id,
            emial: user.emial,
            fullname:user.fullname
        }
        return jwt.sing(payload, process.env.JWT_SECRET,{ expiresIn: '1d' });
    }
    
}