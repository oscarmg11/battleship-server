import { createRoomId } from '@/utils/game/createRoomId'
import { insertGameInDb } from '@/db/game/insertGameInDb'
import { getGameInDb } from '@/db/game/getGameInDb'
import { Game } from '@/type/Game'
import { GameStatuses } from '@/constant/GameStatus.ts'

export async function createGame(params: Params): Promise<Game> {
    const roomId = createRoomId()
    const gameId = await insertGameInDb({
        roomId,
        hostPlayerId: params.playerId,
        gameStatus: GameStatuses.WAITING_FOR_PLAYERS,
        createdAt: new Date(),
    })
    const game = await getGameInDb(gameId)
    return game
}

type Params = {
    playerId: string
}
