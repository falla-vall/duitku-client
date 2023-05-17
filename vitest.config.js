import path from "path";

export default {
  test: {
    globals: true,
    setupFiles: ["dotenv/config"],
  },
  resolve: {
    alias: {
      "@duitku": path.resolve(__dirname, "./src"),
    },
  },
};
