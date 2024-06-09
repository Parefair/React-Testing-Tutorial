import { http, HttpResponse } from 'msw'
 
export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get('https://jsonplaceholder.typicode.com/users', () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json([
        {
            name: "Bruce Wayne",
        },
        {
            name: "Clark Kent",
        },
        {
            name: "Princess Diana",
        },
    ],{
        status: 200,
    })
  }),
]