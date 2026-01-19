"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number")
    .optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(500),
  agree: z.boolean().refine((val) => val === true, "You must agree to terms"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      agree: false,
    },
  });

  const watchMessage = watch("message");

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to submit");

      setSuccess(true);
      reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Name field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Name *
        </label>
        <input
          id="name"
          type="text"
          {...register("name")}
          className={`mt-1 block w-full rounded-md border ${
            errors.name ? "border-red-500" : "border-gray-300"
          } px-3 py-2`}
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-600">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email Address *
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          autoComplete="email"
          className={`mt-1 block w-full rounded-md border ${
            errors.email ? "border-red-500" : "border-gray-300"
          } px-3 py-2`}
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-600">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Phone field */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1">
          Phone (Optional)
        </label>
        <input
          id="phone"
          type="tel"
          {...register("phone")}
          autoComplete="tel"
          className={`mt-1 block w-full rounded-md border ${
            errors.phone ? "border-red-500" : "border-gray-300"
          } px-3 py-2`}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1 text-sm text-red-600">
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* Message field with character count */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message * ({(watchMessage?.length || 0)}/500)
        </label>
        <textarea
          id="message"
          rows={4}
          maxLength={500}
          {...register("message")}
          className={`mt-1 block w-full rounded-md border ${
            errors.message ? "border-red-500" : "border-gray-300"
          } px-3 py-2`}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-600">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Agree checkbox */}
      <div>
        <label className="flex items-center">
          <input
            type="checkbox"
            {...register("agree")}
            className="mr-2"
            aria-required="true"
            aria-invalid={!!errors.agree}
          />
          <span className="text-sm">
            I agree to the terms and conditions *
          </span>
        </label>
        {errors.agree && (
          <p className="mt-1 text-sm text-red-600">{errors.agree.message}</p>
        )}
      </div>

      {/* Error message */}
      {error && (
        <p className="text-red-500 text-sm" role="alert">
          {error}
        </p>
      )}

      {/* Success message */}
      {success && (
        <p className="text-green-500 text-sm" role="alert">
          Form submitted successfully!
        </p>
      )}

      {/* Submit button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full px-4 py-2 rounded-md text-white ${
          isSubmitting
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-[#FFD700] hover:bg-[#FFC700] text-black shadow-md"
        }`}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
