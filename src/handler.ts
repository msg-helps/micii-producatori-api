import { Handler } from './types'

export const hello: Handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello world!',
        event,
      },
      null,
      2,
    ),
  }
}
