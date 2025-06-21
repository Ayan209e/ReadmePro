import { useRef, useState } from "react";
import { Input, TextArea } from "../../../../ui";
import { useEmail } from "../../../../core";

export type FormField = {
  id: string;
  label: string;
  placeholder: string;
  component?: typeof Input | typeof TextArea;
};

export type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const formFields: FormField[] = [
  { id: "name", label: "Name", placeholder: "Your name" },
  { id: "email", label: "Email", placeholder: "email@example.com" },
  { id: "subject", label: "Subject", placeholder: "Subject" },
  {
    id: "message",
    label: "Message",
    component: TextArea,
    placeholder: "Your message here...",
  },
];

export const useContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [showToast, setShowToast] = useState(false);
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<
    Partial<Record<keyof FormValues, string>>
  >({});

  const { sendEmail, isSending, error, success } = useEmail();

  const handleChange = (id: string, value: string) => {
    setFormValues((prev) => ({
      ...prev,
      [id]: value,
    }));

    setFormErrors((prev) => ({
      ...prev,
      [id]: "",
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm(formValues);

    if (Object.keys(validationErrors).length > 0) {
      setFormErrors(validationErrors);
      return;
    }

    console.log("Form submitted with values:", formValues);
    setFormErrors({});

    if (!formRef.current) return;
    const success = await sendEmail(formRef.current);
    if (success) {
      setShowToast(true);
      setFormValues({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  return {
    isSending,
    error,
    success,
    formRef,
    formFields,
    formValues,
    formErrors,
    handleChange,
    handleSubmit,
    showToast,
  };
};

const validateForm = (values: FormValues) => {
  const newErrors: Partial<Record<keyof FormValues, string>> = {};

  if (!values.name.trim()) {
    newErrors.name = "Name is required";
  }

  if (!values.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    newErrors.email = "Please enter a valid email address";
  }

  if (!values.subject.trim()) {
    newErrors.subject = "Subject is required";
  }

  if (!values.message.trim()) {
    newErrors.message = "Message is required";
  }

  return newErrors;
};
