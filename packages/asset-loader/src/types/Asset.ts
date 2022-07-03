export interface Asset {
  /**
   * Asset's ID, generate it with [nanoid](https://github.com/ai/nanoid).
   */
  id: string;
  /**
   * Asset's filepath.
   */
  filepath: string;
  /**
   * Element used to load the asset.
   */
  element?: HTMLElement;
  /**
   * Stringified content.
   */
  content?: string;
}
