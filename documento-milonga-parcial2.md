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

- ---

## 3. Metodología ágil elegida

**Decisión:** Scrum como marco principal, complementado con un tablero Kanban con límites de trabajo en progreso (enfoque **Scrumban**).

### Justificación
- El alcance del proyecto evolucionó durante su desarrollo (la ampliación de "partida" a "actividad"). Un marco iterativo permite incorporar ese cambio sin rehacer todo el plan.
- El equipo es chico y necesita ciclos cortos de entrega para validar pantallas con la devolución del docente y de usuarios.
- Kanban aporta visibilidad del flujo y control de cuellos de botella (por ejemplo, las pantallas bloqueadas por el rate limit del conector), mientras Scrum aporta cadencia y compromisos por sprint.

### Características de Scrum aplicadas
- **Roles:** Product Owner (prioriza el backlog por valor), Scrum Master (facilita y remueve impedimentos), Equipo de desarrollo.
- **Sprints:** iteraciones de 2 semanas con un objetivo de sprint definido.
- **Ceremonias:** Sprint Planning, Daily, Sprint Review, Retrospectiva y Refinement de backlog.
- **Artefactos:** Product Backlog (las 23 HU + tareas técnicas), Sprint Backlog e Incremento.

### Características de Kanban aplicadas
- **Tablero con columnas:** Backlog → To Do → In Progress → Code Review → Done.
- **Límites WIP:** máximo de ítems simultáneos en "In Progress" para evitar dispersión.
- **Backlog ordenado por valor**, no por dependencia técnica (por eso "Crear actividad" lidera).

- ---

## 4. Análisis de requerimientos (historias de usuario)

Las historias siguen el formato: _Como [rol], quiero [acción], para [beneficio]._

### Épica A — Acceso y descubrimiento
- **HU-01 — Crear actividad.** Como organizador, quiero crear una actividad indicando juego, fecha, lugar y cupo, para convocar gente.
  - *Criterios:* la actividad queda visible en Explorar; se valida cupo > 0; el creador queda como administrador de la actividad.
- **HU-02 — Explorar actividades.** Como usuario, quiero ver y filtrar actividades cercanas, para encontrar a qué sumarme.
- **HU-03 — Login / registro.** Como usuario, quiero autenticarme, para acceder a mis actividades.
- **HU-04 — Ver detalle de actividad.** Como usuario, quiero ver los detalles y participantes, para decidir si me uno.

### Épica B — Coordinación y compromiso
- **HU-05 — Unirse a una actividad.** Como usuario, quiero unirme y ocupar un cupo, para confirmar mi participación.
- **HU-06 — Confirmar asistencia.** Como organizador, quiero que los inscriptos confirmen, para reducir cancelaciones.
- **HU-07 — Lista de espera.** Como usuario, quiero anotarme en lista de espera si no hay cupo, para entrar si alguien se baja.
- **HU-08 — Avisos / notificaciones.** Como usuario, quiero recibir avisos de cambios, para no perderme actualizaciones.

### Épica C — Social y presencial
- **HU-09 — Perfil de usuario.** Como usuario, quiero un perfil con mi historial, para mostrar mi actividad.
- **HU-10 — Reputación.** Como usuario, quiero calificar y ser calificado, para generar confianza.
- **HU-11 — Chat de actividad.** Como participante, quiero un chat, para coordinar detalles.
- **HU-12 — Mapa / geolocalización.** Como usuario, quiero ver actividades en un mapa, para elegir por cercanía.
- **HU-13 — División de costos.** Como organizador, quiero dividir el costo entre participantes, para simplificar el pago.
- **HU-14 — Balanceo de equipos.** Como organizador, quiero armar equipos equilibrados, para que el juego sea parejo.
- **HU-15 — Aporte de equipamiento.** Como participante, quiero indicar qué equipamiento llevo, para coordinar lo que falta.
- **HU-16 — Gestión de sedes.** Como organizador, quiero asociar una sede a la actividad, para definir el lugar.

> El backlog completo contempla 23 historias de usuario (HU-01 a HU-23) y 4 tareas técnicas (T-01 a T-04). Las anteriores son representativas de cada épica.

---

## 5. Tablero de seguimiento

- **Herramienta:** GitHub Projects.
- **Enlace público:** https://github.com/users/ignacio-heim/projects/2
- **Miembros incluidos:** Ignacio Heim.
- **Docente invitado:** sergiod.medina@davinci.edu.ar (con acceso al tablero).
- **Estado:** tablero configurado como público.

Columnas del tablero: **Backlog · To Do · In Progress · Code Review · Done**, con límite WIP en "In Progress".

---

## 7. Estimaciones

Estimación por **story points** con escala de Fibonacci (1, 2, 3, 5, 8, 13), asignados por planning poker.

| HU | Descripción | Puntos | Prioridad |
|---|---|---|---|
| HU-01 | Crear actividad | 8 | Alta |
| HU-02 | Explorar actividades | 5 | Alta |
| HU-03 | Login / registro | 3 | Alta |
| HU-04 | Ver detalle de actividad | 3 | Alta |
| HU-05 | Unirse a una actividad | 5 | Alta |
| HU-06 | Confirmar asistencia | 3 | Media |
| HU-07 | Lista de espera | 5 | Media |
| HU-08 | Avisos / notificaciones | 8 | Media |
| HU-09 | Perfil de usuario | 3 | Media |
| HU-10 | Reputación | 5 | Baja |
| HU-12 | Mapa / geolocalización | 8 | Media |
| HU-13 | División de costos | 5 | Baja |

**Total estimado del set:** 61 puntos. Con una velocidad estimada de ~20 puntos por sprint, se planifican 3 sprints para cubrir los tres milestones.

---

## 8. Asignación de responsables

| Ítem | Responsable | Milestone |
|---|---|---|
| HU-01 Crear actividad | Heim | M1 |
| HU-02 Explorar actividades | Heim | M1 |
| HU-03 Login / registro | Heim | M1 |
| HU-04 Ver detalle | Heim | M1 |
| HU-05 Unirse | Heim | M2 |
| HU-06 Confirmar asistencia | Heim | M2 |
| HU-07 Lista de espera | Heim | M2 |
| HU-08 Avisos | Heim | M2 |
