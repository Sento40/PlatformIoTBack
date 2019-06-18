//Imports: Graphql
import { gql } from 'apollo-server-express';

//GraphQL: typeDefs
const TYPEDEFS = gql`
    scalar ObjectID
#TYPES
    type AuthToken {
        token:String
    }

    type Users {
        _id: ObjectID!
        userName:String!
        email:String!
        password:String!
        fullname:String
        city:String
        country:String
        phone:String
        photoProfile:String
        company:String
        lastConnection:String
        devices:[Device]
        #dataBuckets:[Buckets]
        #dashboards:[Dashboards]
        is_active:Boolean
    }

    type Device {
        _id: ObjectID!,
        name:String!
        sigfox:String!
        lastSend:String
        messages:[String]
    }

#INPUTS
    input UserInput {
        userName:String!
        email:String!
        password:String!
        fullname:String
        city:String
        country:String
        phone:String
        photoProfile:String
        company:String
        lastConnection:String
        devices:[DeviceInput]
        #dataBuckets:[Buckets]
        #dashboards:[Dashboards]
        is_active:Boolean
    }

    input DeviceInput {
        name:String!
        sigfox:String!
        lastSend:String
        messages:[String]
    }

    type Query {
        # User
        me: Users
        allUsers:[Users]

        #Device
        oneDevice(id: ObjectID): Device
        allDevice: [Device]
    }

    type Mutation {
        #Uers
        singup(data: UserInput!):Users
        login(email:String!,password:String!):AuthToken
        agregateDevMe(id:String!, device:String!):Users
        removeDevMe(id:String!, device:String!):Users

        #Device
        createDevice(input: DeviceInput!): Device
    }

    type Subscription {
        userAdded: Users

        deviceAdded: Device
    }
`;

export default TYPEDEFS;
