import { ObjectID } from 'bson';
import Mongoose from 'mongoose';

const characterSchema = new Mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: true,
  },
  class: {
    type: ObjectID,
    ref: '',
    required: true,
  },
  race: {
    type: ObjectID,
    ref: '',
    required: true,
  },
  level: {
    type: Number,
    default: 1,
    required: true,
  },
  size: {
    type: String,
    default: "Medium",
    required: true,
  },
  alignment: {
    type: String,
    default: "Neutral Good",
    required: true,
  },
  background: {
    type: String,
    default: "Commoner",
    required: true,
  },
  owner: {
    type: ObjectID,
    ref: '',
    required: true,
  },
});

const character = Mongoose.model("character", characterSchema);

export default character;