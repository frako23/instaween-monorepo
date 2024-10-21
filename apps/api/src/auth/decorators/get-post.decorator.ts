import {
  createParamDecorator,
  ExecutionContext,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

export const GetPostId = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    const postId = req.params[data] || req.params.postId; // Puedes usar data para obtener propiedades adicionales si lo necesitas.

    if (!postId) {
      throw new NotFoundException('Post ID not found in request');
    }

    return postId; // Retorna el postId directamente
  },
);
