const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@views": path.resolve(__dirname, "src/views"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@redux": path.resolve(__dirname, "src/redux"),
    },
  },
};
