const express = require("express");
const path = require("path");

const app = express();

// Servir frontend (landing) desde public/
app.use(express.static(path.join(__dirname, "public")));

// Endpoint de prueba API
app.get("/api/status", (req, res) => {
  res.json({ status: "OK", message: "API funcionando ✅" });
});

// Cualquier otra ruta → redirige al index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Puerto dinámico (Render lo setea automáticamente)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
