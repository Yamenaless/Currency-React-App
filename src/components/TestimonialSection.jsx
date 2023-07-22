import React from "react";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      company: "ABC Inc.",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit quam a orci dictum, eu varius nisi rhoncus.",
    },
    {
      id: 2,
      name: "Jane Smith",
      company: "XYZ Corp.",
      testimonial:
        "Nulla nec consectetur ligula. In iaculis mauris eget elit consectetur, ut rhoncus nunc dignissim.",
    },
    {
      id: 3,
      name: "Bob Johnson",
      company: "123 Co.",
      testimonial:
        "Fusce eleifend nulla vel dictum feugiat. Proin scelerisque odio et dolor congue consequat.",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={`https://i.pravatar.cc/100?u=${testimonial.id}`}
                    alt={testimonial.name}
                  />
                </div>
                <div className="ml-3">
                  <div className="text-sm font-medium text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
              <p className="text-gray-500 mt-4">{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
