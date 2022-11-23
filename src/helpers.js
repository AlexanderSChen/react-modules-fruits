// Choose random fruit from array
function choice(items) {
    let idx = Math.floor(Math.random() * items.length);
    return items[idx];
}

// Return copy of array without specified fruit if it exists, if not return undefined
function remove(item, items) {
    for(let i = 0; i < items.length; i++) {
        if(items[i] === item) {
            return [...items.slice(0, i), ...items.slice(i + 1)]
        }
    }
}

export {choice, remove}