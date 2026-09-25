import React, { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    message: "",
  });

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((v) => ({ ...v, [key]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="contact-row">
        <label>
          Nom
          <input value={form.nom} onChange={update("nom")} placeholder="Doe" />
        </label>
        <label>
          Prénom
          <input
            value={form.prenom}
            onChange={update("prenom")}
            placeholder="John"
          />
        </label>
      </div>
      <label>
        Email
        <input
          type="email"
          value={form.email}
          onChange={update("email")}
          placeholder="john@doe.com"
        />
      </label>
      <label>
        Message
        <textarea
          value={form.message}
          onChange={update("message")}
          placeholder="J’aimerai travailler avec toi sur un projet..."
        />
      </label>
      <button className="contact-submit" type="submit">
        Envoyer
      </button>
      {sent && <p className="contact-success">Message prêt à être envoyé.</p>}
    </form>
  );
}
