import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BucketsSchema = new Schema({
    bucketid:{
        type: String,
        required: true,
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type: String
    },
    storageData:{
        type: Boolean,
        default: false
    },
    dataSource:{
        type: String
    }
},{'collection':'Buckets', 'timestamps':true})

export default mongoose.model('Buckets', BucketsSchema);