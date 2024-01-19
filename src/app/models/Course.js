import mongoose from "mongoose";
const Schema = mongoose.Schema;
import slug from "mongoose-slug-generator";

// 1.phien ban. cu hay moi
// 2 cu phap phap tuong thich voi mongoose ban moi nhat
// 3 neuy khong tuong thich tim 1 cai thay the
// 4. neu khong co cai thay the thi code chay co duoc khong. neu duoc dung 1 ham thay the


mongoose.plugin(slug);

const Course = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    videoId: { type: String, required: true },
    level: { type: String },
    // slug: { type: String, slug: "name", unique: true },

  },
  { timestamps: true }
);
export default mongoose.model("Course", Course);
