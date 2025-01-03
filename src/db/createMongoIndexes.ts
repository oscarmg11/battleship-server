import { createDbConnection } from '@/db/createDbConnection'

export async function createMongoIndexes() {
    const connection = await createDbConnection()

    await connection
        .db('battleship')
        .collection('game')
        .createIndex(
            { deleteAt: -1 },
            { background: true, expireAfterSeconds: 0 },
        )
    await connection
        .db('battleship')
        .collection('game')
        .createIndex({ roomId: -1 }, { background: true })
}

createMongoIndexes()
