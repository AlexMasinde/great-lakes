import { useState } from "react";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit() {
    e.preventDefault();

    console.log({ email, phone, message });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className=" bg-white p-6 rounded-md shadow-md"
    >
      <div className="mb-4">
        <label htmlFor="email" className="block  font-extralight mb-2">
          Email<span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#ffcc00]"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block  font-extralight mb-2">
          Phone<span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#ffcc00]"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block  font-extralight mb-2">
          Message<span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#ffcc00]"
        ></textarea>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="] border border-[#555555] px-4 py-2 rounded-md font-extralight "
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
