const shapes = [
  { id: 1, type: 'triangle', vertices: [[0,0], [5,0], [2.5, 5]] },
  { id: 2, type: 'square', vertices: [[0,0], [4,0], [4,4], [0,4]] },
  { id: 3, type: 'line', vertices: [[0,0], [10,10]] }
];


function vertices(shapes){
    let array = [];
    for(let i=0; i<shapes.length; i++){
        if(shapes[i].vertices.length >= 3){
            array.push({
                id: shapes[i].id,
                type: shapes[i].type,
                contador: shapes[i].vertices.length
            });
        }
    }
    return array;
}

const result = vertices(shapes);
console.log(result);