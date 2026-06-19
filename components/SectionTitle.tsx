interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">{title}</h2>
      {subtitle && <p className="text-gray-600 text-lg dark:text-gray-300">{subtitle}</p>}
    </div>
  );
}