import { useState } from "react"

export default function Contact() {
    return (
      <div className="contact-page p-8 max-w-lg mx-auto">
        <h2 className="text-2xl font-bold mb-4">Contato</h2>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Nome" className="form-input" required />
          <input type="email" placeholder="E-mail" className="form-input" required />
          <textarea placeholder="Mensagem" className="form-textarea" required></textarea>
          <button type="submit" className="bg-primary text-white py-2 rounded-md">Enviar</button>
        </form>
      </div>
    );
  }
  