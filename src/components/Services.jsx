import img1 from "../assets/imgs/img1.png";
import img2 from "../assets/imgs/img2.png";
import img3 from "../assets/imgs/img3.png";
import img4 from "../assets/imgs/img4.png";

export default function Services() {
  const services = [
    {
      img: img1,
      title: "A/C Inspection",
      description: "Comprehensive A/C system inspections to identify issues early.",
    },
    {
      img: img2,
      title: "Refrigerant Recharge",
      description: "Expert recharge services to restore cooling efficiency.",
    },
    {
      img: img3,
      title: "Component Repair",
      description: "Professional A/C repair to restore system performance.",
    },
    {
      img: img4,
      title: "Leak Detection",
      description: "Advanced detection to find and fix refrigerant leaks.",
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-3">
          Our <span className="text-sky-600">Services</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Reliable automotive A/C services with transparency and quality.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((card, i) => (
          <div
            key={i}
            className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-sky-600 transition-colors">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
