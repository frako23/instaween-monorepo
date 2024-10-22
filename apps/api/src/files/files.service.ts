import { BadGatewayException, Injectable } from '@nestjs/common';
import { existsSync } from 'fs';
import { join } from 'path';

@Injectable()
export class FilesService {
  getStaticProductImage(imageName: string) {
    const path = join(__dirname, '../../static/post', imageName);

    if (!existsSync(path))
      throw new BadGatewayException(`Not post found with image ${imageName}`);

    return path;
  }
}
