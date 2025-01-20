import { ApiCheck, Frequency, AssertionBuilder, RetryStrategyBuilder } from 'checkly/constructs'

new ApiCheck('api-check-1', {
  name: 'Greetings API',
  frequency: Frequency.EVERY_1H,
  tags: ['api'],
  setupScript: {
    content: "process.env.BASE_URL = process.env.ENVIRONMENT_URL || 'https://nextjs-checkly-starter-template.vercel.app'",
  },
  request: {
    url: '{{BASE_URL}}/api/greetings',
    method: 'GET',
    assertions: [
      AssertionBuilder.statusCode().equals(200),
      AssertionBuilder.jsonBody('$[0].text').notEmpty()
    ]
  },
  retryStrategy: RetryStrategyBuilder.exponentialStrategy({
    maxRetries: 3,
    baseBackoffSeconds: 1,
    sameRegion: true
  })
})
