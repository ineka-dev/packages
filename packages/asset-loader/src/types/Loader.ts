import type { Asset } from './Asset';

export interface Loader {
  /**
   * Loads the file and returns an asset.
   * @async
   * @param {string} file File to load.
   * @virtual
   */
  load: (file: string) => Promise<Asset>;
}
