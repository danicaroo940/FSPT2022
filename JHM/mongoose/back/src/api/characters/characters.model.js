import { Schema, model } from "mongoose";

const { ObjectId } = Schema.Types;

const characterSchema = new Schema({
  name: {
    type: String,
    required: true,
    // unique: [ true, 'Emosido medio engañado' ],
  },
  height: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  race: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  owner: {
    type: ObjectId,
    ref: 'User',
    required: true,
  }
});

const characterModel = model('Character', characterSchema);

export default characterModel;
