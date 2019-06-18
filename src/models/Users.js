import mongoose from 'mongoose';
const Schema = mongoose.Schema;

//Password encrypt config
import bcrypt from 'bcrypt';
const SALT_WORK_FACTOR = 10;

const UsersSchema = new Schema({
     userName:{
         type:String,
         unique:true,
         required:true
     },
     email:{
        type:String,
        unique:true,
        required:true
     },
     password:{
        type:String,
        required:true
     },
     fullname:{
         type:String
     },
     city:{
         type:String
     },
     country:{
         type:String
     },
     phone:{
         type:String
     },
     photoProfile:{
         type:String
     },
     company:{
         type: String
     },
     lastConnection:{
         type: Date
     },
     devices:[{
         type: Schema.Types.ObjectId,
         ref: "Devices"
     }],
     dataBuckets:[{
         type:Schema.Types.ObjectId,
         ref: "Buckets"
     }],
     dashboards:[{
         type: Schema.Types.ObjectId,
         ref: "Dashboards"
     }],
     is_active:{
        type: Boolean,
        default: false
     }
}, { 'collection': 'Users', 'timestamps':true });

UsersSchema.pre('save', function (next) {
    let user = this

    if (!user.isModified('password')) { return next(); }

    // De lo contrario, encriptamos el password del usuarioy lo seteamos al documento (user) que se guardará
    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return next(err)
        bcrypt.hash(user.password, salt, async function (err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        })
    })
});

UsersSchema.methods.comparePassword = function (candidate, cb) {
    console.log(this.password)
    bcrypt.compare(candidate, this.password, function (err, isMatch) {
        cb(err, isMatch)
    })
}
module.exports = mongoose.model('Users', UsersSchema);