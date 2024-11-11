import { type Game } from '@/type/Game'
import { createDbConnection } from '../createDbConnection'
import { type GameDoc, mapDocToGame } from '@/db/game/mapper/mapDocToGame'
import { mapGameToDoc } from '@/db/game/mapper/mapGameToDoc'

export async function insertGameInDb(
    game: Omit<Game, 'gameId'>,
): Promise<string> {
    const connection = await createDbConnection()
    const gameDoc = await connection
        .db('battleship')
        .collection<GameDoc>('game')
        .insertOne(mapGameToDoc(game))
    return gameDoc.insertedId.toString()
}
