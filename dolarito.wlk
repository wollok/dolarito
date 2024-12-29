import wollok.game.*

object buscando {
  method text() = "BUSCANDO"
  method buscar(owner) { self.error ("Ya estoy buscando")}

  method buscarResultado(owner) {
    const r = dolarApi.response()
    if (r != null) {
      game.removeTickEvent("RESULTADO")
      owner.estado(new Libre(text=r))
    }
  }

}

class Libre {
  var property text = "Apretá enter!"
  method buscar(owner) {
      owner.estado(buscando)
      dolarApi.request()
      game.onTick(1,"RESULTADO", { buscando.buscarResultado(owner) } )
  }

}

object dolarito {

  var property estado = new Libre()
  var property position = game.center()

  method image() = "dolarito.gif"
  method text() = estado.text()

  method buscar() {
    estado.buscar(self)
  }
}

object dolarApi {
  method request() native
  method response() native
}