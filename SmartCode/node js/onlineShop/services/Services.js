const fs = require("fs").promises;
const path = require("path");

class Services {
  async getItems() {
    try {
      const filePath = path.join(__dirname, "..", "db", "items.json");
      const data = await fs.readFile(filePath, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      console.error("Error reading items.json:", error);
      throw error;
    }
  }
}

module.exports = Services;
