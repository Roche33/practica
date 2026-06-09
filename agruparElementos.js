const files = [
  { name: 'house.skp',    type: '3d'  },
  { name: 'logo.png',     type: 'img' },
  { name: 'notes.txt',    type: 'doc' },
  { name: 'office.skp',   type: '3d'  },
  { name: 'banner.png',   type: 'img' },
];

// Tu solución:
function groupByType(files) {
    const array = {};

    for(x = 0 ; x < files.length; x++){
        const file = files[x];
        const type = file.type;

        if (!array[type]) {
            array[type] = [];
        }
        array[type].push(file);
    }

    return array;
}

console.log(groupByType(files));

// Esperado:
// {
//   '3d':  [{ name: 'house.skp',  type: '3d'  }, { name: 'office.skp', type: '3d'  }],
//   'img': [{ name: 'logo.png',   type: 'img' }, { name: 'banner.png', type: 'img' }],
//   'doc': [{ name: 'notes.txt',  type: 'doc' }],
// }