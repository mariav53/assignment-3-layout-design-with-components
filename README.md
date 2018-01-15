# Ejercicio de evaluación - Sprint 3
El ejercicio consiste en desarrollar una página web de acuerdo a un diseño dado. Habrá que resolver varios puntos:
- Usar CSS Grid
- Resolver interacciones usando JS y transiciones
- Cargar contenido nuevo desde una API  

## 1. Maquetación
En primer lugar vamos a realizar la maquetación sobre un diseño dado:

![imagen design](/images/sprint3-design.png)

- El primer módulo (hero) debe ocupar, como mínimo el alto de la ventana del navegador.
- Usar CSS Grid para el listado de elementos del bloque "3 Reasons To Purchase"


## 2. Interacción
Usar 4 interacciones:
- El menú que sale del lateral
- Cada opción del menú enlaza a su sección correspondiente
- El botón del módulo hero enlaza a la sección siguiente
- El botón del footer sube hasta arriba de la página

## 3. Petición AJAX
Utilizar el servicio que devuelve tres razones extras para el módulo de razones para comprar: https://three-random-reasons-izwfjpgbqm.now.sh/
Cada vez que se pulsa el botón de "More reasons" se deberán pedir 3 nuevas razones y añadirlas al módulo cuando el servidor nos devuelva la respuesta. Las razones deberán añadirse ajustándose al diseño propuesto.

## 4. BONUS
- Efecto hover en botones 'Scroll', 'Go to top' y 'More reasons'.
