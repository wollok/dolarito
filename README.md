## dolarito

Este es un "juego" que utiliza métodos nativos para acceder a internet y consultar una api pública.

Dada la característica asincrónica de los request en node, y que los métodos nativos son generadores
sincrónicos, es necesario utilizar dos métodos nativos: uno para realizar el request y guardar la
información utilizando `then()`, y otro para ir a consultar periódicamente hasta que el resultado esté
disponible.

La api consultada muestra el precio de la cotización del dólar y no está relacionada de ninguna manera
con el proyecto wollok.



