import { findGameInDbByHostConnectionId } from '@/db/game/findGameInDbByHostConnectionId'
import { findGameInDbByRivalConnectionId } from '@/db/game/findGameInDbByRivalConnectionId'
import { updateGameInDb } from '@/db/game/updateGameInDb'
import { add } from 'date-fns'
import { sendRivalDisconnectedFromGameWebSocketEvent } from '@/webSocketEvent/game/sendRivalDisconnectedFromGameWebSocketEvent.ts'

export async function disconnectFromGame(params: Params): Promise<void> {
    let isHost = true
    let game = await findGameInDbByHostConnectionId(params.connectionId)

    if (!game) {
        isHost = false
        game = await findGameInDbByRivalConnectionId(params.connectionId)
    }
    if (!game) return

    const rivalConnectionId = isHost
        ? game.rivalConnectionId
        : game.hostConnectionId

    const updatedGame = {
        ...game,
        hostConnectionId: rivalConnectionId,
        rivalConnectionId: undefined,
    }

    if (!rivalConnectionId) {
        updatedGame.deleteAt = add(new Date(), { days: 1 })
    }

    await updateGameInDb(updatedGame)

    if (rivalConnectionId) {
        await sendRivalDisconnectedFromGameWebSocketEvent({
            rivalConnectionId: rivalConnectionId,
        })
    }
}

type Params = {
    connectionId: string
}
