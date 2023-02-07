import { Inject, Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { CONFIG_OPTIONS } from 'src/common/common.constants';
import { JwtModuleOptions } from './jwt.interfaces';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtService {
  constructor(
    @Inject(CONFIG_OPTIONS) private readonly options: JwtModuleOptions,
    private readonly configService: ConfigService,
  ) {}

  sign(userId: number): string {
    return jwt.sign({ id: userId }, this.configService.get('PRIVATE_KEY'));
  }

  allProjectSign(payload: object): string {
    // other project use
    return jwt.sign(payload, this.configService.get('PRIVATE_KEY'));
  }

  //암호 해동
  verify(token: string) {
    return jwt.verify(token, this.options.privateKey);
  }
}
