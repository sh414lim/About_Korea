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
[
  {
    MODULE_NAME: '나의 정보',
    MODULE_ORDER: '1',
    MODULE_IDX: '4877',
    MODULE_OPTION: {},
    MODULE_INPUT: [
      {
        id: 'in1',
        pid: '',
        name: '이름 (국문)',
        type: 'f_text',
        order: '1',
        option: {
          max: '',
          width: '',
          useCommon: 'true',
          placeholder: '',
          chars: 'KENS',
          html: { attr: '' },
          commonCode: 'contact_nm_kor',
          need: 'true',
          min: '',
        },
        size: '2',
        saved: true,
      },
      {
        id: 'in2',
        pid: '',
        name: '이름 (Full Name)',
        type: 'f_text',
        order: '2',
        option: {
          width: '',
          chars: 'KENS',
          commonCode: 'contact_nm_eng',
          useCommon: 'true',
          placeholder: '',
          html: { attr: '' },
          max: '',
          need: 'true',
          min: '',
        },
        size: '2',
        saved: true,
      },
      {
        id: 'in3',
        pid: '',
        name: '이름 (First Name)',
        type: 'f_text',
        order: '3',
        option: {
          placeholder: '',
          chars: 'KENS',
          html: { attr: '' },
          max: '',
          width: '',
          min: '',
          useCommon: 'true',
          commonCode: 'contact_nm_eng_first',
          need: 'true',
        },
        size: '2',
        saved: true,
      },
      {
        id: 'in4',
        pid: '',
        name: '이름 (Last Name)',
        type: 'f_text',
        order: '4',
        option: {
          min: '',
          max: '',
          placeholder: '',
          commonCode: 'contact_nm_eng_last',
          html: { attr: '' },
          chars: 'KENS',
          useCommon: 'true',
          width: '',
          need: 'true',
        },
        size: '2',
        saved: true,
      },
      {
        id: 'in5',
        pid: '',
        name: '국적',
        type: 'f_select',
        order: '5',
        option: {
          html: { attr: '' },
          sourceURL: '',
          useCode: 'true',
          code: 'NATION',
          need: 'true',
        },
        size: '1',
        saved: true,
      },
      {
        id: 'in6',
        pid: '',
        name: '부서 (국문)',
        type: 'f_text',
        order: '6',
        option: {
          width: '',
          chars: 'KENS',
          placeholder: '',
          html: { attr: '' },
          useCommon: 'true',
          max: '',
          min: '',
          commonCode: 'contact_dep_kor',
          need: 'true',
        },
        size: '2',
        saved: true,
      },
      {
        id: 'in7',
        pid: '',
        name: '부서 (영문)',
        type: 'f_text',
        order: '7',
        option: {
          min: '',
          placeholder: '',
          useCommon: 'true',
          chars: 'KENS',
          html: { attr: '' },
          commonCode: 'contact_dep_eng',
          max: '',
          width: '',
          need: 'true',
        },
        size: '2',
        saved: true,
      },
      {
        id: 'in8',
        pid: '',
        name: '직위 (국문)',
        type: 'f_text',
        order: '8',
        option: {
          need: 'true',
          max: '',
          placeholder: '',
          chars: 'KENS',
          useCommon: 'true',
          min: '',
          width: '',
          commonCode: 'contact_pos_kor',
          html: { attr: '' },
        },
        size: '2',
        saved: true,
      },
      {
        id: 'in9',
        pid: '',
        name: '직위 (영문)',
        type: 'f_text',
        order: '9',
        option: {
          need: 'true',
          useCommon: 'true',
          html: { attr: '' },
          min: '',
          commonCode: 'contact_pos_eng',
          max: '',
          placeholder: '',
          width: '',
          chars: 'KENS',
        },
        size: '2',
        saved: true,
      },
      {
        id: 'in10',
        pid: '',
        name: '유선전화',
        type: 'f_text',
        order: '10',
        option: {
          commonCode: 'contact_tel',
          html: { attr: '' },
          placeholder: '',
          chars: 'KENS',
          width: '',
          max: '',
          need: 'true',
          min: '',
          useCommon: 'true',
        },
        size: '2',
        saved: true,
      },
      {
        id: 'in11',
        pid: '',
        name: '휴대전화',
        type: 'f_text',
        order: '11',
        option: {
          min: '',
          width: '',
          max: '',
          commonCode: 'contact_mobile',
          chars: 'KENS',
          html: { attr: '' },
          useCommon: 'true',
          need: 'true',
          placeholder: '',
        },
        size: '2',
        saved: true,
      },
      {
        id: 'in12',
        pid: '',
        name: '이메일',
        type: 'f_email',
        order: '12',
        option: {
          placeholder: '',
          width: '35',
          useCommon: 'true',
          need: 'true',
          html: { attr: '' },
          commonCode: 'contact_email',
        },
        size: '1',
        saved: true,
      },
      {
        id: 'in13',
        pid: '',
        name: '프로필 사진',
        type: 'f_file',
        order: '13',
        option: {
          ext: 'jpg;png;gif',
          sizeMaxNum: '40',
          sizeMaxUnit: 'MB',
          html: { attr: '' },
          fileMax: '',
          fileMin: '',
        },
        size: '1',
        saved: true,
      },
    ],
  },
];
