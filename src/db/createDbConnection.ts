import { MongoClient, ServerApiVersion } from 'mongodb'

export async function createDbConnection() {
    if (!process.env.MONGO_URI) {
        throw new Error('MONGO_URI env var is not defined')
    }
    const client = new MongoClient(process.env.MONGO_URI, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        },
    })
    await client.connect()
    return client
}
