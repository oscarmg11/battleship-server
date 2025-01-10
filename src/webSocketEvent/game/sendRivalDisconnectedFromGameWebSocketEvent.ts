import { sendWebSocketEvent } from '@/webSocketEvent/sendWebSocketEvent.ts'

export async function sendRivalDisconnectedFromGameWebSocketEvent({
    rivalConnectionId,
}: Params): Promise<void> {
    await sendWebSocketEvent({
        connectionId: rivalConnectionId,
        event: 'onRivalDisconnected',
        data: undefined,
    })
}

type Params = {
    rivalConnectionId: string
}
