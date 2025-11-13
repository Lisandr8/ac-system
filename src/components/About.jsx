import React from "react";

export default function About() {
  const aboutCards = [
    {
      icon: "bi bi-clipboard-check",
      title: "Certified Technicians",
      description:
        "Our team is fully certified and trained to handle all types of A/C systems.",
    },
    {
      icon: "bi bi-tag",
      title: "Affordable Pricing",
      description:
        "We offer competitive pricing without compromising on quality.",
    },
    {
      icon: "bi bi-clock",
      title: "Timely Service",
      description:
        "We value your time and ensure prompt service for all your A/C needs.",
    },
    {
      icon: "bi bi-hand-thumbs-up",
      title: "Satisfaction Guaranteed",
      description: "We stand behind our work with a satisfaction guarantee.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white text-gray-900"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">
            Why <span className="text-sky-600">Choose Us?</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            We provide expert air conditioning repair and maintenance services
            to keep you cool and comfortable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutCards.map((card, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-sky-50 border border-sky-100 text-center 
                         hover:bg-sky-100 hover:shadow-xl transition-all duration-300"
            >
              <i className={`${card.icon} text-5xl text-sky-600 mb-4`}></i>
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
