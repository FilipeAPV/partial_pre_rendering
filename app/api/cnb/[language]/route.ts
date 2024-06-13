export async function GET(
  request: Request,
  { params }: { params: { language: string } },
) {
  const language = params.language;

  let message;
  switch (language) {
    case 'en':
      message = 'Hello!';
      break;
    case 'es':
      message = '¡Hola!';
      break;
    case 'fr':
      message = 'Bonjour!';
      break;
    default:
      message = 'Hello from the API!';
      break;
  }

  console.log('Receive Call for : ', language);

  return Response.json({
    message,
  });
}
