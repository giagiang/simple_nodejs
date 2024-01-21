import mongoose from "mongoose";
const Schema = mongoose.Schema;
import slug from "mongoose-slug-generator";
import mongooseDelete from "mongoose-delete";

const Course = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    videoId: { type: String, required: true },
    level: { type: String },
    slug: { type: String, slug: "name", unique: true },
  },
  { timestamps: true }
);

//add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { deletedAt: true,
  overrideMethods: 'all', });

export default mongoose.model("Course", Course);
