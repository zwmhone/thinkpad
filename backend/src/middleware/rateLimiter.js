// middleware/rateLimiter.js
import rateLimit from "express-rate-limit";

const rateLimiter = rateLimit({
  windowMs: 15 * 1000, // 1 minute
  max: 10, // limit each IP to 5 requests per window
  message: { message: "Too many requests, please try again later" },
});

export default rateLimiter;
