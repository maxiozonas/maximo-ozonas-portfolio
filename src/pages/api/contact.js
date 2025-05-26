import nodemailer from 'nodemailer';

// Asegurarse de que esta página se renderice en el servidor
export const prerender = false;

// Definir la función para manejar solicitudes POST
export async function POST({ request }) {
  try {
    const formData = await request.json();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Please provide all required fields',
        }),
        { status: 400 }
      );
    }

    // Obtener variables de entorno
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_APP_PASSWORD;

    // Verificar variables de entorno
    if (!emailUser || !emailPass) {
      console.error('Email environment variables not set');
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Server configuration error: Email credentials not found.',
          debug: { hasUser: !!emailUser, hasPass: !!emailPass }
        }),
        { status: 500 }
      );
    }

    // Configuración para Gmail optimizada para entornos serverless
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
      // Deshabilitar verificación TLS en entornos serverless
      tls: {
        rejectUnauthorized: false
      }
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${emailUser}>`,
      to: 'maxiozonas10@gmail.com',
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
      `,
    };

    // Enviar email con manejo de errores más detallado
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Email sent successfully',
        messageId: info.messageId
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);    
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Failed to send email',
        error: error.message,
        stack: process.env.NODE_ENV !== 'production' ? error.stack : undefined
      }),
      { status: 500 }
    );
  }
}
