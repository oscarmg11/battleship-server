import { connectHostToGame } from '@/business/game/connectHostToGame'

export async function webSocketHandler({
    webSocketEvent,
    connectionId,
}: Params): Promise<void> {
    switch (webSocketEvent.event) {
        case 'connectHostToGame':
            await connectHostToGame({
                gameId: webSocketEvent.data.gameId,
                hostConnectionId: connectionId,
            })
            break
    }
}

type Params = {
    webSocketEvent: WebSocketEvent
    connectionId: string
}

type WebSocketEvent = {
    event: Event
    data: any
}

type Event = 'connectHostToGame'
