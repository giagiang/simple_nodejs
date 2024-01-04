import mongoose from "mongoose";
async function connect(){
    try{
         await mongoose.connect('mongodb://localhost:27017/node_simple')
         console.log('connect succesfully!!!');
    }
    catch(error){
        console.log('connect failure!!!')
    }
}
export default {connect};