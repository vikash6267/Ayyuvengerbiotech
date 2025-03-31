import { FaPills, FaHeart, FaLeaf } from "react-icons/fa";

const OfferCard = ({ icon: Icon, title, coupon }) => {
  return (
    <div className="bg-green-100 shadow-lg rounded-2xl p-4 flex items-center gap-4 hover:shadow-xl transition-all">
      <div className="bg-green-500 text-white p-3 rounded-full">
        <Icon size={24} />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-green-800">{title}</h3>
        <p className="text-green-700">{coupon}</p>
      </div>
    </div>
  );
};

const OffersSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-green-50">
      <OfferCard icon={FaPills} title="Order Medicine" coupon="Use MED25 & get 25% off" />
      <OfferCard icon={FaHeart} title="Beauty" coupon="Use BEAUTY40 & get 40% off" />
      <OfferCard icon={FaLeaf} title="Wellness" coupon="Use WELL60 & get 60% off" />
    </div>
  );
};

export default OffersSection;