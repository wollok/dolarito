let resultado:string | undefined

const dolarApi = {
  *request(this: any, self: any) : any {
    resultado = undefined
    try {
      buscarCotizacion((res: string) => {
        resultado = res
      })
    }
    catch (error) {
      resultado = `Error: ${error}`
    }
  },

  *response(this:any, self:any): any {
    return this.reify(resultado)
  },
}

function buscarCotizacion(callback: (resultado: string) => void): void {
  const apiUrl = 'https://api.bluelytics.com.ar/v2/latest'

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        callback(`Error ${response}`)
        return
      }
      return response.json()
    })
    .then(data => {
      const compraBlue = data.blue.value_buy
      const ventaBlue = data.blue.value_sell
      callback(`Dólar Blue - Compra: $${compraBlue}, Venta: $${ventaBlue}`)
    })
    .catch(error => {
      callback(`Error: ${error}`)
    })
}


export { dolarApi }