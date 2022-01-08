import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    // const { title, image, address, description } = data;
    
    //mongo db connection
    const connectionString = "mongodb+srv://testUser:testUser123456@cluster0.agazq.mongodb.net/meetups?retryWrites=true&w=majority";
    const client = await MongoClient.connect(connectionString);
    const db = client.db();

    const meetupsCollection = db.collection('meetups'); 
    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({message: 'Successfully submitted!'});
  }
}

export default handler;
