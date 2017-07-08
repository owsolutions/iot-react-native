export function normalaizeValue (value) {
    if (typeof value === 'boolean') {
        return value ? 'ON' : 'OFF';
    }
    return value;
}