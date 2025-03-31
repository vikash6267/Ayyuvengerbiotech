import { FaHeartbeat, FaMicroscope, FaUserMd, FaShieldAlt, FaPhoneAlt } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="bg-green-100 py-12 px-6 lg:px-24">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">About Sangam Health Care</h2>
        <p className="text-gray-700 text-lg text-center mb-6">
          Sangam Health Care is a leading provider of medical solutions, offering high-quality healthcare products and services.
          Dedicated to improving patient care, we focus on innovation, reliability, and affordability.
        </p>
        
        <h3 className="text-2xl font-semibold text-green-500 mt-8 flex items-center gap-2">
          <FaHeartbeat /> Our Mission & Vision
        </h3>
        <p className="text-gray-600 mt-2">
          Our mission is to provide reliable and affordable healthcare solutions that enhance patient well-being. 
          We aim to become a trusted name in the healthcare industry by ensuring quality, innovation, and accessibility.
        </p>
        
        <h3 className="text-2xl font-semibold text-green-500 mt-8 flex items-center gap-2">
          <FaMicroscope /> What We Offer
        </h3>
        <ul className="list-disc pl-6 text-gray-600 mt-2">
          <li>Advanced and durable medical equipment for hospitals and clinics.</li>
          <li>High-precision diagnostic solutions.</li>
          <li>High-quality surgical instruments ensuring precision in medical procedures.</li>
          <li>Essential healthcare consumables required for daily medical operations.</li>
          <li>Customized healthcare solutions tailored to meet specific medical needs.</li>
        </ul>
        
        <h3 className="text-2xl font-semibold text-green-500 mt-8 flex items-center gap-2">
          <FaUserMd /> Why Choose Us?
        </h3>
        <ul className="list-disc pl-6 text-gray-600 mt-2">
          <li><strong>Innovation:</strong> Adopting the latest medical technologies.</li>
          <li><strong>Affordability:</strong> Competitive pricing for all healthcare products.</li>
          <li><strong>Reliability:</strong> A trusted name among medical professionals.</li>
          <li><strong>Customer Support:</strong> A dedicated service team ensuring a seamless experience.</li>
        </ul>
        
        <h3 className="text-2xl font-semibold text-green-500 mt-8 flex items-center gap-2">
          <FaPhoneAlt /> Get in Touch
        </h3>
        <p className="text-gray-600 mt-2">
          For inquiries and further information, please contact Sangam Health Care through our official communication channels.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
