import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, business, email, phone, category, budget, items } = body;

    // Validate required fields
    if (!name || !business || !email || !phone || !category || !items) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail
        pass: process.env.EMAIL_APP_PASSWORD, // Gmail App Password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'montymhango01@gmail.com',
      replyTo: email,
      subject: `New Quotation Request from ${name} - ${business}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Quotation Request</title>
          </head>
          <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f8fafc;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; padding: 40px 20px;">
              <tr>
                <td align="center">
                  <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                    
                    <!-- Header -->
                    <tr>
                      <td style="background: linear-gradient(135deg, #06b6d4 0%, #2563eb 100%); padding: 40px; text-align: center;">
                        <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">New Quotation Request</h1>
                        <p style="margin: 10px 0 0 0; color: #e0f2fe; font-size: 16px;">AGP Contact Form Submission</p>
                      </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                      <td style="padding: 40px;">
                        
                        <!-- Contact Information -->
                        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                          <tr>
                            <td style="padding-bottom: 20px;">
                              <h2 style="margin: 0 0 20px 0; color: #0f172a; font-size: 20px; font-weight: 600; border-bottom: 2px solid #06b6d4; padding-bottom: 10px;">Contact Information</h2>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <table width="100%" cellpadding="8" cellspacing="0">
                                <tr>
                                  <td width="140" style="color: #64748b; font-size: 14px; font-weight: 600;">Name:</td>
                                  <td style="color: #0f172a; font-size: 14px; font-weight: 500;">${name}</td>
                                </tr>
                                <tr>
                                  <td width="140" style="color: #64748b; font-size: 14px; font-weight: 600;">Business:</td>
                                  <td style="color: #0f172a; font-size: 14px; font-weight: 500;">${business}</td>
                                </tr>
                                <tr>
                                  <td width="140" style="color: #64748b; font-size: 14px; font-weight: 600;">Email:</td>
                                  <td style="color: #0f172a; font-size: 14px;"><a href="mailto:${email}" style="color: #06b6d4; text-decoration: none;">${email}</a></td>
                                </tr>
                                <tr>
                                  <td width="140" style="color: #64748b; font-size: 14px; font-weight: 600;">Phone:</td>
                                  <td style="color: #0f172a; font-size: 14px;"><a href="tel:${phone}" style="color: #06b6d4; text-decoration: none;">${phone}</a></td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        
                        <!-- Request Details -->
                        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                          <tr>
                            <td style="padding-bottom: 20px;">
                              <h2 style="margin: 0 0 20px 0; color: #0f172a; font-size: 20px; font-weight: 600; border-bottom: 2px solid #06b6d4; padding-bottom: 10px;">Request Details</h2>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <table width="100%" cellpadding="8" cellspacing="0">
                                <tr>
                                  <td width="140" style="color: #64748b; font-size: 14px; font-weight: 600;">Category:</td>
                                  <td style="color: #0f172a; font-size: 14px; font-weight: 500;">
                                    <span style="background-color: #ecfeff; color: #0891b2; padding: 4px 12px; border-radius: 20px; font-size: 13px; font-weight: 600;">${category}</span>
                                  </td>
                                </tr>
                                ${budget ? `
                                <tr>
                                  <td width="140" style="color: #64748b; font-size: 14px; font-weight: 600;">Budget:</td>
                                  <td style="color: #0f172a; font-size: 14px; font-weight: 500;">MWK ${budget}</td>
                                </tr>
                                ` : ''}
                              </table>
                            </td>
                          </tr>
                        </table>
                        
                        <!-- Items Needed -->
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding-bottom: 20px;">
                              <h2 style="margin: 0 0 20px 0; color: #0f172a; font-size: 20px; font-weight: 600; border-bottom: 2px solid #06b6d4; padding-bottom: 10px;">Items Needed</h2>
                            </td>
                          </tr>
                          <tr>
                            <td style="background-color: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #06b6d4;">
                              <p style="margin: 0; color: #334155; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${items}</p>
                            </td>
                          </tr>
                        </table>
                        
                      </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                      <td style="background-color: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
                        <p style="margin: 0 0 10px 0; color: #64748b; font-size: 13px;">
                          Received: ${new Date().toLocaleString('en-US', { 
                            dateStyle: 'full', 
                            timeStyle: 'short',
                            timeZone: 'Africa/Blantyre'
                          })}
                        </p>
                        <p style="margin: 0; color: #94a3b8; font-size: 12px;">
                          © ${new Date().getFullYear()} Apex Global Procurement. All rights reserved.
                        </p>
                      </td>
                    </tr>
                    
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again.' },
      { status: 500 }
    );
  }
}