import { useState } from "react";
import "./FAQ.css";
import faqBanner from "../assets/hero.jpg";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you provide?",
      answer:
        "We provide professional and reliable services designed to meet the needs of our customers.",
    },
    {
      question: "How can I contact you?",
      answer:
        "You can contact us through our Contact page, phone number, or email.",
    },
    {
      question: "How long does it take to receive a response?",
      answer:
        "We usually respond to inquiries as soon as possible during our business hours.",
    },
    {
      question: "Do you provide customized solutions?",
      answer:
        "Yes, we can provide solutions based on your specific requirements.",
    },
    {
      question: "How can I get started?",
      answer:
        "Simply contact us and our team will guide you through the next steps.",
    },
    {
      question: "Do you offer support after the service?",
      answer:
        "Yes, our team is available to assist you with any questions or support you may need.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* FAQ Banner */}
      <section
        className="faq-banner"
        style={{ backgroundImage: `url(${faqBanner})` }}
      >
        <div className="faq-banner-overlay">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to your most common questions</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-container">

         

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                className={`faq-item ${
                  activeIndex === index ? "active" : ""
                }`}
                key={index}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>
                    {String(index + 1).padStart(2, "0")}. {faq.question}
                  </span>

                  <span className="faq-icon">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>

                {activeIndex === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

export default FAQ;