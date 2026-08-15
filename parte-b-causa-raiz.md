# Parte B — Investigación de causa raíz

Autor del ejercicio: Marcelino Benavides L

Candidato: Osiris Lopez

## Escenario

Una prueba pasa en verde, pero al calificar un Lead, el Deal se crea en la etapa equivocada del pipeline. El equipo te pide resolverlo.

## Tu respuesta

¿Cuál es tu primer paso y por qué? Describe tu plan de acción de principio a fin.

Como primer paso, debo poder reproducir el bug con un test que capture el comportamiento inesperado.
Es posible que la prueba actual no este abarcando correctamente el escenario planteado y no realice la validación correcta.

1. Reproducir el bug: Escribir un test con un conjunto de datos que capture el comportamiento inesperado.

2. Inspeccionar la ruta de datos: Al ejecutar el test, debo seguir el flujo de datos dentro de la función a la que se esta llamando, esto puede indicarme en que parte del flujo se esta afectando.

3. Analizar el código: Revisar el bloque de código que se encuentra en esa ruta de datos, esto puede ayudarme a entender mejor el comportamiento inesperado.

4. Corrección: Una vez identificado en que parte del proceso se está afectando, debo realizar la corrección para permitir que el Deal se cree en la etapa correcta.

5. Prueba: Una vez realizada la corrección, debo correr la prueba que abarca el escenario planteado para asegurarme de que el comportamiento se ha corregido, así como de que no se produzca otro comportamiento inesperado.

6. Documentación: Una vez que se ha corregido el comportamiento, debo documentar el cambio realizado y explicar por qué se ha corregido el comportamiento.
