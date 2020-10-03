import Mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";
let { connection, Schema } = Mongoose;
autoIncrement.initialize(connection);

const UserSchema = new Schema({
  firstName: {
    type: String,
    min: 2,
    default: "",
  },
  lastName: { type: String, default: "" },
  email: { type: String, unique: true },
  address: { type: String, default: "" },
});

UserSchema.plugin(autoIncrement.plugin, {
  startAt: 1,
  incrementBy: 1,
  model: "User",
});

export const User = Mongoose.model("User", UserSchema);
