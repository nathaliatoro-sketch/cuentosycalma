import CTAButton from "./CTAButton";

interface StoryBlockProps {
  title: string;
  summary: string;
  activity: string;
  href: string;
}

export default function StoryBlock({
  title,
  summary,
  activity,
  href,
}: StoryBlockProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-4 border border-lila/20">
      <h3 className="font-playfair text-xl font-bold text-lila">{title}</h3>
      <p className="font-poppins text-sm text-gray-600 leading-relaxed">{summary}</p>
      <div className="bg-azul/20 rounded-xl p-4">
        <p className="font-poppins text-xs font-semibold text-gray-500 uppercase mb-1">
          Actividad madre-hijo
        </p>
        <p className="font-poppins text-sm text-gray-700">{activity}</p>
      </div>
      <CTAButton href={href}>Ver cuento</CTAButton>
    </div>
  );
}
