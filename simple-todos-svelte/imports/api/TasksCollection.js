import { Mongo } from 'meteor/mongo';

// Create a new Mongo collection
export const TasksCollection = new Mongo.Collection('tasks');