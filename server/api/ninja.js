export default defineEventHandler(async (event) => {
  // handle query params
  // const { name } = getQuery(event);

  // // handle post data
  // const { age } = await readBody(event);

  // return {
  //   message: `Hello, ${name}, you are ${age} years old `,
  // };

  // api call with private key
  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey=SBWNXoqA1MMsnE2e43J6Bi1HF6pCVXzRf4Gmzz9r"
  );

  return data;
});
