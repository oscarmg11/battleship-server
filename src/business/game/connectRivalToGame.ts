import { getGameInDb } from '@/db/game/getGameInDb'
import { updateGameInDb } from '@/db/game/updateGameInDb'
import { sendWebSocketEvent } from '@/webSocketEvent/sendWebSocketEvent.ts'
import { sendRivalConnectedToGameWebSocketEvent } from '@/webSocketEvent/game/sendRivalConnectedToGameWebSocketEvent.ts'
import { GameStatuses } from '@/constant/GameStatus.ts'

export async function connectRivalToGame({
    gameId,
    rivalPlayerId,
    rivalConnectionId,
}: Params): Promise<void> {
    const game = await getGameInDb(gameId)
    await updateGameInDb({
        ...game,
        rivalPlayerId: rivalPlayerId,
        hostConnectionId: game.hostConnectionId,
        rivalConnectionId: rivalConnectionId,
        gameStatus: GameStatuses.SETTING_UP_GAME,
        deleteAt: undefined,
    })
    if (game.hostConnectionId) {
        await sendRivalConnectedToGameWebSocketEvent({
            hostConnectionId: game.hostConnectionId,
        })
    }
}

type Params = {
    gameId: string
    rivalPlayerId: string
    rivalConnectionId: string
}
