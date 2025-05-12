import Mailjet from 'node-mailjet';

// Define the expected response structure
interface MailjetResponse {
  Messages: Array<{
    Status: string;
    To: Array<{
      Email: string;
      MessageUUID: string;
      MessageID: string;
      MessageHref: string;
    }>;
  }>;
}

export async function sendEmail(options: {
  to: string;
  from: string;
  subject: string;
  html: string;
  text: string;
}): Promise<boolean> {
  try {
    const mailjet = Mailjet.apiConnect(
      process.env.MAILJET_API_KEY || '',
      process.env.MAILJET_SECRET_KEY || ''
    );

    // Create the request payload with proper typing
    const requestPayload = {
      Messages: [
        {
          From: {
            Email: options.from,
            Name: options.from.split('@')[0]
          },
          To: [
            {
              Email: options.to,
              Name: options.to.split('@')[0]
            }
          ],
          Subject: options.subject,
          TextPart: options.text,
          HTMLPart: options.html
        }
      ]
    };
    // Example in your route.ts or mailjet-service.ts
console.log("[DEBUG] Sending email with Mailjet...");
//console.log("Request Payload:", { to, from, subject });
    // Make the request with type assertion
    const response = await (mailjet
      .post('send', { version: 'v3.1' })
      .request(requestPayload)) as unknown as { body: MailjetResponse };

    return response.body.Messages[0].Status === "success";
  } catch (error) {
    console.error('Mailjet error:', error);
    return false;
  }
}