import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  description: {},
  username: { required: true },
  image: {},
  video: {},
});

export default mongoose.model('Post', postSchema);
