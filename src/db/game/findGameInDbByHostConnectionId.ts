import { Game } from '@/type/Game'
import { createDbConnection } from '../createDbConnection'
import { type GameDoc, mapDocToGame } from '@/db/game/mapper/mapDocToGame'

export async function findGameInDbByHostConnectionId(
    hostConnectionId: string,
): Promise<Game | undefined> {
    const connection = await createDbConnection()
    const game = await connection
        .db('battleship')
        .collection<GameDoc>('game')
        .findOne({ hostConnectionId })
    return mapDocToGame(game)
}
