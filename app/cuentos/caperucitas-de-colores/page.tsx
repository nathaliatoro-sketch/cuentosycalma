import CTAButton from "@/components/CTAButton";

const scenes = [
  {
    color: "bg-rosa/20",
    emoji: "🌸",
    title: "El día rosado",
    text: "Caperucita se despertó y todo le parecía suave y bonito. El rosado es el color del amor, la alegría tranquila y el abrazo de mamá.",
  },
  {
    color: "bg-azul/20",
    emoji: "🌧️",
    title: "El día azul",
    text: "Hoy Caperucita se sentía triste. El azul no es malo, es el color de las lágrimas que necesitan salir. Y eso está bien.",
  },
  {
    color: "bg-verde/20",
    emoji: "🌿",
    title: "El día verde",
    text: "El verde llegó cuando Caperucita se calmó después de la tormenta. Verde es calma, respiración, el bosque después de la lluvia.",
  },
  {
    color: "bg-lila/20",
    emoji: "✨",
    title: "Todos los colores son bienvenidos",
    text: "Al final del día, Caperucita aprendió que no hay colores malos. Todas las emociones dicen algo importante. Solo hay que escucharlas.",
  },
];

export default function CuentoCaperucitasPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <p className="font-poppins text-sm text-rosa uppercase tracking-widest mb-2">
        Cuento terapéutico
      </p>
      <h1 className="font-playfair text-4xl font-bold text-gray-800 mb-6">
        Caperucitas de colores
      </h1>
      <p className="font-poppins text-gray-600 leading-relaxed mb-12">
        Una historia sobre una niña que vive días de diferentes colores según
        cómo se siente. Un cuento para nombrar las emociones y entender que
        todas tienen un lugar.
      </p>

      <div className="flex flex-col gap-6 mb-14">
        {scenes.map((s) => (
          <div key={s.title} className={`${s.color} rounded-2xl p-6`}>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{s.emoji}</span>
              <h3 className="font-playfair text-xl font-semibold text-gray-800">
                {s.title}
              </h3>
            </div>
            <p className="font-poppins text-sm text-gray-600 leading-relaxed">
              {s.text}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-azul/20 rounded-2xl p-6 mb-12">
        <p className="font-poppins text-xs font-semibold text-gray-500 uppercase mb-2">
          Actividad madre-hijo
        </p>
        <p className="font-poppins text-sm text-gray-700 leading-relaxed">
          Dibujen juntos el color de hoy. ¿De qué color es tu día? ¿Qué le pasó
          a Caperucita en ese color? ¿Hay algo que tu cuerpo necesita ahora?
        </p>
      </div>

      <CTAButton href="/cuentos">← Volver a los cuentos</CTAButton>
    </div>
  );
}
