/*
- Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
- Cada nombre debe estar en una línea, alineado a la izquierda.
- El marco está construido con * y tiene un borde de una línea de ancho.
- La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.
*/
const nombres = createFrame(['Rodrigo', 'Ana', 'Pedro']);

function createFrame(names) {
    const largoNombres = Math.max(...names.map(name => name.length));
    const largoBorde = largoNombres + 4;
    const borde = '*'.repeat(largoBorde);

    const cuadro = names.map(name => {
        const padName = name.padEnd(largoNombres, ' ');
        return `* ${padName} *`
    })

    const marco = [borde, ...cuadro, borde].join('\n');
    return marco
}

console.log(nombres)
