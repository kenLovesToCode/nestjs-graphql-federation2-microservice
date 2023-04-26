import { UnauthorizedException } from '@nestjs/common';

export const authContext = ({ req }) => {
  if (req.headers?.authorization) {
    //validate jwt
    return { user: { id: '001' } };
  }
  throw new UnauthorizedException();
};
