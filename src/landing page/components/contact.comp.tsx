/* eslint-disable @typescript-eslint/no-explicit-any */
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

const ContactComp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      content: (
        <>
          No. 3 Sam Madu Okoko Close,
          <br />
          Behind Benizia (Core Asaba),
          <br />
          Asaba, Delta State, Nigeria
        </>
      ),
      color: "bg-brand-red",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: (
        <a
          href="tel:+2348037783440"
          className="text-brand-red hover:text-brand-red transition-colors"
        >
          0803 778 3440
        </a>
      ),
      color: "bg-brand-brown",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: (
        <a
          href="mailto:C'estjoliwellspringacademy@gmail.com"
          className="text-brand-red hover:text-brand-red transition-colors wrap-break-words"
        >
          C'estjoliwellspringacademy@gmail.com
        </a>
      ),
      color: "bg-brand-brown",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Office Hours",
      content: (
        <>
          Monday - Friday: 7:30 AM - 4:00 PM
          <br />
          Saturday: 9:00 AM - 1:00 PM
          <br />
          Sunday: Closed
        </>
      ),
      color: "bg-brand-red",
    },
  ];

  return (
    <section id="contact" className="px-4 md:px-6 lg:px-8 py-20 bg-brand-cream">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-4 border border-brand-brown/20">
            <span className="text-sm font-semibold text-brand-brown">
              Contact
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black">
            Get In Touch
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form - Takes 3 columns */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-brand-black mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-brand-cream border border-brand-grey/20 rounded-xl focus:outline-none focus:border-red-500 focus:bg-white transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-brand-black mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-brand-cream border border-brand-grey/20 rounded-xl focus:outline-none focus:border-red-500 focus:bg-white transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-brand-black mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-brand-cream border border-brand-grey/20 rounded-xl focus:outline-none focus:border-red-500 focus:bg-white transition-colors"
                      placeholder="+234 XXX XXX XXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-brand-black mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-brand-cream border border-brand-grey/20 rounded-xl focus:outline-none focus:border-red-500 focus:bg-white transition-colors"
                      placeholder="How can we help?"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-brand-black mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-brand-cream border border-brand-grey/20 rounded-xl focus:outline-none focus:border-red-500 focus:bg-white resize-none transition-colors"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="group w-full px-8 py-4 bg-brand-red text-white font-semibold rounded-xl hover:bg-brand-red transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Contact Information - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`${info.color} w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0`}
                  >
                    {info.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-brand-black mb-2">
                      {info.title}
                    </h3>
                    <div className="text-sm text-brand-grey leading-relaxed">
                      {info.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactComp;
