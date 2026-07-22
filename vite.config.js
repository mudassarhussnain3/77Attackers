import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import chatHandler from "./api/chat.js";

// ponytail: `api/chat.js` is written for Vercel's serverless runtime, which
// isn't available under plain `vite dev`. This plugin runs that same handler
// inside Vite's dev server so /api/chat works locally without the Vercel CLI
// (which needs an interactive login). Vercel deploys `api/chat.js` directly
// and never sees this file, so production is unaffected.
function apiChatDevMiddleware() {
  return {
    name: "api-chat-dev-middleware",
    configureServer(server) {
      server.middlewares.use("/api/chat", (req, res) => {
        let body = "";
        req.on("data", (chunk) => (body += chunk));
        req.on("end", () => {
          try {
            req.body = body ? JSON.parse(body) : {};
          } catch {
            req.body = {};
          }
          res.status = (code) => {
            res.statusCode = code;
            return res;
          };
          res.json = (payload) => {
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(payload));
          };
          chatHandler(req, res);
        });
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), ""));
  return {
    plugins: [react(), apiChatDevMiddleware()],
    server: {
      port: 3000,
      strictPort: true,
    },
  };
});
