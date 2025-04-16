
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
    if (errorData.error) {
      throw new Error(`Email sending File: ${errorData.error}`);
    } else {
      throw new Error(`Email sending File with status: ${response.status}`);
    }
  }

  return true;
}

