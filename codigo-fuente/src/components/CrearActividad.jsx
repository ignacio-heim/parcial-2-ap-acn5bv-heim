// codigo-fuente/src/components/CrearActividad.jsx
// HU-01 Crear actividad - formulario de frontend (ilustrativo, no funcional)

import { useState } from "react";

export default function CrearActividad() {
    const [datos, setDatos] = useState({
        titulo: "",
        juego: "",
        fecha: "",
        lugar: "",
        cupo: 1,
    });

    const handleChange = (campo, valor) =>
        setDatos((prev) => ({ ...prev, [campo]: valor }));

    const handleSubmit = async () => {
        await fetch("/actividades", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(datos),
        });
    };

    return (
        <div className="crear-actividad">
            <h1>Crear actividad</h1>
            <input
                placeholder="Titulo"
                value={datos.titulo}
                onChange={(e) => handleChange("titulo", e.target.value)}
            />
            <input
                placeholder="Juego o deporte"
                value={datos.juego}
                onChange={(e) => handleChange("juego", e.target.value)}
            />
            <input
                type="datetime-local"
                value={datos.fecha}
                onChange={(e) => handleChange("fecha", e.target.value)}
            />
            <input
                placeholder="Lugar"
                value={datos.lugar}
                onChange={(e) => handleChange("lugar", e.target.value)}
            />
            <input
                type="number"
                min="1"
                value={datos.cupo}
                onChange={(e) => handleChange("cupo", Number(e.target.value))}
            />
            <button onClick={handleSubmit}>Publicar actividad</button>
        </div>
    );
}