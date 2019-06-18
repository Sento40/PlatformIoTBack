// Mongodb Models
import User  from '../../models/Users';
import Device from '../../models/Devices';

export default {

    // User
    async me(_, args, context, info){
        if (!context.user) throw new Error("Es necesario autenticarse");

        return User
            .findById(context.user._id)
            .then(user => {
                console.log( user.toObject() )
                return user.toObject() 
            })
            .catch(err => { throw err; })
    },

    async allUsers(_, args, context, info){
        return User.find().populate('devices')
    },

    //Device
    async oneDevice(_,{id}, context, info) {
        return await Device.findById(id);
    },

    async allDevice(){
        return await Device.find();
    }
/* 
    // Movie
    async oneMovie(_, { id }, context, info) {
        return await Movie.findById(id);
    },

    async allMovies() {
        return await Movie.find();
    }, */
}