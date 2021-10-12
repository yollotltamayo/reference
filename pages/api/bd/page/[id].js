import {bd} from '@bd/connectDatabase'

export default async function handler(req, res)  {
    const {id} = req.query
    let val = await bd
    .collection('contenido')
    .find({})
    .skip(5*id)
    .limit(5)
    .toArray()
    res.status(200).json(val)
}
