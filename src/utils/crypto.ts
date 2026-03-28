export function encrypt(val:string, shift = 3) {
  return val
    .split('')
    .map(char => String.fromCharCode(char.charCodeAt(0) + shift))
    .join('');
}

export function decrypt(val:string, shift = 3) {
  return val
    .split('')
    .map(char => String.fromCharCode(char.charCodeAt(0) - shift))
    .join('');
}