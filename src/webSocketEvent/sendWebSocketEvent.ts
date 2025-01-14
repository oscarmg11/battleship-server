import { ApiGatewayManagementApi } from '@aws-sdk/client-apigatewaymanagementapi'

export async function sendWebSocketEvent({
    connectionId,
    event,
    data,
}: Params): Promise<void> {
    const apiGatewayManagementApi = new ApiGatewayManagementApi({
        endpoint:
            process.env.ENVIRONMENT === 'DEV' ? 'http://localhost:3001' : '',
    })

    await apiGatewayManagementApi.postToConnection({
        ConnectionId: connectionId,
        Data: JSON.stringify({
            event,
            data,
        }),
    })
}

type Params = {
    connectionId: string
    event: Event
    data: any
}

type Event =
    | 'onGameCreated'
    | 'onError'
    | 'onRivalConnected'
    | 'onRivalDisconnected'
    | 'onSessionInfo'
