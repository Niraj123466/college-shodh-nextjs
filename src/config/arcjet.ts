import arcjet, { detectBot, shield, tokenBucket } from "@arcjet/next";

// Initialize Arcjet with rules
const aj = arcjet({
  key: process.env.ARCJET_KEY!,
  rules: [
    shield({ mode: "LIVE" }), // Protects against SQL injection, XSS, etc.
    detectBot({
      mode: "LIVE", // Blocks detected bots
      allow: ["CATEGORY:SEARCH_ENGINE"], // Allows Google, Bing, etc.
    }),
    tokenBucket({
      mode: "LIVE",
      refillRate: 5, // 5 requests per interval
      interval: 10, // Every 10 seconds
      capacity: 10, // Max 10 requests in the bucket
    }),
  ],
});

export default aj;