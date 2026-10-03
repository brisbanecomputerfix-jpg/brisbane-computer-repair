import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, phone, email, model } = data;

    // Validate inputs
    if (!name || !phone) {
      return NextResponse.json(
        { success: false, message: "Name and phone are required." },
        { status: 400 }
      );
    }

    // Configure the SMTP transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "localhost",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Basic HTML escaping to prevent XSS injection in email clients
    const escapeHtml = (str: string) => str ? str.replace(/[&<>'"]/g, 
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    ) : 'Not provided';

    const htmlContent = `
      <h2>New Quote Request</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Model/Serial:</strong> ${escapeHtml(model)}</p>
    `;

    // Try sending email if SMTP is configured
    if (process.env.SMTP_HOST && process.env.SMTP_USER) {
      await transporter.sendMail({
        from: process.env.SMTP_FROM || '"Website Contact" <no-reply@computerrepair1.com>',
        to: process.env.CONTACT_EMAIL || 'fix@computerrepair1.com',
        subject: `New Lead: Repair request from ${name}`,
        html: htmlContent,
      });
    } else {
      // Fallback for local development if no SMTP config is present
      console.log("=============================");
      console.log("🚀 NEW LEAD RECEIVED (Email not configured)");
      console.log(`Name:  ${name}`);
      console.log(`Phone: ${phone}`);
      console.log(`Email: ${email}`);
      console.log(`Model: ${model}`);
      console.log("=============================");
    }

    return NextResponse.json({ success: true, message: "Quote request successfully transmitted." });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
