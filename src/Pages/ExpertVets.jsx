
const vets = [
  { name: "Dr. Emma Carter", specialty: "Canine Health", image: "https://i.postimg.cc/cJh8BZfV/vet1.jpg" },
  { name: "Dr. Liam Wilson", specialty: "Feline Nutrition", image: "https://i.postimg.cc/7Z1SRDyC/vet2.jpg" },
  { name: "Dr. Sophia Lee", specialty: "Cold Weather Care", image: "https://i.postimg.cc/QCfTt2Dk/vet3.jpg" },
];

const ExpertVets = () => (
  <section className="py-16 bg-[#f8f4e1] text-center">
    <h2 className="text-3xl font-bold text-blue-900 mb-10">Meet Our Expert Vets 🩺</h2>
    <div className="grid md:grid-cols-3 gap-8 px-10">
      {vets.map((vet) => (
        <div key={vet.name} className="card bg-white shadow-xl p-5">
          <img src={vet.image} alt={vet.name} className="rounded-full h-40 w-40 mx-auto" />
          <h3 className="mt-4 text-lg font-bold text-blue-900">{vet.name}</h3>
          <p className="text-gray-600">{vet.specialty}</p>
        </div>
      ))}
    </div>
  </section>
);
export default ExpertVets;
