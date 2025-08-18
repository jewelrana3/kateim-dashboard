// components/Testimonials.tsx

import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Ahmed",
    title: "Business Owner",
    testimonial:
      "This platform made hiring so simple. I found a skilled web developer in less than a day, and the project was completed ahead of schedule.",
    image: "https://i.ibb.co.com/93Cb6KpS/Rectangle-5.png",
  },
  {
    name: "David Khan",
    title: "Startup Founder",
    testimonial:
      "This platform saved us time and money. The secure payment system and verified talent gave me complete peace of mind.",
    image: "https://i.ibb.co.com/93Cb6KpS/Rectangle-5.png",
  },
  {
    name: "Emily Roberts",
    title: "Event Planner",
    testimonial:
      "From searching to hiring, everything was smooth and simple. I’ll definitely use it again for my future projects and it's very excellent.",
    image: "https://i.ibb.co.com/93Cb6KpS/Rectangle-5.png",
  },
];

export default function OurClients() {
  return (
    <section className="my-5 p-4 bg-white text-center max-w-7xl mx-auto rounded-md ">
      <h2 className="text-3xl font-semibold mb-12 ">What Our Clients Say</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8  px-4">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className={`bg-white shadow-md rounded-lg p-6 w-full max-w-sm ${
              index === 1 && "mb-32"
            }`}
          >
            <div className="relative w-full h-48 mb-4 overflow-hidden">
              <Image
                src={t.image}
                alt={t.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="text-lg font-semibold">{t.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{t.title}</p>
            <p className="text-sm text-gray-700 mb-4">{t.testimonial}</p>
            <div className="flex justify-center">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.3 3.993a1 1 0 00.95.69h4.213c.969 0 1.371 1.24.588 1.81l-3.408 2.475a1 1 0 00-.364 1.118l1.3 3.993c.3.921-.755 1.688-1.538 1.118l-3.408-2.475a1 1 0 00-1.176 0L5.59 17.126c-.783.57-1.838-.197-1.538-1.118l1.3-3.993a1 1 0 00-.364-1.118L1.58 8.42c-.783-.57-.38-1.81.588-1.81h4.213a1 1 0 00.95-.69l1.3-3.993z" />
                  </svg>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
