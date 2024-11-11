import { Game } from '@/type/Game'
import { createDbConnection } from '../createDbConnection'
import { type GameDoc, mapDocToGame } from '@/db/game/mapper/mapDocToGame'
import { ObjectId } from 'mongodb'
import { findGameInDb } from '@/db/game/findGameInDb'
import { mapGameToDoc } from '@/db/game/mapper/mapGameToDoc'

export async function updateGameInDb(game: Game): Promise<Game> {
    const connection = await createDbConnection()
    await connection
        .db('battleship')
        .collection<GameDoc>('game')
        .replaceOne({ _id: new ObjectId(game.gameId) }, mapGameToDoc(game))
    return game
}
