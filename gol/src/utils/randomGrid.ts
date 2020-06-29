import { empty2Dgrid } from './empty2Dgrid';

export function randomGrid(size: number) {
  return empty2Dgrid(size, () => (Math.random() > 0.8 ? 1 : 0));
}
