//creating a Christmas tree with a given height
function drawTree(height) {
    let tree = '';

    for (let i = 1; i <= height; i++) {
        tree += ' '.repeat(height - i) + '*'.repeat(2 * i - 1) + '\n';
    }

    let space_count = height-1;
    let spaces = ' '.repeat(space_count);

    console.log(spaces + tree.trim());
    //я додав let spaces тому що виконую в консолі і без того "головна" зірочка не в центрі
}

drawTree(12);
