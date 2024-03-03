import mongoose from "mongoose";
const Schema = mongoose.Schema;
import slug from "mongoose-slug-generator";
import mongooseDelete from "mongoose-delete";

const CourseSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    videoId: { type: String, required: true },
    level: { type: String },
    deletedAt: { type: String },
    // slug: { type: String, slug: "name", unique: true },
  },
  { timestamps: true }
);

//custom query helpers 
CourseSchema.query.sortable = function(req){
   
  if (req.query.hasOwnProperty("_sort")) {
    const isValidType = ['asc', 'desc'].includes(req.query.type);
    return this.sort({
    [req.query.column]: isValidType ? req.query.type : 'desc',
    });
}
 }

//add plugin
mongoose.plugin(slug);
//Course.plugin(mongooseDelete, { deletedAt: true, overrideMethods: "all" });
CourseSchema.plugin(mongooseDelete);

export default mongoose.model("Course", CourseSchema);
