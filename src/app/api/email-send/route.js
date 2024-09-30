import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { company_name, your_name, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'zafarekhlaque@gmail.com',
        pass: 'fyrf lhjh ipws crmv', // Use your actual password or App Password
      },
    });

    const mailOptions = {
      from: email,
      to: 'zekhlaque@kloudrac.com',
      subject: 'New Contact Form Submission',
      replyTo: email,
      text: `
        Company Name: ${company_name}
        Name: ${your_name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <p><strong>Company Name:</strong> ${company_name}</p>
        <p><strong>Name:</strong> ${your_name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
}


// export async function POST(request) {
//   try {
//     const { name, email, message } = await request.json();

//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: 'zafarekhlaque@gmail.com',
//         pass: 'fyrf lhjh ipws crmv', // Use your actual password or App Password
//       },
//     });

//     const mailOptions = {
//       from: email,
//       to: 'zekhlaque@kloudrac.com',
//       subject: 'New Contact Form Submission',
//       replyTo: email,
//       text: `
//         Name: ${name}
//         Email: ${email}
//         Message: ${message}
//       `,
//       html: `
//         <p><strong>Company Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Message:</strong> ${message}</p>
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     return new Response(JSON.stringify({ success: true }), { status: 200 });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
//   }
// }