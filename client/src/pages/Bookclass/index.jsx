import { useState } from "react";

const BookClass = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    classType: "Yoga",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Class Booked Successfully for ${formData.name}!`);
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side: Image with Overlay Text */}
      <div className="relative flex-1">
        <img
          src="/assets/bookclass.jpg" // Adjusted path for public directory
          alt="Gym Class"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h2 className="text-white text-3xl font-semibold text-center px-4">
            Book Your Fitness Session Today!
          </h2>
        </div>
      </div>

      {/* Right Side: Booking Form */}
      <div className="flex-1 bg-white p-8 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Reserve Your Spot
        </h2>
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-orange-400 mb-4"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-orange-400 mb-4"
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-orange-400 mb-4"
          />
          <select
            name="classType"
            value={formData.classType}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-orange-400 mb-6"
          >
            <option>Yoga</option>
            <option>Strength Training</option>
            <option>Cardio Blast</option>
            <option>HIIT Workout</option>
          </select>

          <button
            type="submit"
            className="w-full py-3 bg-orange-600 text-white rounded-lg text-xl hover:bg-orange-700 transition duration-300"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookClass;
