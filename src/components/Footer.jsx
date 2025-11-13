export default function Footer() {
  return (
    <footer id="contact" className="bg-sky-950 text-white">
      <div className="border-t border-white/10 py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Get in Touch</h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              Whether you need service, advice, or a quote — we’re here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
            <div className="text-white/70">
              <p className="font-semibold text-white mb-3 uppercase">
                CoolCar AC
              </p>
              <p className="mb-1">
                Your trusted A/C service provider.
              </p>
              <p className="">
                Keeping you cool, one car at a time.
              </p>
            </div>

            <div className="text-white/70">
              <p className="font-semibold text-white mb-3 uppercase">
                Contact Info
              </p>
              <p className="hover:text-white cursor-pointer transition">
                123 456 7890
              </p>
              <p className="hover:text-white cursor-pointer transition">
                contact@coolcarac.com
              </p>
              <address className="mt-1 text-white/70">
                123 CoolCar St, AC City, CA 12345
              </address>
            </div>

            <div className="text-white/70">
              <p className="font-semibold text-white mb-3 uppercase">Business Hours</p>
              <p>Mon-Fri: 8am - 6pm</p>
              <p>Sat: 9am - 4pm</p>
              <p>Sun: Closed</p>
            </div>

            <div className="text-white/70">
              <p className="font-semibold text-white mb-3 uppercase">
                Quick Links
              </p>
              {["Services", "About Us", "Testimonials", "FAQ"].map((link, i) => (
                <p key={i}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="hover:text-white transition"
                  >
                    {link}
                  </a>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 text-center py-5 text-white/70 text-sm">
        © {new Date().getFullYear()} CoolCar AC. All rights reserved.
      </div>
    </footer>
  );
}
