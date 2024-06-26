export function getRandomInt(max: number) {
    return Math.floor(Math.random() * (max + 1));
}

export function getRandomFromList<T>(list: T[]): T {
    const i = getRandomInt(list.length - 1);
    return list[i];
}
