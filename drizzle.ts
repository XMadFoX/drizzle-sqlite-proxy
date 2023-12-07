import { drizzle } from "drizzle-orm/sqlite-proxy";

const db = drizzle(async () => {
  try {
    // Drizzle expects an array of values from the driver:
    const mock = [
      // { id: "1", text_modifiers: "test", int_modifiers: 1 },
      // { id: "2", text_modifiers: "test2", int_modifiers: 0 },
      ["1", "test", 1],
      ["2", "test2", 0]
    ]
    console.log('mock', mock)

    return {
      rows: mock,
    };
  } catch (e: any) {
    console.error("Error from sqlite proxy server: ", e);
    return { rows: [] };
  }
});

export default db;
