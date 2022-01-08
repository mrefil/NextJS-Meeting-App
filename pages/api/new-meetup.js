import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    // const { title, image, address, description } = data;
    
    //mongo db connection
    const client = await MongoClient.connect("mongodb+srv://testUser:testUser123456@cluster0.agazq.mongodb.net/meetups?retryWrites=true&w=majority");
    const db = client.db();

    const meetupsCollection = db.collection('meetups'); 
    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({message: 'Successfully submitted!'});
  }
}

export default handler;
