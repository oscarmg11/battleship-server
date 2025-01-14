import { getGameInDb } from '@/db/game/getGameInDb'
import { updateGameInDb } from '@/db/game/updateGameInDb'

export async function connectHostToGame({
    gameId,
    hostConnectionId,
}: Params): Promise<void> {
    const game = await getGameInDb(gameId)
    await updateGameInDb({
        ...game,
        hostConnectionId: hostConnectionId,
        rivalConnectionId: game.rivalConnectionId,
        deleteAt: undefined,
    })
}

type Params = {
    gameId: string
    hostConnectionId: string
}
