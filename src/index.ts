/**
 * A utility class for generating random numbers
 */
class RandomGenerator {
  /**
   * Generates a random number between min and max (inclusive)
   * @param min - The minimum value (default: 0)
   * @param max - The maximum value (default: 100)
   * @returns A random number between min and max
   */
  public static getRandomNumber(min: number = 0, max: number = 100): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

export default RandomGenerator;
