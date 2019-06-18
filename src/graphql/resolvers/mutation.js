import Users from '../../models/Users';
import Device from '../../models/Devices';

//Utilities
import createToken from '../../utils/createToekn';
import comparePasswords from '../../utils/comparePassword';

//Suscriptions
import pubsub from '../pubsub';

let dev = []

export default {
    // User
    async singup(_, args, context, info){
        return await Users.create(args.data).then(user => {
            pubsub.publish('userAdded', {userAdded: user})
            let token = createToken(user)
            console.log(token)
            return user;
        }).catch(err => {
            throw new Error(err)
        })
    },

    async login(_, args, context, info){
        console.log(args)
        return await comparePasswords(args.email, args.password)
            .then(token => { return { token } })
            .catch(err => { throw err })
    },

    async agregateDevMe(_, args, context, info){
        console.log(args)
        return await Users.findByIdAndUpdate(args.id, {$push:{devices: args.device}}).then(user => {
            console.log(user)
            return user
        }).catch(err => {
            throw err
        })
    },

    async removeDevMe(_, args, context, info){
        console.log(args)
        return await Users.findByIdAndUpdate(args.id, {$pull:{devices: args.device}}).then(user => {
            console.log(user)
            return user
        }).catch(err => {
            throw err
        })
    },

    async createDevice(_, {input}, context){
        console.log(context)
        //if(!context.user)
        return await Device
            .create(input)
            .then(device => {
                console.log(device)
                pubsub.publish('deviceAdded', {deviceAdded: device})
                return device
            }).catch(err => { throw err })
    },

}