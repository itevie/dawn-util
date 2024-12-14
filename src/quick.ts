export let randomCodeCharacters = "abcdefghijklmnopqrstuvwxyz".split("");

/**
 * Generates a random code
 * @param length
 * @returns
 */
export function generateCode(length: number): string {
  let result = "";
  for (let i = 0; i != length; i++)
    result +=
      randomCodeCharacters[
        Math.floor(Math.random() * randomCodeCharacters.length)
      ];
  return result;
}

/**
 * Generates a random number given a range
 * @param min Minimum number
 * @param max Maximum number
 * @returns The random number
 */
export function randomFromRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
