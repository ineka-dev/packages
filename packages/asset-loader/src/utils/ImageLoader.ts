import type { Loader } from '../types/Loader';
import type { Asset } from '../types/Asset';

/**
 * Image loader using an Image element.
 */
export class ImageLoader implements Loader {
  public async load(file: string) {
    return new Promise<Asset>((resolve) => {
      const image = new Image();
      image.addEventListener('load', () => {
        // Create the asset.
        const asset: Asset = {
          id: '1',
          filepath: file,
          element: image,
        };
        // Resolve the promise when loaded.
        resolve(asset);
      });
      image.addEventListener('error', (err) => {
        // TODO: Throw a real error when engine errors are done.
        console.error(err);
      });
      // Set image source to the given file.
      image.src = file;
    });
  }
}
