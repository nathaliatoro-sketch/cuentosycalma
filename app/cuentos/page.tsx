import StoryBlock from "@/components/StoryBlock";

const cuentos = [
  {
    title: "Caperucitas de colores",
    summary:
      "Una historia sobre una niña que tiene días de diferentes colores según cómo se siente. Un cuento para nombrar las emociones y entender que todas tienen un lugar.",
    activity:
      "Dibujen juntos el color de hoy. ¿De qué color es tu día? ¿Qué le pasó a Caperucita en ese color?",
    href: "/cuentos/caperucitas-de-colores",
  },
  {
    title: "Alfred y los 7 gatos",
    summary:
      "Alfred es un niño que tiene 7 gatos, uno por cada emoción. Cuando una emoción es muy grande, el gato correspondiente crece mucho. Un cuento sobre la regulación y el equilibrio emocional.",
    activity:
      "Dibuja a Alfred y sus gatos. ¿Cuál gato está grande hoy en tu casa? ¿Qué podemos hacer para que se relaje?",
    href: "/cuentos/alfred-y-los-7-gatos",
  },
];

export default function CuentosPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="font-playfair text-4xl font-bold text-gray-800 mb-4 text-center">
        Cuentos Terapéuticos
      </h1>
      <p className="font-poppins text-gray-500 text-center mb-14 max-w-xl mx-auto">
        Historias que acompañan. Cada cuento trabaja una emoción de forma suave,
        con actividades para hacer juntos.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cuentos.map((c) => (
          <StoryBlock key={c.title} {...c} />
        ))}
      </div>
    </div>
  );
}
