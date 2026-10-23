const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// 1. Pastikan dependensi node_modules terinstall
if (!fs.existsSync(path.join(__dirname, "node_modules"))) {
  console.log("> [AGHATIS] node_modules tidak ditemukan. Menginstall dependencies...");
  try {
    execSync("npm install", { stdio: "inherit", cwd: __dirname });
  } catch (err) {
    console.error("> [AGHATIS] Gagal npm install:", err);
  }
}

// 2. Pastikan Next.js sudah di-build (.next folder)
if (!fs.existsSync(path.join(__dirname, ".next"))) {
  console.log("> [AGHATIS] Folder build .next tidak ditemukan. Menjalankan build otomatis...");
  try {
    execSync("npx next build", { stdio: "inherit", cwd: __dirname });
  } catch (err) {
    console.error("> [AGHATIS] Gagal build:", err);
  }
}

// 3. Jalankan server Next.js production
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = false;
const hostname = "0.0.0.0";
const port = parseInt(process.env.SERVER_PORT || process.env.PORT || "3000", 10);

const app = next({ dev, hostname, port, dir: __dirname });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error("Error occurred handling", req.url, err);
      res.statusCode = 500;
      res.end("Internal Server Error");
    }
  }).listen(port, hostname, () => {
    console.log(`> Aghatis Studio web running on http://${hostname}:${port}`);
  });
}).catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
