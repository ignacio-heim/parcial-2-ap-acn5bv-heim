# Milonga — Documento de Proyecto (Parcial 2)

**Materia:** Administración de Proyectos — Prof. Sergio Medina
**Equipo:** [Apellido Integrante 1], [Apellido Integrante 2] _(completar; mínimo 2, máximo 4)_
**Sistema de versionado:** GitHub (cada incremento de versión = un commit etiquetado)

---

## Registro de versiones (changelog)

| Versión | Contenido agregado | Commit sugerido |
|---|---|---|
| v0.1 | Objetivo general (SMART / OKR) | `docs: v0.1 objetivo general SMART/OKR` |
| v0.2 | Análisis de interesados (perfiles de stakeholders) | `docs: v0.2 analisis de interesados` |
| v0.3 | Metodología ágil elegida y justificación | `docs: v0.3 metodologia agil` |
| v0.4 | Análisis de requerimientos (historias de usuario) | `docs: v0.4 analisis de requerimientos` |
| v0.5 | Tablero de seguimiento (link, miembros, docente, público) | `docs: v0.5 tablero de seguimiento` |
| v0.6 | Milestones (3) con sus historias de usuario | `docs: v0.6 milestones` |
| v0.7 | Estimaciones de requerimientos | `docs: v0.7 estimaciones` |
| v0.8 | Asignación de responsables a los ítems | `docs: v0.8 asignaciones` |
| v0.9 | Simulación de desarrollo (cambios de versión de código) | `docs: v0.9 simulacion de desarrollo` |
| v0.10 | Situación de ajuste de metodología | `docs: v0.10 ajuste de metodologia` |
| v1.0 | Consolidación y actualización de versiones de configuración | `docs: v1.0 consolidacion` |
| v1.1 | (Extra) Pull Request de una HU marcada como terminada | `feat: HU-01 crear actividad` |

> Cada fila de esta tabla corresponde a un commit. Eso satisface el requisito de "incrementar la versión" en cada paso.

---

## 1. Objetivo general del proyecto (SMART / OKR)

**Qué es Milonga.** Una plataforma web y mobile que funciona como capa de coordinación para organizar actividades recreativas (deportes, videojuegos, juegos de mesa y salidas sociales). No es un lugar donde se juega, sino la herramienta que conecta personas y resuelve la logística de juntarse: armar la actividad, completar cupos, confirmar asistencia y construir reputación.

### Objetivo en formato SMART

Desarrollar y validar el MVP de Milonga (web + mobile) que permita a jóvenes de 18 a 35 años crear y unirse a actividades recreativas con mecánicas estructuradas de compromiso, alcanzando las 8 pantallas core funcionales y un piloto medible dentro del cuatrimestre.

| Criterio | Cómo se cumple |
|---|---|
| **S**pecific | MVP de coordinación de actividades con cupos, confirmaciones, lista de espera y reputación. |
| **M**easurable | 8 pantallas core, backlog de 23 historias de usuario, piloto con métricas de actividades creadas y completadas. |
| **A**chievable | Stack conocido (Node.js, React, React Native, PostgreSQL); equipo con dominio de las tecnologías. |
| **R**elevant | Resuelve dolores validados en la investigación de mercado (grupos de WhatsApp desordenados, cancelaciones, falta de jugadores). |
| **T**ime-bound | Entrega del MVP dentro del cuatrimestre académico, organizada en sprints de 2 semanas. |

### Objetivo en formato OKR

**Objetivo:** Convertir a Milonga en la forma más simple de coordinar actividades recreativas para jóvenes de 18 a 35 años.

| Key Result | Meta |
|---|---|
| KR1 | Entregar las 8 pantallas core funcionales del MVP (Login, Explorar, Detalle, Crear, Chat, Perfil, Mis actividades, Avisos). |
| KR2 | Lograr que el 100% de las características del benchmark queden cubiertas (multijuego, geolocalización, crear/unirse, online, juegos de mesa, descubrir jugadores, reputación). |
| KR3 | En el piloto, alcanzar una tasa de actividades con cupo completo ≥ 60%. |
| KR4 | Reducir el tiempo percibido de coordinación de una actividad por debajo de los 5 minutos (medido por encuesta a usuarios del piloto). |
