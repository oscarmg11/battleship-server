import { connectHostToGame } from '@/business/game/connectHostToGame'
import { connectRivalToGame } from '@/business/game/connectRivalToGame.ts'
import { sendSessionInfoWebSocketEvent } from '@/webSocketEvent/player/sendSessionInfoWebSocketEvent.ts'

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
        case 'connectRivalToGame':
            await connectRivalToGame({
                gameId: webSocketEvent.data.gameId,
                rivalPlayerId: webSocketEvent.data.rivalPlayerId,
                rivalConnectionId: connectionId,
            })
            break
        case 'requestSessionInfo':
            await sendSessionInfoWebSocketEvent({
                connectionId,
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

type Event = 'connectHostToGame' | 'connectRivalToGame' | 'requestSessionInfo'
