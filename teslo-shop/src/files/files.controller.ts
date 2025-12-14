import {
  BadRequestException,
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';

import { FileInterceptor } from '@nestjs/platform-express';
import { FilesService } from './files.service';
import { diskStorage } from 'multer';
import { fileFilter, fileNamer } from './helpers';
import type { Response } from 'express';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter: fileFilter,
      limits: { fileSize: 1024 * 1024 * 5 }, // 5MB
      storage: diskStorage({
        destination: './static/uploads',
        filename: fileNamer,
      }),
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('File is empty or unsupported file type');
    }

    const { filename } = file;

    return { filename };
  }

  @Get('image/:name')
  findImage(@Res() res: Response, @Param('name') name: string) {
    const path = this.filesService.getStaticFile(name);

    res.sendFile(path);
  }
}
