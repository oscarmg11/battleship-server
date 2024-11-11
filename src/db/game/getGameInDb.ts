import { Game } from '@/type/Game'
import { createDbConnection } from '../createDbConnection'
import { type GameDoc, mapDocToGame } from '@/db/game/mapper/mapDocToGame'
import { ObjectId } from 'mongodb'
import { findGameInDb } from '@/db/game/findGameInDb'

export async function getGameInDb(gameId: string): Promise<Game> {
    const game = await findGameInDb(gameId)
    if (!game) throw new Error(`Could not find game with gameId=${gameId}`)
    return game
}
