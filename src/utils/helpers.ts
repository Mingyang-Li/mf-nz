export type PxToNumberArgs = `${number}px`;
/**
 * Takes a pixel in string format then return the numeric value of pixels
 * @argument PxToNumberArgs
 * @example pxToNumber('100px') -> returns 100
 * @returns number
 */
export const pxToNumber = (s: PxToNumberArgs) => {
  return parseInt(s.slice(0, s.indexOf('px')));
};
