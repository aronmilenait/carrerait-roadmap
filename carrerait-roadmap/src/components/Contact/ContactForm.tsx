"use client";
import { useForm, ValidationError } from "@formspree/react";
import { SendHorizontal } from "lucide-react";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

export function ContactForm() {
  const [state, handleSubmit] = useForm(FORMSPREE_ID as string);
  const errorMessageClasses = "text-md text-red-400 mt-2";
  const labelClasses = "block text-md font-medium text-teal-300 mb-2";

  return (
    <section className="bg-gray-900 text-white py-12 px-4 mx-auto">
      <h2 className="text-xl leading-relaxed text-gray-50 text-center mb-12 max-w-2xl mx-auto">
        También podés hacerlo mediante el siguiente formulario:
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
        <div className="relative">
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <div className="relative">
            <input
              id="email"
              type="email"
              name="email"
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600"
              required
            />
          </div>
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className={errorMessageClasses}
          />
        </div>
        <div>
          <label htmlFor="message" className={labelClasses}>
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className={errorMessageClasses}
          />
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full py-3 px-4 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 ease-in-out flex items-center justify-center"
        >
          {state.submitting ? (
            <span className="inline-flex items-center">
              <SendHorizontal className="animate-spin -ml-1 mr-3 text-white" />
              Enviando...
            </span>
          ) : (
            <>
              <SendHorizontal className="mr-2" />
              Enviar
            </>
          )}
        </button>
      </form>
      {state.succeeded && (
        <p className="font-bold text-teal-300 text-center mt-4">
          ¡Gracias por tu mensaje! Pronto vas a tener una respuesta.
        </p>
      )}
    </section>
  );
}
