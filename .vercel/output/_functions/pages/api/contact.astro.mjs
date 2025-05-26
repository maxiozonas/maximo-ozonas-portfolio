import nodemailer from 'nodemailer';
export { renderers } from '../../renderers.mjs';

const prerender = false;
async function POST({ request }) {
  try {
    const formData = await request.json();
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Please provide all required fields"
        }),
        { status: 400 }
      );
    }
    const emailUser = undefined                          ;
    const emailPass = undefined                                  ;
    if (!emailUser || !emailPass) {
      console.error("Email environment variables not set");
      return new Response(
        JSON.stringify({
          success: false,
          message: "Server configuration error. Please contact the administrator."
        }),
        { status: 500 }
      );
    }
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass
      }
    });
    const mailOptions = {
      from: `"Portfolio Contact" <${emailUser}>`,
      to: "maxiozonas10@gmail.com",
      subject: `New Contact from Portfolio: ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact from Your Portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <div style="background-color: #f7f7f7; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <h3 style="margin-top: 0;">Message:</h3>
            <p style="white-space: pre-line;">${message}</p>
          </div>
        </div>
      `
    };
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({
        success: true,
        message: "Email sent successfully"
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to send email",
        error: error.message
      }),
      { status: 500 }
    );
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
