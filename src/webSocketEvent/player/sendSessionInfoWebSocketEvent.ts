import { sendWebSocketEvent } from '@/webSocketEvent/sendWebSocketEvent.ts'

export async function sendSessionInfoWebSocketEvent({
    connectionId,
}: Params): Promise<void> {
    await sendWebSocketEvent({
        connectionId: connectionId,
        event: 'onSessionInfo',
        data: {
            sessionId: connectionId,
        },
    })
}

type Params = {
    connectionId: string
}
