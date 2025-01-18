function organizeInventory(inventory) {

    const result = {};

    // Iteramos sobre cada elemento del array 'inventory'
    inventory.forEach(({ name, quantity, category }) => {
        // Utilizamos desestructuración para extraer las propiedades 'name', 'quantity' y 'category'

        // Si la categoría aún no existe en el objeto 'result', la inicializamos como un objeto vacío
        if (!result[category]) {
            result[category] = {};
        }

        // Verificamos si el juguete ('name') ya existe dentro de esta categoría
        // Si existe, sumamos su cantidad actual ('quantity') a la cantidad acumulada
        // Si no existe, inicializamos su cantidad con el valor actual de 'quantity'
        result[category][name] = (result[category][name] || 0) + quantity;
        // Explicación:
        // - `result[category][name] || 0`: Si 'result[category][name]' tiene un valor (ya existe), lo usamos; de lo contrario, usamos '0'.
        // - Le sumamos el valor actual de 'quantity' para actualizar la cantidad acumulada del juguete.
    });

    return result;
}

const inventory = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
];

console.log(organizeInventory(inventory));