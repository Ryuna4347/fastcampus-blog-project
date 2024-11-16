const path = require("path");

module.exports = {
    webpack: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@components": path.resolve(__dirname, "src/components"),
            "@firebaseApp": path.resolve(__dirname, "src/firebaseApp"),
        },
    },
};
