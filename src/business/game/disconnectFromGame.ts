import { findGameInDbByHostConnectionId } from '@/db/game/findGameInDbByHostConnectionId'
import { findGameInDbByRivalConnectionId } from '@/db/game/findGameInDbByRivalConnectionId'
import { updateGameInDb } from '@/db/game/updateGameInDb'
import { add } from 'date-fns'

export async function disconnectFromGame(params: Params): Promise<void> {
    let isHost = true
    let game = await findGameInDbByHostConnectionId(params.connectionId)

    if (!game) {
        isHost = false
        game = await findGameInDbByRivalConnectionId(params.connectionId)
    }
    if (!game) return

    const updatedGame = {
        ...game,
        hostConnectionId: isHost
            ? game.rivalConnectionId
            : game.hostConnectionId,
        rivalConnectionId: undefined,
    }

    if (!updatedGame.hostConnectionId && !updatedGame.rivalConnectionId) {
        updatedGame.deleteAt = add(new Date(), { days: 1 })
    }

    await updateGameInDb(updatedGame)
}

type Params = {
    connectionId: string
}
