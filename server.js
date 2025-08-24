const express = require("express");
const path = require("path");

const app = express();

// 📌 Lista de agentes con número y mensaje
const agentes = [
  { numero: "541132525913", mensaje: "Hola martin, me creas un usuario?" },
  { numero: "541171334027", mensaje: "Hola lucas, me creas un usuario?" },
  { numero: "541156349123", mensaje: "Hola cami, me creas un usuario?" },
  { numero: "54117356830", mensaje: "Hola octavio, me creas un usuario?" },
  { numero: "541125127839", mensaje: "Hola facu, me podes crear un usuario porfa?" },
  { numero: "541123365501", mensaje: "Hola me creas un usuario? 🤚🍀" }
];

// 📌 Rotación global
let currentIndex = 0;

// Endpoint dinámico de WhatsApp
app.get("/api/whatsapp", (req, res) => {
  const agente = agentes[currentIndex];
  currentIndex = (currentIndex + 1) % agentes.length;
  res.json(agente);
});

// Servir frontend desde public/
app.use(express.static(path.join(__dirname, "public")));

// Endpoint de prueba
app.get("/api/status", (req, res) => {
  res.json({ status: "OK", message: "API funcionando ✅" });
});

// Cualquier otra ruta redirige a index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Puerto dinámico
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
