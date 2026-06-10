const viajes = [
  { conductor: 'Ana', distancia: 50, estado: 'completado' },
  { conductor: 'Luis', distancia: 120, estado: 'completado' },
  { conductor: 'Ana', distancia: 30, estado: 'completado' },
  { conductor: 'Luis', distancia: 40, estado: 'cancelado' }
];

// Tu objetivo: Crear una función agruparViajes(datos) que retorne:
// {
//   Ana: { totalViajes: 2, kilometros: 80 },
//   Luis: { totalViajes: 1, kilometros: 120 } // Ignorando los cancelados
// }

function agruparViajes(array){
    const agrupar = viajes
        .filter(item => item.estado === 'completado')
        .reduce((sum,item) => sum + item.conductor,0 )
    return agrupar;
}

console.log(agruparViajes(viajes))