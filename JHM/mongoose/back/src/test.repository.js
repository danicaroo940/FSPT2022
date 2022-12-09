import { MongoClient }  from 'mongodb';
import { config } from 'dotenv';

config();

async function getConnection() {

  // ------------------------ GET ------------------------
  // db.colleccion().find({ username: 'Jona' }, { _id: false || 0, username: true || 1 });

  // ------------------------ INSERT ------------------------
  // db.collection().insertOne({ username: 'Jona', password: '1234' })
  // db.collection().insertMany([
  //   { username: 'Jona', password: '1234' },
  //   { username: 'otro Jona', password: '1234' }
  // ])

  // ------------------------ UPDATE ------------------------
  // db.collection().updateOne(
    // {username: 'Jona'},
    // {$set: {password: '4321'}},
    // {upsert: true}
  // )
  // db.collection().updateMany({username: 'Jona'}, {$set: {password: '4321'}})
  // db.collection().replaceOne(
    // {username: 'Jona'},
    // {username: 'Jonathan', password: '1234'},
    // {upsert: true}
  // )

  // ------------------------ DELETE ------------------------
  // db.collection().deleteOne({username: 'Jona'})
  // db.collection().deleteMany({username: 'Jona'})

  const url = process.env.MONGO_URL;
  const client = new MongoClient(url);
  const db = client.db('rol-game');
  // const collection = db.collection('users');
  // const user = await collection.findOne({username: 'Jona'});

  // const user = await client.db('rol-game').collection('users').findOne({username: 'Jona'});
  // console.log(user);

  const user = await db.collection('users').findOne({username: 'Jona'});
  console.log(user);
  const characters = await db.collection('characters').find({owner: user._id}).toArray();
  console.log(characters);

  const aragorn = {
    name: 'Aragorn',
    height: 1.8,
    width: 80,
    race: 'human',
    color: '???'
  };

  const legolas = {
    name: 'Legolas',
    height: 1.7,
    width: 70,
    race: 'elve',
    color: 'blonde'
  };

  const gimli = {
    name: 'Gimli',
    height: 0.7,
    width: 90,
    race: 'dwarf'
  };

  // const res1 = await db.collection('characters').insertOne(aragorn);
  const res1 = await db.collection('characters').insertOne({...aragorn});
  console.log('insertOne 1', res1);

  // delete aragorn._id;
  // const res2 = await db.collection('characters').insertOne(aragorn);
  const res2 = await db.collection('characters').insertOne({...aragorn});
  console.log('insertOne 2', res2);

  // delete aragorn._id;
  // const res3 = await db.collection('characters').insertOne(aragorn);
  const res3 = await db.collection('characters').insertOne({...aragorn});
  console.log('insertOne 3', res3);

  await db.collection('characters').deleteMany(
    { name: legolas.name }
  );

  await db.collection('characters').deleteMany(
    { name: aragorn.name }
  );

  // await db.collection('characters').insertOne(
  //   { ...legolas }
  // );

  // await db.collection('characters').updateOne(
  //   { name: legolas.name },
  //   { $set: {race: 'elf'} }
  // );

  // await db.collection('characters').replaceOne(
  //   { name: legolas.name },
  //   { ...aragorn }
  // );

  // await db.collection('characters').updateOne(
  //   { name: gimli.name },
  //   { $set: {...gimli} },
  //   { upsert: true }
  // );

  await db.collection('characters').deleteOne(
    { name: gimli.name }
  );
}

getConnection()
