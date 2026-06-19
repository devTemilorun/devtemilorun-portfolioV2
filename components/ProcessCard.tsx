interface ProcessCardProps {
  number: string;
  title: string;
  description: string;
}

export default function ProcessCard({ number, title, description }: ProcessCardProps) {
  return (
    <div className="border-l-4 border-black pl-6 transition-all duration-300 hover:pl-8">
      <span className="text-4xl font-bold text-gray-300">{number}</span>
      <h3 className="text-2xl font-bold text-black mt-2 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}