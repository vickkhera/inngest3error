import { inngest_edge } from "@/config/inngest";

export const helloWorld = inngest_edge.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep('sleep-before-hello',"1s");
    return { body: `Hello World ${event.data?.name}!` };
  }
);
