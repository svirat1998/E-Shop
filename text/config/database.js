import mongoose from "mongoose"

// const connectDatabase = () => {
//   mongoose
//     .connect(process.env.DB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
      
//     })
//     .then((data) => {
//       console.log(`Mongodb connected with server: ${data.connection.host}`);
//     });
// };

const connectDatabase = async()=>{
  try{
      await mongoose.connect(process.env.DB_URI)
     console.log(`Connected To MongoDb Database ${mongoose.connection.host}`)
  } catch (error){
    console.log(error)
  }
}

export default connectDatabase;
