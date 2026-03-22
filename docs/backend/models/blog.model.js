const mongoose = require ("mongoose")

mongoose.connect(`mongodb://127.0.0.1:27017/portfolio`)
    .catch(err => console.error("MongoDB connection error:", err));

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    unique: true
  },
  content: {
    type: String,
    required: true
  },
  image: String
}, { timestamps: true });

module.exports = mongoose.model("Blog",blogSchema)