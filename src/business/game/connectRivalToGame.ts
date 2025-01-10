import { getGameInDb } from '@/db/game/getGameInDb'
import { updateGameInDb } from '@/db/game/updateGameInDb'
import { sendWebSocketEvent } from '@/webSocketEvent/sendWebSocketEvent.ts'
import { sendRivalConnectedToGameWebSocketEvent } from '@/webSocketEvent/game/sendRivalConnectedToGameWebSocketEvent.ts'

export async function connectRivalToGame({
    gameId,
    rivalConnectionId,
}: Params): Promise<void> {
    const game = await getGameInDb(gameId)
    await updateGameInDb({
        ...game,
        hostConnectionId: game.hostConnectionId ?? rivalConnectionId,
        rivalConnectionId: game.hostConnectionId
            ? rivalConnectionId
            : undefined,
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
    rivalConnectionId: string
}
