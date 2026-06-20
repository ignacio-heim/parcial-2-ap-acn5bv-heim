// codigo-fuente/src/controllers/crearActividad.controller.js
// HU-01 Crear actividad - POST /actividades (ilustrativo, no funcional)

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function crearActividad(req, res) {
    const { titulo, juego, fecha, lugar, cupo } = req.body;
    const creadorId = req.usuario.id; // del token JWT

    // Validacion: el cupo debe ser mayor a cero
    if (!cupo || cupo <= 0) {
        return res.status(400).json({ error: "El cupo debe ser mayor a cero" });
    }

    const actividad = await prisma.actividad.create({
        data: {
            titulo,
            juego,
            fecha: new Date(fecha),
            lugar,
            cupo,
            creadorId, // el creador queda como administrador
        },
    });

    // La actividad queda visible en Explorar
    return res.status(201).json(actividad);
}

module.exports = { crearActividad };