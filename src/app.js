const mongodb=require('mongodb')
const MongoClient=mongodb.MongoClient
const Url='mongodb://127.0.0.1:27017'
MongoClient.connect(Url,(error,client)=>{
  if(error){
    console.log('Unable to connect')
  }
  console.log('Connected...')
  const db=client.db('Task1')
//////////////////////////////////////////////
  db.collection('task').insertOne({
    name:'mahmoud',
    age:20
  },(error,result)=>{
    if(error){
      return console.log('Unable to insert')
    }
    console.log(result.insertedId)
  })
  db.collection('task').insertOne({
    name:'ahmed',
    age:22
  },(error,result)=>{
    if(error){
      return console.log('Unable to insert')
    }
    console.log(result.insertedId)
  })
///////////////////////////////////////////
db.collection('task').insertMany(
  [
    {
      name: "mahmoud",
      age: 27,
    },
    {
      name: "adel",
      age: 27,
    },
    {
      name: "reem",
      age: 27,
    },
    {
      name: "tasneem",
      age: 27,
    },
    {
      name: "zaki",
      age: 27,
    },
    {
      name: "esraa",
      age: 24,
    },
    {
      name: "shika",
      age: 24,
    },
    {
      name: "mahmoud",
      age: 24,
    },
    {
      name: "aya",
      age: 25,
    },
    {
      name: "ali",
      age: 25,
    },
  ],(error, data) => {
    if (error) {
      console.log("unable to insert");
    }
    console.log(data.insertedCount);
  }
)
////////////////////////////////////////
db.collection('task').find({age:27}).toArray((error,data)=>{
  if(error){
    return console.log('Unable to find')
  }
  console.log(data)
})
//////////////////////////////////////////
db.collection('task').find({age:27}).limit(3).toArray((error,data)=>{
  if(error){
    return console.log('Unable to find')
  }
  console.log(data)
})
////////////////////////////////////////
db.collection('task').updateOne({_id:mongodb.ObjectId("66b0f61e17d01a02c828d9af")},{
  $set:{name:'ibrahim'},
  $inc:{age:4} 
}).then((result)=>{
  console.log(result.modifiedCount)
}).catch((error)=>{
  console.log(error)
})
db.collection('task').updateOne({_id:mongodb.ObjectId("66b0f61e17d01a02c828d9b0")},{
  $set:{name:'islam'},
  $inc:{age:4} 
}).then((result)=>{
  console.log(result.modifiedCount)
}).catch((error)=>{
  console.log(error)
})
db.collection('task').updateOne({_id:mongodb.ObjectId("66b0f61e17d01a02c828d9b1")},{
  $set:{name:'samy'},
  $inc:{age:4} 
}).then((result)=>{
  console.log(result.modifiedCount)
}).catch((error)=>{
  console.log(error)
})
db.collection('task').updateOne({_id:mongodb.ObjectId("66b0f61e17d01a02c828d9b2")},{
  $set:{name:'zizo'},
  $inc:{age:4} 
}).then((result)=>{
  console.log(result.modifiedCount)
}).catch((error)=>{
  console.log(error)
})
///////////////////////////////////////////////////////
db.collection('task').updateMany({age:31},{
  $inc:{age:10}
}).then((result)=>{
  console.log(result.modifiedCount)
}).catch((error)=>{
  console.log(error)
})
////////////////////////////////////////////////////////
db.collection('task').deleteMany({age:41})
  .then((data1)=>{console.log(data1.deletedCount)})
  .catch((error)=>{console.log(error)})
})