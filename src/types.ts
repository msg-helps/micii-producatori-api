import { APIGatewayEvent, Context as AWSContext, ProxyResult } from 'aws-lambda'

export type Request = APIGatewayEvent
export type Context = AWSContext
export type Response = ProxyResult

export type Handler = (event: Request, context: Context) => Promise<Response>
