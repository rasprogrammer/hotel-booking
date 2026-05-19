// app/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

// Simple carousel component for the hero slider
const HeroSlider = () => {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format",
      title: "Luxury Redefined",
      subtitle: "Experience the finest hospitality at Grand Graphs Resort"
    },
    {
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format",
      title: "Exclusive Getaway",
      subtitle: "Relax and rejuvenate in our world-class suites"
    },
    {
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format",
      title: "Unmatched Elegance",
      subtitle: "Every detail crafted for your comfort"
    }
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-2xl">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={idx === 0}
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h2>
              <p className="text-lg md:text-xl">{slide.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm p-2 rounded-full hover:bg-white/50 transition"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm p-2 rounded-full hover:bg-white/50 transition"
      >
        ❯
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition ${
              idx === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// Accordion component for FAQ
const AccordionItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left font-semibold text-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span className="text-2xl">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};

export default function Home() {
  // Room data
  const rooms = [
    {
      title: "Deluxe Ocean View",
      description: "Spacious room with panoramic ocean views, king bed, marble bathroom.",
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format",
      rate: "$299"
    },
    {
      title: "Executive Suite",
      description: "Luxury suite with separate living area, workspace, and premium amenities.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format",
      rate: "$459"
    },
    {
      title: "Family Garden Room",
      description: "Perfect for families, garden access, two queen beds, kids' play area.",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2070&auto=format",
      rate: "$379"
    }
  ];

  const offers = [
    {
      title: "Weekend Getaway",
      description: "Stay 2 nights, get 1 free + complimentary breakfast.",
      validUntil: "Valid until Dec 31, 2025",
      discount: "Save 25%"
    },
    {
      title: "Spa & Stay Package",
      description: "Full spa treatment for two + luxury accommodation.",
      validUntil: "Valid until Mar 30, 2026",
      discount: "Inclusive rate $599"
    }
  ];

  const amenities = [
    { name: "Infinity Pool", icon: "🏊", desc: "Heated outdoor pool" },
    { name: "Fitness Center", icon: "💪", desc: "24/7 modern gym" },
    { name: "Fine Dining", icon: "🍽️", desc: "Michelin-starred restaurant" },
    { name: "Spa & Wellness", icon: "💆", desc: "Full-service spa" },
    { name: "Concierge", icon: "🛎️", desc: "Personalized service" },
    { name: "Beach Access", icon: "🏖️", desc: "Private beach club" }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1584132967330-5fcd95b9573a?q=80&w=2070&auto=format",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format",
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format",
    "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2070&auto=format"
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Business Traveler",
      text: "Exceptional service and stunning views. The team went above and beyond to make my stay memorable.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Family Vacation",
      text: "Our kids loved the pool and the family suite was spacious. Will definitely return!",
      rating: 5
    },
    {
      name: "Emma Williams",
      role: "Spa Enthusiast",
      text: "The spa experience was world-class. Combined with the ocean view room, it was pure bliss.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "What are the check-in and check-out times?",
      answer: "Check-in is from 3:00 PM and check-out is until 11:00 AM. Early check-in and late check-out are subject to availability and may incur additional charges."
    },
    {
      question: "Does the hotel offer airport shuttle service?",
      answer: "Yes, we offer complimentary airport shuttle service for guests staying 3 nights or more. Please contact our concierge at least 24 hours in advance to arrange."
    },
    {
      question: "Is there free Wi-Fi available?",
      answer: "Complimentary high-speed Wi-Fi is available throughout the resort for all guests."
    },
    {
      question: "What dining options are available on site?",
      answer: "We have three restaurants: The Grand Terrace (international buffet), Ocean Grill (seafood), and Saffron (Indian specialty). Room service is available 24/7."
    },
    {
      question: "Do you allow pets?",
      answer: "We welcome pets under 15kg in select rooms for an additional cleaning fee of $50 per night."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-[#b2f2bb] w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl">
              GG
            </div>
            <span className="text-xl font-bold text-gray-800">Grand Graphs Resort</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="hover:text-green-600 transition">Home</a>
            <a href="#rooms" className="hover:text-green-600 transition">Rooms</a>
            <a href="#offers" className="hover:text-green-600 transition">Offers</a>
            <a href="#gallery" className="hover:text-green-600 transition">Gallery</a>
            <a href="#contact" className="hover:text-green-600 transition">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition">
              Join
            </button>
            <button className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
              Sign in
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Slider Section */}
        <section className="container mx-auto px-4 py-8">
          <HeroSlider />
        </section>

        {/* Booking Bar / Welcome Area */}
        <section className="container mx-auto px-4 py-8">
          <div className="bg-[#b2f2bb]/20 rounded-2xl p-6 md:p-8">
            {/* Three rectangles + book button */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                <label className="text-sm font-medium text-gray-600">Check-in</label>
                <input type="date" className="w-full mt-1 p-2 border rounded-md" />
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                <label className="text-sm font-medium text-gray-600">Check-out</label>
                <input type="date" className="w-full mt-1 p-2 border rounded-md" />
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                <label className="text-sm font-medium text-gray-600">Guests</label>
                <select className="w-full mt-1 p-2 border rounded-md">
                  <option>1 Adult</option>
                  <option>2 Adults</option>
                  <option>2 Adults + 1 Child</option>
                  <option>3 Adults</option>
                  <option>4 Adults</option>
                </select>
              </div>
              <div className="flex items-end">
                <button className="w-full bg-black text-white py-2 px-4 rounded-xl font-semibold hover:bg-gray-800 transition">
                  Book Now
                </button>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                Welcome to Grand Graphs Resort,
              </h1>
              <p className="text-xl text-gray-600">Auto Graph Collections</p>
              <div className="w-24 h-0.5 bg-gray-300 mx-auto mt-4"></div>
              <div className="w-48 h-0.5 bg-gray-300 mx-auto mt-2"></div>
            </div>
          </div>
        </section>

        {/* Rooms & Suites Section */}
        <section id="rooms" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Rooms & Suites</h2>
          <div className="w-20 h-1 bg-[#b2f2bb] mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((room, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="relative h-64">
                  <Image src={room.image} alt={room.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{room.title}</h3>
                  <p className="text-gray-600 mb-4">{room.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-700">{room.rate}</span>
                    <span className="text-green-600 font-medium">/ night</span>
                  </div>
                  <div className="mt-4 flex gap-3">
                    <button className="flex-1 bg-[#b2f2bb] text-gray-800 py-2 rounded-lg font-semibold hover:bg-[#9ae0a3] transition">
                      Guest room →
                    </button>
                    <button className="flex-1 border border-gray-300 py-2 rounded-lg font-semibold hover:bg-gray-50 transition">
                      View Rates
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Offers & Packages Section */}
        <section id="offers" className="container mx-auto px-4 py-16 bg-gray-50">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Offers & Packages</h2>
          <div className="w-20 h-1 bg-[#b2f2bb] mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {offers.map((offer, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">{offer.title}</h3>
                  <span className="bg-[#b2f2bb] px-3 py-1 rounded-full text-sm font-semibold">{offer.discount}</span>
                </div>
                <p className="text-gray-600 mb-3">{offer.description}</p>
                <p className="text-sm text-gray-500 mb-4">{offer.validUntil}</p>
                <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Amenities Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center tracking-wide mb-2">
            FEATURED AMENITIES ON SITE
          </h2>
          <div className="flex justify-center gap-2 mb-12">
            <div className="w-12 h-0.5 bg-gray-400"></div>
            <div className="w-24 h-0.5 bg-gray-400"></div>
            <div className="w-12 h-0.5 bg-gray-400"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {amenities.map((amenity, idx) => (
              <div key={idx} className="text-center p-4 rounded-xl hover:shadow-md transition">
                <div className="text-5xl mb-3">{amenity.icon}</div>
                <h3 className="font-semibold text-lg">{amenity.name}</h3>
                <p className="text-sm text-gray-500">{amenity.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="container mx-auto px-4 py-16 bg-gray-50">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="relative h-64 rounded-xl overflow-hidden shadow-md group">
                <Image src={img} alt={`Gallery ${idx + 1}`} fill className="object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <span className="bg-white/80 px-4 py-2 rounded-full text-sm font-semibold">View</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#b2f2bb] rounded-full flex items-center justify-center font-bold text-lg">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-16 bg-gray-50">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
            Frequently asked questions
          </h2>
          <div className="w-24 h-1 bg-[#b2f2bb] mx-auto mb-12"></div>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer / Quick Links */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Grand Graphs Resort</h3>
              <p className="text-gray-400">Luxury redefined on the pristine coastline. Experience unparalleled hospitality and breathtaking views.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#rooms" className="hover:text-white transition">Rooms & Suites</a></li>
                <li><a href="#offers" className="hover:text-white transition">Offers</a></li>
                <li><a href="#gallery" className="hover:text-white transition">Gallery</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📍 123 Coastal Drive, Maldives</li>
                <li>📞 +960 123 4567</li>
                <li>✉️ stay@grandgraphs.com</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <div className="flex gap-2">
                <input type="email" placeholder="Your email" className="flex-1 px-4 py-2 rounded-lg text-gray-900" />
                <button className="bg-[#b2f2bb] text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-[#9ae0a3] transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            &copy; 2025 Grand Graphs Resort. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}