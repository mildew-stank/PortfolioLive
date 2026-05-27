import type { D1Database } from "@cloudflare/workers-types";
import { Hono } from "hono";
import { serveStatic } from "hono/cloudflare-workers";

type Bindings = {
  DB: D1Database;
};

const app = new Hono<{ Bindings: Bindings }>();

app.get("/query/labors", async (c) => {
  try {
    const { results } = await c.env.DB.prepare("SELECT * FROM Labors").all();
    return c.json(results);
  } catch (e) {
    return c.json({ err: "Failed to fetch labors", e }, 500);
  }
});

app.get("/query/facts", async (c) => {
  try {
    const { results } = await c.env.DB.prepare("SELECT * FROM Facts").all();
    return c.json(results);
  } catch (e) {
    return c.json({ err: "Failed to fetch facts", e }, 500);
  }
});

app.get("/query/projects", async (c) => {
  try {
    const { results } = await c.env.DB.prepare("SELECT * FROM Projects").all();
    return c.json(results);
  } catch (e) {
    return c.json({ err: "Failed to fetch projects", e }, 500);
  }
});

export default app;
