module.exports = {
  apps: [
    {
      name: "enzomrg",
      script: "./server.js",
      autorestart: true,
      watch: false,
    },
  ],
};
