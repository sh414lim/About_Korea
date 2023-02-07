import { Injectable } from '@nestjs/common';
import { EmailOptions } from 'joi';
import * as nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { Imail } from './mail.interface';
@Injectable()
export class MailService {
  private transporter: Mail;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'sh414lim@gmail.com',
        pass: 'b2b47b8a65ef5bf4e0df4210cd305468',
      },
    });
  }

  async sendMemberJoinVerification(
    emailAddress: string,
    signupVerifyToken: string,
  ) {
    const baseUrl = 'http://localhost:8000';

    const url = `${baseUrl}/users/email-verify?signupVerifyToken=${signupVerifyToken}`;

    const mailOptions: Imail = {
      to: emailAddress,
      subject: '가입 인증 메일',
      html: `
          가입확인 버튼를 누르시면 가입 인증이 완료됩니다.<br/>
          <form action="${url}" method="POST">
            <button>가입확인</button>
          </form>
        `,
    };
    // transporter 객체를 이용해 메일 전송
    return await this.transporter.sendMail(mailOptions);
  }
}
