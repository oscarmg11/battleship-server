import {findGameInDbByRoomId} from "@/db/game/findGameInDbByRoomId";

export async function handler(req: Request) {
    if(req.requestContext.routeKey === '$connect') {
        return {
            statusCode: 200,
            body: 'Connected',
        }
    }
    console.log(req)
    return {
        statusCode: 200,
        body: 'Connected',
    }
}

type Request = {
    requestContext: {
        apiId: string,
        connectedAt: number,
        connectionId: string,
        domainName: string,
        eventType: string,
        extendedRequestId: string,
        messageDirection: 'IN',
        messageId: string,
        requestId: string,
        requestTime: string,
        requestTimeEpoch: number,
        routeKey: '$connect',
    }
}
