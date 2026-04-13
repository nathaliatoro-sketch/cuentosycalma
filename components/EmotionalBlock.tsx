interface EmotionalBlockProps {
  icon: string;
  title: string;
  description: string;
  color?: string;
}

export default function EmotionalBlock({
  icon,
  title,
  description,
  color = "bg-verde/20",
}: EmotionalBlockProps) {
  return (
    <div className={`${color} rounded-2xl p-6 flex flex-col items-start gap-3`}>
      <span className="text-3xl">{icon}</span>
      <h3 className="font-playfair text-lg font-semibold text-gray-800">{title}</h3>
      <p className="font-poppins text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
