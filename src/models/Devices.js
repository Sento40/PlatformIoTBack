import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const DeviceSchema = new Schema({
    name:{
        type: String,
        unique: true,
        required: true
    },
    sigfox:{
        type: String,
        unique: true,
        required: true
    },
    lastSend:{
        type: Date,
        default: new Date()
    },
    messages:[{
       type: String
    }]

},{'collection':'Devices', 'timestamps':true});

export default mongoose.model('Devices', DeviceSchema);