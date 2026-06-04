const { createClient } = require("redis");

(async () => {
  const client = createClient({
    socket: {
      host: "13.234.5.85",
      port: 4001,
      connectTimeout: 5000,
    },
  });

  client.on("error", (err) => {
    console.error("Redis Error:", err);
  });

  try {
    console.log("Connecting...");

    await client.connect();

    console.log("Connected!");

    const result = await client.set("test-node", "sahil");

    console.log("SET:", result);

    const value = await client.get("test-node");

    console.log("GET:", value);

    await client.quit();
  } catch (err) {
    console.error("FAILED:", err);
  }
})();