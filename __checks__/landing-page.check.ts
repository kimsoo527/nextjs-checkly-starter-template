import { BrowserCheck , Frequency } from "checkly/constructs";

new BrowserCheck('landing-page-check-1', {
  name: 'Landing Page Check',
  frequency: Frequency.EVERY_1H,
  tags: ['web'],
  code: {
    entrypoint: './landing-page.spec.ts'
  }
})
