# Ejercicio práctico — Desarrollador Full Stack

Autor: Marcelino Benavides L

Este repositorio es el punto de partida común para todos los candidatos. No lo modifiques en su estructura base; trabaja sobre él.

## Qué evaluamos

No medimos cuánto código produces, sino **el orden en que lo construyes** y **qué consideras "terminado"**. Revisaremos tu historial de commits, así que su limpieza importa.

## Requisitos del entorno

- Node.js 20 o superior (recomendado 22 LTS).
- pnpm como gestor (estándar del equipo). Si no lo tienes: `npm i -g pnpm`. Los comandos funcionan también con npm.

## Preparación

```bash
pnpm install
pnpm test        # corre las pruebas una vez
pnpm test:watch  # corre las pruebas en modo observación
pnpm typecheck   # verifica tipos sin compilar
```

Debes ver pasar la prueba de ejemplo en `src/domain/__tests__/smoke.test.ts`. Ese archivo solo muestra el estilo esperado de aserción; puedes borrarlo.

## Parte A — Regla de negocio con pruebas primero

**Regla a implementar:** ningún `Deal` (oportunidad de venta) puede existir sin un `Lead` (prospecto) asociado.

**Estado actual:** en `src/domain/repository.ts`, el método `createDeal` permite crear un Deal aunque su Lead no exista. Es intencional: eso es lo que debes corregir.

**Proceso requerido (esto es lo que se evalúa):**

1. Inicializa git y haz un commit inicial con este esqueleto tal cual.
2. Tu **primer commit** sobre el esqueleto debe ser una **prueba en rojo** que demuestre que crear un Deal sin un Lead existente falla, y que **no queda un Deal huérfano** en el estado.
3. Tu **segundo commit** debe ser el código mínimo que pone esa prueba en verde.

No agregues la validación antes de tener la prueba en rojo.

Tu prueba debe verificar el **efecto real**: tras el intento fallido, `getDeals()` debe seguir vacío. No basta con comprobar que se lanzó un error.

## Parte B — Investigación de causa raíz

Escenario: una prueba pasa en verde, pero al calificar un Lead, el Deal se crea en la etapa equivocada del pipeline. El equipo te pide resolverlo.

Escribe tu plan de acción en `parte-b-causa-raiz.md`: ¿cuál es tu primer paso y por qué?

## Convenciones del repositorio

- TypeScript estricto. Sin `any`, sin `@ts-ignore`.
- Identificadores en inglés, comentarios en español.
- Commits pequeños y descriptivos.

## Instrucciones de entrega

Trabaja en tu propia cuenta de GitHub. No necesitas acceso a ningún repositorio nuestro.

**Si recibiste un repositorio plantilla:** úsalo con la opción "Use this template" para crear tu propio repositorio privado, y trabaja ahí. El esqueleto ya quedó como commit inicial; a partir de ahí, tus commits.

**Si recibiste un archivo .zip:** descomprímelo e inicializa el control de versiones tú mismo:

```bash
cd ejercicio-fullstack-sunroad
git init
git add .
git commit -m "chore: esqueleto inicial del ejercicio"
```

A partir de ese commit inicial, recuerda el orden requerido en la Parte A:

```bash
# 1) tu primer commit: la prueba en rojo
git add src/domain/__tests__/<tu-prueba>.test.ts
git commit -m "test: un Deal no puede crearse sin Lead (rojo)"

# 2) tu segundo commit: el codigo que la pone en verde
git add src/domain/repository.ts
git commit -m "feat: createDeal exige un Lead existente (verde)"
```

Antes de entregar:

- [ ] `pnpm test` pasa
- [ ] `pnpm typecheck` pasa
- [ ] Completaste `parte-b-causa-raiz.md`
- [ ] El historial de commits es visible y refleja el orden prueba -> codigo

**Qué compartir y con quién:** sube tu repositorio a GitHub (privado) y da acceso de lectura a `mbenavides@sunroadauto.mx`. Luego comparte el enlace del repositorio en el documento de evaluación que se te entregó.

## Tiempo sugerido

60 a 90 minutos. No es contra reloj.

## Después de la entrega

Tras revisar tu repositorio, podríamos agendar una sesión breve (~15 min) para que nos expliques tus commits y, si aplica, agregues una prueba pequeña en vivo. No requiere preparación; es para conversar sobre tu proceso.
