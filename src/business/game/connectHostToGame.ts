import { getGameInDb } from '@/db/game/getGameInDb'
import { updateGameInDb } from '@/db/game/updateGameInDb'

export async function connectHostToGame({
    gameId,
    hostConnectionId,
}: Params): Promise<void> {
    const game = await getGameInDb(gameId)
    await updateGameInDb({
        ...game,
        hostConnectionId,
    })
}

type Params = {
    gameId: string
    hostConnectionId: string
}
