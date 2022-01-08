import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    // const { title, image, address, description } = data;
    
    //mongo db connection
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clusterID}.agazq.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
    const client = await MongoClient.connect(connectionString);
    const db = client.db();

    const meetupsCollection = db.collection(process.env.mongodb_database); 
    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({message: 'Successfully submitted!'});
  }
}

export default handler;
