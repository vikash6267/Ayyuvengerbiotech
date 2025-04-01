import { Activity, Heart, Shield, Zap } from "lucide-react";

export default function HealthcareOffers() {
  const offers = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Authentic Products",
      description: "All products are sourced directly from manufacturers",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Quality Assurance",
      description: "Rigorous quality checks for all medical supplies",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Delivery",
      description: "Express shipping for critical medical needs",
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Expert Consultation",
      description: "Free consultation with healthcare professionals",
    },
  ];

  return (
    <section className="py-12 bg-green-50 w-11/12 mx-auto">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-6">
                {offer.icon}
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">{offer.title}</h3>
              <p className="text-sm text-gray-600">{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
