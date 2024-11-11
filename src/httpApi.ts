import { apiHandler } from '@/apiHandler'
import { ApiErrors } from '@/constant/ApiErrors'

export async function handler(req: Request) {
    const path = req.requestContext.http.path

    try {
        const response = await apiHandler(path)
        return {
            statusCode: 200,
            body: JSON.stringify(response),
            headers: {
                'Content-Type': 'application/json',
            },
        }
    } catch (e: any) {
        if (e.message === ApiErrors.ENDPOINT_NOT_FOUND) {
            return {
                statusCode: 404,
            }
        }
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        }
    }
}

type Request = {
    requestContext: {
        accountId: string
        apiId: string
        domainName: string
        domainPrefix: string
        http: {
            method: string
            path: string
            protocol: string
            sourceIp: string
            userAgent: string
        }
        operationName: undefined
        requestId: string
        routeKey: string
        stage: string
        time: string
        timeEpoch: number
    }
}
