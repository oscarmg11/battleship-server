import { createGameApi } from '@/api/game/createGameApi'
import { ApiErrors } from '@/constant/ApiErrors'
import { getGameApi } from '@/api/game/getGameApi'

export async function apiHandler(path: string, req: any): Promise<any> {
    let response = undefined
    switch (path) {
        case '/game/createGame':
            response = await createGameApi()
            break
        case '/game/getGame':
            response = await getGameApi(req)
            break
        default:
            throw new Error(ApiErrors.ENDPOINT_NOT_FOUND)
    }
    return response
}
