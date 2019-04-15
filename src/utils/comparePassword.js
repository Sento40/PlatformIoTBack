import User from '../models/User';
import createToken from './createToekn';

module.export = (email,password) => {
    
    return new Promise((resolve,reject) => {
        User.findOne({email:email}).then(user => {
            user.comparePassword(password, (err, isMatch) => {
                if (isMatch){
                    resolve(createToken(user));
                } else {
                    reject(new Error("Las contraseñas no coiniden"));
                }
            })
        }).catch((err) => {
            reject(err)
        })
    })
}