const port = 373242;

Bun.serve({
  port,
  fetch(req) {
    if (req.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    if (req.headers.get('content-type')?.includes('application/json')) {
    }

    return new Response('Hello via Bun!', {
      headers: {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*',
      },
    });
  },
});

console.log(`Server running on port ${port}`);

      