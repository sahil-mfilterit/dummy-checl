const { createClient } = require("redis");

async function main() {
  const client = createClient({
    url: "redis://13.234.5.85:6379",
  });

  client.on("error", (err) => {
    console.error("Redis Error:", err);
  });

  try {
    console.log("Connecting to Redis...");

    await client.connect();

    console.log("Connected!");

    await client.set("user:name", "sahil");

    console.log("SET successful");

    const value = await client.get("user:name");

    console.log("GET result:", value);

    await client.quit();

    console.log("Connection closed");
  } catch (err) {
    console.error("Failed:", err);
  }
}

main();