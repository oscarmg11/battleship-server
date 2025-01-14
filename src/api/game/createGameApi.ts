import { createGameVm, GameVm } from '@/api/game/utils/createGameVm'
import { createGame } from '@/business/game/createGame'

export async function createGameApi(request: Request): Promise<GameVm> {
    const game = await createGame({
        playerId: request.playerId,
    })
    return createGameVm(game)
}

type Request = {
    playerId: string
}
