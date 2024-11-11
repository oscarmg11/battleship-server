import { Game } from '@/type/Game'
import { createDbConnection } from '../createDbConnection'
import { type GameDoc, mapDocToGame } from '@/db/game/mapper/mapDocToGame'
import { ObjectId } from 'mongodb'

export async function findGameInDb(gameId: string): Promise<Game | undefined> {
    const connection = await createDbConnection()
    const game = await connection
        .db('battleship')
        .collection<GameDoc>('game')
        .findOne({ _id: new ObjectId(gameId) })
    return mapDocToGame(game)
}
