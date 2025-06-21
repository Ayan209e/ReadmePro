import { useState } from "react";
import emailjs from "@emailjs/browser";

export const useEmail = () => {
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const sendEmail = async (formRef: HTMLFormElement) => {
    setIsSending(true);
    setError(null);

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        formRef,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
      );
      console.log("Email sent successfully:", result.text);
      setSuccess("Thanks for reaching out...Message sent successfully!");
      return true;
    } catch (err) {
      console.error("Error sending email:", err);
      setError("Failed to send the message. Please try again.");
      return false;
    } finally {
      setIsSending(false);
    }
  };

  return { sendEmail, isSending, error, success };
};
