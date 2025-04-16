
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
export async function sendEmail(email: Email): Promise<void> {
  const response = await fetch("/api/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email),
  });
  if (!response.ok) {
    const errorData = await response.json();
    if (errorData && errorData.error) {
      throw new Error(`Email sending failed: ${errorData.error}`);
    } else {
      throw new Error(`Email sending failed with status: ${response.status}`);
    }
  }
  //if success do nothing
  // You can add more logic here if the API returns a message or id.
  
}
