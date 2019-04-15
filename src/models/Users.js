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
         ref: Devices
     }],
     dataBuckets:[{
         type:Schema.Types.ObjectId,
         ref: Buckets
     }],
     dashboards:[{
         type: Schema.Types.ObjectId,
         ref: Dashboards
     }],
     is_active:{
        type: Boolean,
        default: false
     }
}, { 'collection': 'Users', 'timestamps':true });

export default mongoose.model('Users', UsersSchema);