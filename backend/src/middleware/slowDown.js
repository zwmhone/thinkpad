import slowDown from "express-slow-down";

const speedLimiter = slowDown({
  windowMs: 15 * 1000, // 1 minute
  delayAfter: 50, // start slowing after 50 requests in window
  delayMs: 250, // add 250ms per request above delayAfter
});

export default speedLimiter;
