import User from '../models/Users';
import createToken from './createToekn';

module.exports = (email,password) => {
    
    return new Promise((resolve,reject) => {
        User
            .findOne({email:email})
            .then(user => {
                user
                    .comparePassword(password, (err, isMatch) => {
                        if (isMatch){
                            resolve(createToken(user));
                        } else {
                            reject(new Error("Las contraseñas no coiniden"));
                        }
                    })
            })
            .catch((err) => {
                reject(err)
            })
    })

}
