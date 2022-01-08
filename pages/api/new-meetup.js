import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    // const { title, image, address, description } = data;
    
    //mongo db connection

    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({message: 'Successfully submitted!'});
  }
}

export default handler;
