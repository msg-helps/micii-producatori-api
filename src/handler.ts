export const hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello world!',
      },
      null,
      2
    ),
  };
};
