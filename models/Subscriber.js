import mongoose from "mongoose";

const SubscriberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true }, // Unique email
  phone: { type: String, required: true, unique: true }, // Unique phone
  school: { type: String, required: true },
  faculty: { type: String, required: true },
  grade: { type: String, required: true },
  more: { type: String, required: true },
});

export default mongoose.models.Subscriber ||
  mongoose.model("Subscriber", SubscriberSchema);
