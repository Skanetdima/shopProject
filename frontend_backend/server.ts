import express, { Request, Response } from "express";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Example of custom API endpoint
  server.get("/api/hello", (req: Request, res: Response) => {
    res.json({ message: "Hello from Dmitry!" });
  });

  // Default request handler
  server.all("*", (req: Request, res: Response) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 3000;

  server.listen(port, (err?: any) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
