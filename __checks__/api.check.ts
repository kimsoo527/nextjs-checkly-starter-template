import { ApiCheck, Frequency } from 'checkly/constructs'

new ApiCheck('api-check-1', {
  name: 'Greetings API',
  frequency: Frequency.EVERY_1H,
  tags: ['api'],
  request: {
    url: 'https://nextjs-vercel.app/api/greetings',
    method: 'GET',
  },
})
