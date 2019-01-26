export function countFrequency(arr: (string | number)[]) {
    const count = {};
    arr.forEach(elem => {
        count[elem] = count[elem] ? count[elem] + 1 : 1;
    });
    return count;
}
