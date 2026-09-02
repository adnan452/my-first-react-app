import { useState } from "react";

function ContactForm() {

  const [name, setName] = useState("");

  return (
    <div>

      <h2>Contact Form</h2>

      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h3>Your Name: {name}</h3>

    </div>
  );
}

export default ContactForm;