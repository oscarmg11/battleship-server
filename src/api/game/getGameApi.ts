import { createGameVm, GameVm } from '@/api/game/utils/createGameVm'
import { createGame } from '@/business/game/createGame'
import { findGameInDbByRoomId } from '@/db/game/findGameInDbByRoomId'

export async function getGameApi(
    request: Request,
): Promise<GameVm | undefined> {
    const game = await findGameInDbByRoomId(request.roomId)
    return game ? createGameVm(game) : undefined
}

type Request = {
    roomId: string
}
