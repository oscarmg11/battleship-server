import { createGameVm, GameVm } from '@/api/game/utils/createGameVm'
import { createGame } from '@/business/game/createGame'

export async function createGameApi(): Promise<GameVm> {
    const game = await createGame()
    return createGameVm(game)
}
