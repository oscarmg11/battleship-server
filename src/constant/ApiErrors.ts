export const ApiErrors = Object.freeze({
    ENDPOINT_NOT_FOUND: 'ENDPOINT_NOT_FOUND',
})

export type ApiError = (typeof ApiErrors)[keyof typeof ApiErrors]
