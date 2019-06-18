import pubsub from '../pubsub';
import { withFilter } from 'graphql-subscriptions';
import { variablesInOperation } from 'apollo-utilities';

export default {
    userAdded: {
    subscribe: 
      () => pubsub.asyncIterator('userAdded')    
  },

  deviceAdded: {
      subscribe: 
        () => pubsub.asyncIterator('deviceAdded') 
  }
}