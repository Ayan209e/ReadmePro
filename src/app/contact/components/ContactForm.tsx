"use client";
import React from "react";
import { Button, Input, Toast } from "../../../../ui";
import { FormField, FormValues, useContactForm } from "./useContactForm";

export const ContactForm = () => {
  const {
    showToast,
    isSending,
    error,
    success,
    formRef,
    formFields,
    formValues,
    formErrors,
    handleChange,
    handleSubmit,
  } = useContactForm();

  const renderFormField = ({
    id,
    label,
    component: Component = Input,
    placeholder,
  }: FormField) => (
    <Component
      error={formErrors[id as keyof FormValues]}
      id={id}
      key={id}
      label={label}
      name={id}
      onChange={(e) => handleChange(id, e.target.value)}
      placeholder={placeholder}
      value={formValues[id as keyof FormValues]}
    />
  );

  return (
    <>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        name="contact"
        autoComplete="off"
        className="bg-white py-8 px-6 shadow rounded-lg sm:px-10 border border-gray-100 space-y-6"
      >
        {formFields.map(renderFormField)}

        <div className="flex justify-center mt-8">
          <Button disabled={isSending} type="submit">
            Submit
          </Button>
        </div>
      </form>

      {(showToast || error) && (
        <Toast
          message={success ?? error ?? ""}
          variant={success ? "success" : "error"}
        />
      )}
    </>
  );
};
