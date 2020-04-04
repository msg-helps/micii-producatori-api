import { Handler } from './types'

type PathParameters = {
  pathParameter1: string
  pathParameter2: string
}

type QueryParameters = {
  queryParameter1: string
  queryParameter2: string
}

type Body = {
  content: string
}

export const create: Handler = async (event) => {
  const requestBody = event.body ? (JSON.parse(event.body) as Body) : null

  const {
    pathParameter1,
    pathParameter2,
  } = event.pathParameters as PathParameters

  const {
    queryParameter1,
    queryParameter2,
  } = event.queryStringParameters as QueryParameters

  const body = JSON.stringify(
    {
      message: `Hello world! ${requestBody?.content}, ${pathParameter1}, ${pathParameter2}, ${queryParameter1}, ${queryParameter2}`,
      event,
    },
    null,
    2,
  )

  return {
    statusCode: 200,
    body,
  }
}
