import { sendWebSocketEvent } from '@/webSocketEvent/sendWebSocketEvent.ts'

export async function sendRivalConnectedToGameWebSocketEvent({
    hostConnectionId,
}: Params): Promise<void> {
    await sendWebSocketEvent({
        connectionId: hostConnectionId,
        event: 'onRivalConnected',
        data: undefined,
    })
}

type Params = {
    hostConnectionId: string
}
