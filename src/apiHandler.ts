import { createGameApi } from '@/api/game/createGameApi'
import { ApiErrors } from '@/constant/ApiErrors'

export async function apiHandler(path: string): Promise<any> {
    let response = undefined
    switch (path) {
        case '/game/createGame':
            response = await createGameApi()
            break
        default:
            throw new Error(ApiErrors.ENDPOINT_NOT_FOUND)
    }
    return response
}
