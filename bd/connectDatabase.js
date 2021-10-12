import mongoose from 'mongoose'
const MONGO_URI = process.env.MONGO_URI

mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}).then((err) =>{
    if(err) console.log(err.models)
})

export const bd = mongoose.connection  

//export const page =  async (db) => {
    //return await db
    //.collection('contenido')
    //.find({})
    //.skip(10*req.params.page)
    //.limit(10)
    //.toArray()
    ////return val
    ////res.status(200).json(val)
//}




