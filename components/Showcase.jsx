import Carousel from "@/components/Carousel";

const SLIDES = [
  {
    src: "/images/Starlight-agriconnect.png",
    alt: "AgriConnect agritech platform",
    title: "AgriConnect",
    caption: "An agritech platform with credit scoring, repayment tracking, and risk monitoring.",
  },

   {
    src: "/images/Starlight-marketplace.png",
    alt: "Starlight Marketplace",
    title: "Starlight Marketplace",
    caption: "A marketplace for connecting farmers with buyers and suppliers.",
  },
  {
    src: "/images/founders-fund.png",
    alt: "Founders Fund equity management platform",
    title: "Founders Fund",
    caption: "Equity management with role-based permissions and live ownership visualizations.",
  },
  {
    src: "/images/debtpadi.png",
    alt: "DebtPadi debt tracking app",
    title: "DebtPadi",
    caption: "Debt and credit tracking built for small business owners.",
  },
];

export default function Showcase() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-xs uppercase tracking-widest text-purple-300 mb-3">Work we&apos;ve delivered</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Real products, not mockups</h2>
      </div>

      <div className="max-w-3xl mx-auto">
        <Carousel slides={SLIDES} />
      </div>
    </section>
  );
}