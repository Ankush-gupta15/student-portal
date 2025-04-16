/**
 * Represents the structure of an email message.
 */
export interface Email {
  /**
   * The recipient's email address.
   */
  to: string;
  /**
   * The subject line of the email.
   */
  subject: string;
  /**
   * The HTML content of the email body.
   */
  html: string;
}

/**
 * Asynchronously sends an email.
 *
 * @param email The email to send.
 * @returns A promise that resolves when the email is sent successfully.
 */
export async function sendEmail(email: Email) {
  const response = await fetch('/api/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(email),
  });

  const responseText = await response.text();
  let errorData;

  try {
    errorData = JSON.parse(responseText);
  } catch {
    // fallback if response is not JSON
    errorData = { error: responseText };
  }

  if (!response.ok) {
    let errorMessage = 'Email sending failed.';
    if (errorData.error) {
      errorMessage += ` ${errorData.error}`;
    }
    if (errorData.details) {
      errorMessage += ` Details: ${errorData.details}`;
    }
    // Add specific instructions for Gmail users
    if (errorMessage.includes('Username and Password not accepted')) {
      errorMessage += `. Please ensure that "Less secure app access" is enabled in your Gmail settings or use an App Password if you have 2-Step Verification enabled.`;
      errorMessage += `\n\nFor Less secure app access, visit: https://myaccount.google.com/lesssecureapps`;
      errorMessage += `\nFor App Passwords, visit: https://myaccount.google.com/apppasswords`;
    }
    throw new Error(`Email sending failed: ${errorMessage}`);
  }

  return true;
}
