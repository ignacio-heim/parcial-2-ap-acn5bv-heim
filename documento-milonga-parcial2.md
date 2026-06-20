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

---

## 2. Análisis de interesados (stakeholders)

Se utiliza la matriz **poder / interés** para clasificar a los interesados y definir la estrategia de gestión de cada uno.

| Stakeholder | Tipo | Poder | Interés | Estrategia |
|---|---|---|---|---|
| Usuarios finales (jóvenes 18–35) | Externo | Medio (colectivo alto) | Alto | Mantener satisfechos / co-creación |
| Equipo fundador y de desarrollo | Interno | Alto | Alto | Gestionar de cerca |
| Organizadores recurrentes ("power users") | Externo | Medio | Alto | Mantener satisfechos |
| Dueños de sedes y complejos (canal presencial / B2B) | Externo | Medio | Medio | Mantener informados |
| Proveedor de geolocalización (Google Maps Platform) | Externo | Medio | Bajo | Monitorear |

### Perfiles detallados (al menos 3)

**1. Usuarios finales (jóvenes de 18 a 35 años)**
- **Rol:** organizan o se suman a actividades recreativas.
- **Expectativas:** armar actividades rápido, jugar más seguido, no perder tiempo coordinando, conocer gente nueva.
- **Poder / interés:** individualmente su poder es bajo, pero como colectivo determinan el éxito del producto; el interés es alto.
- **Gestión:** validación constante (entrevistas, mapa de empatía), iteración sobre la experiencia de "crear" y "unirse", canales de feedback dentro de la app.

**2. Equipo fundador y de desarrollo**
- **Rol:** definen producto, priorizan backlog y construyen el MVP. Incluye al Project Manager / Scrum Master y al equipo técnico.
- **Expectativas:** entregar un MVP viable dentro del plazo, mantener el alcance bajo control tras la ampliación de "partida" a "actividad".
- **Poder / interés:** ambos altos.
- **Gestión:** ceremonias de Scrum, tablero compartido, definición clara del alcance del MVP.

**3. Organizadores recurrentes / power users**
- **Rol:** capitanes de grupo y organizadores frecuentes que traen a otros usuarios a la plataforma.
- **Expectativas:** herramientas de gestión de cupos, lista de espera, división de costos y balanceo de equipos que les ahorren trabajo.
- **Poder / interés:** poder medio (son clave para la masa crítica), interés alto.
- **Gestión:** priorizar las funcionalidades que les resuelven la logística; programa de early adopters en el piloto.
