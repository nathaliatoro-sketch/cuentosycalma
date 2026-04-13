import EmotionalBlock from "@/components/EmotionalBlock";

const recursos = [
  {
    icon: "🃏",
    title: "Tarjetas de emociones",
    description:
      "Imprime y recorta estas tarjetas para que tu hijo pueda señalar cómo se siente incluso cuando no tiene palabras.",
    color: "bg-rosa/15",
  },
  {
    icon: "📋",
    title: "Guía de vocabulario emocional",
    description:
      "Lista de palabras emocionales para usar a diario, ordenadas por edad y situación.",
    color: "bg-verde/20",
  },
  {
    icon: "🌙",
    title: "Ritual nocturno PDF",
    description:
      "Una secuencia de 10 minutos para cerrar el día emocionalmente bien. Ideal para antes de dormir.",
    color: "bg-lila/20",
  },
  {
    icon: "🎨",
    title: "Cuaderno de emociones (imprimible)",
    description:
      "Páginas para colorear y completar que ayudan a los niños a explorar su mundo interior.",
    color: "bg-azul/20",
  },
];

export default function RecursosPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="font-playfair text-4xl font-bold text-gray-800 mb-4 text-center">
        Recursos
      </h1>
      <p className="font-poppins text-gray-500 text-center mb-14 max-w-xl mx-auto">
        Herramientas prácticas descargables para acompañar el día a día
        emocional en casa.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {recursos.map((r) => (
          <EmotionalBlock key={r.title} {...r} />
        ))}
      </div>
      <div className="bg-beige border border-rosa/30 rounded-2xl p-8 text-center">
        <p className="font-playfair text-xl font-semibold text-gray-700 mb-3">
          ¿Quieres acceso a todos los recursos?
        </p>
        <p className="font-poppins text-sm text-gray-500 mb-6">
          Los miembros de la comunidad tienen acceso ilimitado a todos los
          materiales descargables.
        </p>
        <a
          href="/comunidad"
          className="inline-block rounded-full px-8 py-3 bg-rosa text-white font-poppins font-medium text-sm hover:bg-rosa/80 transition-all"
        >
          Unirte a la comunidad
        </a>
      </div>
    </div>
  );
}
