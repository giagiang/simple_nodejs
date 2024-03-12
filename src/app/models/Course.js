import mongoose from "mongoose";
const Schema = mongoose.Schema;
import slug from "mongoose-slug-generator";
// import mongooseDelete from "mongoose-delete";

const Course = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    videoId: { type: String, required: true },
    level: { type: String },
    deletedAt: { type: String, default: null  },
    // slug: { type: String, slug: "name", unique: true },
  },
  { timestamps: true }
);

//custom query helpers 
Course.query.sortable = function(req){
   
  if (req.query.hasOwnProperty("_sort")) {
    const isValidType = ['asc', 'desc'].includes(req.query.type);
    return this.sort({
    [req.query.column]: isValidType ? req.query.type : 'desc',
    });
}
return this;
 }

//add plugin
mongoose.plugin(slug);
// Course.plugin(mongooseDelete, { deletedAt: true, overrideMethods: "all" });
// CourseSchema.plugin(mongooseDelete);

export default mongoose.model("Course", Course);
