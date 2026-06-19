import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

function sanitize(str: string): string {
  return (str || '').trim().replace(/[<>&"']/g, '');
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    let { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email and message are required' },
        { status: 400 }
      );
    }

    name = sanitize(name);
    email = sanitize(email);
    message = sanitize(message);

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const currentTime = new Date().toLocaleString('en-NG', {
      timeZone: 'Africa/Lagos',
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    // Send email to me - my gmail inbox
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #ffffff; border-radius: 12px; border: 1px solid #e5e7eb;">
          <h2 style="color: #2563eb; margin: 0 0 20px;">New Contact Message [ From Your Portfolio ]</h2>
          
          <table style="width: 100%; margin-bottom: 20px;">
            <tr><td style="padding: 8px 0; font-weight: 600;">Name:</td><td>${name}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 600;">Email:</td><td><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; font-weight: 600;">Received:</td><td>${currentTime} WAT</td></tr>
          </table>

          <div style="background: #f9fafb; padding: 16px; border-radius: 8px; white-space: pre-wrap; line-height: 1.6;">
            ${message.replace(/\n/g, '<br>')}
          </div>

          <p style="margin-top: 24px; font-size: 13px; color: #6b7280;">
            Sent via dev.Temilorun portfolio • ${new Date().getFullYear()}
          </p>
        </div>
      `,
    });

    // Send confirmation email back to user
    await transporter.sendMail({
      from: `"dev.Temilorun 🤍" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank you for reaching out!',
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #ffffff; border-radius: 12px; border: 1px solid #e5e7eb;">
          <h2 style="color: #2563eb; margin: 0 0 20px;">Hey ${name},</h2>
          
          <p style="line-height: 1.6; margin: 0 0 16px;">
            Thank you so much for getting in touch! 💙
          </p>
          
          <p style="line-height: 1.6; margin: 0 0 16px;">
            I really appreciate you taking the time to reach out. I've received your message and will get back to you as soon as possible — usually within 24 hours (often much faster).
          </p>
          
          <p style="line-height: 1.6; margin: 0 0 24px;">
            Talk soon!<br/>
            <em>WhatsApp? <a href="https://wa.me/2347031225674">Click here</a></em><br/>
            <strong>dev.Temilorun 🤍</strong><br/>
            <small>Full-Stack Developer & Designer</small>
          </p>

          <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 24px 0;" />

          <p style="font-size: 13px; color: #6b7280; text-align: center;">
            This is an automated reply. Your message is safe with me.
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully! Check your inbox for confirmation.',
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Contact form error:', error.message || error);

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to send message. Please try again later or contact me directly via X @dev_Temilorun',
      },
      { status: 500 }
    );
  }
}