import { findGameInDbByRoomId } from '@/db/game/findGameInDbByRoomId'
import { createGame } from '@/business/game/createGame'
import { webSocketHandler } from '@/webSocketHandler'

export async function handler(req: Request) {
    if (req.requestContext.routeKey === '$connect') {
        return {
            statusCode: 200,
            body: JSON.stringify({
                connectionId: req.requestContext.connectionId,
            }),
        }
    }

    if (req.requestContext.routeKey === '$default') {
        const webSocketEvent = JSON.parse(req.body)
        try {
            await webSocketHandler({
                webSocketEvent,
                connectionId: req.requestContext.connectionId,
            })
            return {
                statusCode: 200,
            }
        } catch (e: any) {
            return {
                statusCode: 500,
            }
        }
    }

    return {
        statusCode: 200,
    }
}

type Request = {
    body: string
    requestContext: {
        apiId: string
        connectedAt: number
        connectionId: string
        domainName: string
        eventType: string
        extendedRequestId: string
        messageDirection: 'IN'
        messageId: string
        requestId: string
        requestTime: string
        requestTimeEpoch: number
        routeKey: '$connect'
    }
}
