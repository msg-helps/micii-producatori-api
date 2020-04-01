// eslint-disable-next-line no-unused-vars
export const hello = async (event: any) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello world!',
      },
      null,
      2,
    ),
  }
}
