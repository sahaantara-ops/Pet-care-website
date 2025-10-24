
const tips = [
  {
    id: 1,
    title: "Keep your pet dry",
    description: "Moisture can cause chills — always towel-dry after walks.",
  },
  {
    id: 2,
    title: "Use paw balm",
    description: "Protect paws from salt and snow with a natural balm.",
  },
  {
    id: 3,
    title: "Adjust outdoor time",
    description: "Short, frequent walks keep pets active without overexposure.",
  },
];

const TipsSection = () => (
  <section className="py-12 bg-[#fff6e9]">
    <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
      Winter Care Tips for Pets 🐾
    </h2>
    <div className="grid md:grid-cols-3 gap-6 px-10">
      {tips.map((tip) => (
        <div key={tip.id} className="card bg-white shadow-lg p-5">
          <h3 className="font-bold text-lg text-blue-900">{tip.title}</h3>
          <p className="mt-2 text-gray-600">{tip.description}</p>
        </div>
      ))}
    </div>
  </section>
);
export default TipsSection;
