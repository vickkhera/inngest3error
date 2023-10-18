import { serve } from "inngest/next";
import { inngest_edge } from "@/config/inngest";

export const runtime = 'edge';
export const preferredRegion = 'iad1';  // only execute this function on iad1 (us-east1) near Supabase in aws us-east1
export const dynamic = 'force-dynamic'; // no caching

// Import the functions to expose.
import { helloWorld } from "./helloWorld";

// Serve the Inngest API.
export const { GET, POST, PUT } = serve({
  client: inngest_edge,
  functions: [ // A list of functions to expose.
    helloWorld
  ],
  streaming: "allow"
});