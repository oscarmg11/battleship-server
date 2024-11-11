import { createRoomId } from '@/utils/game/createRoomId'
import { insertGameInDb } from '@/db/game/insertGameInDb'
import { getGameInDb } from '@/db/game/getGameInDb'
import { Game } from '@/type/Game'

export async function createGame(): Promise<Game> {
    const roomId = createRoomId()
    const gameId = await insertGameInDb({
        roomId,
        createdAt: new Date(),
    })
    const game = await getGameInDb(gameId)
    return game
}
