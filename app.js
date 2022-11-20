let importacionBicis = require('./datosBicis.js')
let dhBici ={
    listado: importacionBicis,
    buscarBici: function(id){
        let bicicletaEncontrada = this.listado.filter(function(bici){
            return  bici.id == id;
        });
        if(bicicletaEncontrada.length > 0){
          return  bicicletaEncontrada
        }
        else{
            return null
        }
    },
    venderBici: function(id){
      let biciVendida = this.buscarBici(id)
        if(biciVendida.length > 0){
            biciVendida[0].vendida = true;
 }      else{
            return 'bici no encontrada'
 }
        return biciVendida
},
biciParalaVenta: function(){
    const biciEnVenta = this.listado.filter(bici =>{
        return bici.vendida === false
    })
    return biciEnVenta
},
totalDeVentas: function(){
    return this.listado.filter((acum, bici)=>{
        
        if(bici.vendida === true){
            return acum += bici.precio;
        }
        else{
         return acum
        }
    },0 )
}
        
     
    }






