# Example of failing Inngest v3

Node version v20.8.1, npm version 10.1.0 both installed using Homebrew on an M1 Macbook Air running macOS 14.0.

Checkout this code and run `npm install`. Then start the servers, run both commands:

```sh
npm run dev
npm run inngest
```

Open the [Inngest dev server](http://localhost:8288) and submit a hello world event from the function list.

Alternatively run this cURL command:

```sh
curl -X POST --data '{"name":"test/hello.world", "data": {"name":"vick"}}' http://localhost:8288/e/1a2a1e58
```

When the `helloWorld` function is invoked, it reports the following error on the nextjs output and in the Inngest dev UI.

If the `step.sleep()` call is commented out, the function will complete. This error happens on any `step.*` calls.

```log
[Inngest] debug - registered inngest functions: 200 OK { ok: true }
inngest:01HD1SJSHXRHB43V8GSFX0NP94 created new V1 execution for run; +0ms discovering steps
inngest:01HD1SJSHXRHB43V8GSFX0NP94 existing state keys: +1ms []
inngest:01HD1SJSHXRHB43V8GSFX0NP94 starting V1 execution +0ms
inngest:01HD1SJSHXRHB43V8GSFX0NP94 checkpoint: +6ms {
  type: 'steps-found',
  steps: [
  {
  id: 'sleep-before-hello',
  op: 'Sleep',
  name: '1s',
  displayName: 'sleep-before-hello',
  hashedId: '9dfe7fac04f3ea88a48e6975785ecbcb69d01e47',
  fn: undefined,
  fulfilled: false,
  handled: false,
  handle: [Function: handle]
}
]
}
inngest:01HD1SJSHXRHB43V8GSFX0NP94 result: +0ms {
  type: 'steps-found',
  steps: [
  {
  displayName: 'sleep-before-hello',
  op: 'Sleep',
  id: '9dfe7fac04f3ea88a48e6975785ecbcb69d01e47',
  name: '1s',
  opts: undefined
}
]
}
[Inngest] debug - registered inngest functions: 200 OK { ok: true }
inngest:01HD1SJSHXRHB43V8GSFX0NP94 starting V0 execution +0ms
 [NonRetriableError: =================================================

❌  Your function was stopped from running
    at prettyError (webpack-internal:///(rsc)/./node_modules/inngest/helpers/errors.js:242:23)
    at V0InngestExecution._V0InngestExecution_start (webpack-internal:///(rsc)/./node_modules/inngest/components/execution/v0.js:100:98)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async InngestCommHandler.handleAction (webpack-internal:///(rsc)/./node_modules/inngest/components/InngestCommHandler.js:307:36)
    at async ServerTiming.wrap (webpack-internal:///(rsc)/./node_modules/inngest/helpers/ServerTiming.js:70:20)

We couldn't resume your function's state because it may have changed since the run started or there are async actions in-between steps that we haven't noticed in previous executions. Continuing to run the function may result in unexpected behaviour, so we've stopped your function to ensure nothing unexpected happened!

Ensure that your function is either entirely step-based or entirely non-step-based, by either wrapping all asynchronous logic in `step.run()` calls or by removing all `step.*()` calls.

For more information on why step functions work in this manner, see https://www.inngest.com/docs/functions/multi-step#gotchas

Code: NON_DETERMINISTIC_FUNCTION

=================================================] {
  cause: undefined,
  name: 'NonRetriableError'
}
inngest:01HD1SJSHXRHB43V8GSFX0NP94 result: +6ms {
  type: 'function-rejected',
  error: {
  name: 'NonRetriableError',
  message: '=================================================\n\n❌  Your function was stopped from running\n    at prettyError (webpack-internal:///(rsc)/./node_modules/inngest/helpers/errors.js:242:23)\n    at V0InngestExecution._V0InngestExecution_start (webpack-internal:///(rsc)/./node_modules/inngest/components/execution/v0.js:100:98)\n    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at async InngestCommHandler.handleAction (webpack-internal:///(rsc)/./node_modules/inngest/components/InngestCommHandler.js:307:36)\n    at async ServerTiming.wrap (webpack-internal:///(rsc)/./node_modules/inngest/helpers/ServerTiming.js:70:20)\n\nWe couldn\'t resume your function\'s state because it may have changed since the run started or there are async actions in-between steps that we haven\'t noticed in previous executions. Continuing to run the function may result in unexpected behaviour, so we\'ve stopped your function to ensure nothing unexpected happened!\n\nEnsure that your function is either entirely step-based or entirely non-step-based, by either wrapping all asynchronous logic in `step.run()` calls or by removing all `step.*()` calls.\n\nFor more information on why step functions work in this manner, see https://www.inngest.com/docs/functions/multi-step#gotchas\n\nCode: NON_DETERMINISTIC_FUNCTION\n\n=================================================',
  stack: 'NonRetriableError: =================================================\n\n❌  Your function was stopped from running\n    at prettyError (webpack-internal:///(rsc)/./node_modules/inngest/helpers/errors.js:242:23)\n    at V0InngestExecution._V0InngestExecution_start (webpack-internal:///(rsc)/./node_modules/inngest/components/execution/v0.js:100:98)\n    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at async InngestCommHandler.handleAction (webpack-internal:///(rsc)/./node_modules/inngest/components/InngestCommHandler.js:307:36)\n    at async ServerTiming.wrap (webpack-internal:///(rsc)/./node_modules/inngest/helpers/ServerTiming.js:70:20)\n\nWe couldn\'t resume your function\'s state because it may have changed since the run started or there are async actions in-between steps that we haven\'t noticed in previous executions. Continuing to run the function may result in unexpected behaviour, so we\'ve stopped your function to ensure nothing unexpected happened!\n\nEnsure that your function is either entirely step-based or entirely non-step-based, by either wrapping all asynchronous logic in `step.run()` calls or by removing all `step.*()` calls.\n\nFor more information on why step functions work in this manner, see https://www.inngest.com/docs/functions/multi-step#gotchas\n\nCode: NON_DETERMINISTIC_FUNCTION\n\n=================================================\n    at V0InngestExecution._V0InngestExecution_start (webpack-internal:///(rsc)/./node_modules/inngest/components/execution/v0.js:100:31)\n    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at async InngestCommHandler.handleAction (webpack-internal:///(rsc)/./node_modules/inngest/components/InngestCommHandler.js:307:36)\n    at async ServerTiming.wrap (webpack-internal:///(rsc)/./node_modules/inngest/helpers/ServerTiming.js:70:20)',
  __serialized: true
},
  retriable: false
}
[Inngest] debug - registered inngest functions: 200 OK { ok: true }
```
