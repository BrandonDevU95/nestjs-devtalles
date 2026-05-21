import {
  ExecutionContext,
  InternalServerErrorException,
  createParamDecorator,
} from '@nestjs/common';

export const RowHeaders = createParamDecorator(
  (data, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    const headers = req.headers;

    if (!headers)
      throw new InternalServerErrorException('Headers not found in request');

    return (data ? headers[data] : headers) || null;
  },
);
