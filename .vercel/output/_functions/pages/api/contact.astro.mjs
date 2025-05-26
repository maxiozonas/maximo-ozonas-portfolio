import nodemailer from 'nodemailer';
export { renderers } from '../../renderers.mjs';

// Asegurarse de que esta página se renderice en el servidor
const prerender = false;

// Definir la función para manejar solicitudes POST
async function POST({ request }) {
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
    const emailUser = "maxiozonas10@gmail.com";
    const emailPass = "tviz wisu hhvl jqux";

    // Verificar variables de entorno
    if (!emailUser || !emailPass) ;

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
    // For debugging, let's always include the stack trace in the response
    // and provide more details if possible.
    const errorResponse = {
      success: false,
      message: 'Failed to send email. See error details.',
      errorDetails: {
        name: error.name,
        message: error.message,
        stack: error.stack, // Always include stack for debugging
        // You can add more properties from the error object if they exist
      }
    };
    if (error.response) { // Nodemailer specific error details
      errorResponse.errorDetails.nodemailerResponse = error.response;
      errorResponse.errorDetails.nodemailerResponseCode = error.responseCode;
    }

    return new Response(
      JSON.stringify(errorResponse),
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
