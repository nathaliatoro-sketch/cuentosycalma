import CTAButton from "@/components/CTAButton";
import EmotionalBlock from "@/components/EmotionalBlock";

const beneficios = [
  {
    icon: "📚",
    title: "Acceso a todos los cursos",
    description:
      "Todos los cursos del catálogo disponibles: actuales y futuros, sin costo adicional.",
    color: "bg-rosa/15",
  },
  {
    icon: "📖",
    title: "Biblioteca de cuentos completa",
    description:
      "Acceso a todos los cuentos terapéuticos, incluyendo los que se van agregando cada mes.",
    color: "bg-verde/20",
  },
  {
    icon: "🧰",
    title: "Kit emocional descargable",
    description:
      "Todos los recursos imprimibles: tarjetas, guías, cuadernos y rituales.",
    color: "bg-lila/20",
  },
  {
    icon: "👩‍👧",
    title: "Comunidad de madres",
    description:
      "Un espacio seguro para compartir, preguntar y apoyarse entre madres en el mismo camino.",
    color: "bg-azul/20",
  },
  {
    icon: "🔴",
    title: "Clases en vivo mensuales",
    description:
      "Sesiones en directo para profundizar temas, responder preguntas y conectar en comunidad.",
    color: "bg-rosa/20",
  },
  {
    icon: "💌",
    title: "Acompañamiento personalizado",
    description:
      "Consultas mensuales grupales con orientación específica según la etapa de tu hijo.",
    color: "bg-verde/15",
  },
];

export default function ComunidadPage() {
  return (
    <div className="flex flex-col">
      <section className="py-20 px-6 bg-gradient-to-b from-lila/20 to-beige text-center">
        <p className="font-poppins text-sm text-rosa uppercase tracking-widest mb-4">
          Membresía mensual
        </p>
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Comunidad Cuentos para la Calma
        </h1>
        <p className="font-poppins text-gray-600 max-w-xl mx-auto mb-10 leading-relaxed">
          Un espacio mensual de crianza emocional con todo el contenido,
          recursos y acompañamiento que necesitas para criar con más calma y
          presencia.
        </p>
        <CTAButton href="#suscripcion">Quiero unirme</CTAButton>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair text-3xl font-bold text-center text-gray-800 mb-12">
            ¿Qué incluye la membresía?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beneficios.map((b) => (
              <EmotionalBlock key={b.title} {...b} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="suscripcion"
        className="py-20 px-6 bg-beige text-center"
      >
        <h2 className="font-playfair text-3xl font-bold text-gray-800 mb-4">
          Empieza hoy
        </h2>
        <p className="font-poppins text-gray-600 max-w-md mx-auto mb-3">
          Membresía mensual · Sin permanencia · Cancela cuando quieras
        </p>
        <p className="font-playfair text-5xl font-bold text-lila mb-2">$XX/mes</p>
        <p className="font-poppins text-xs text-gray-400 mb-10">
          Precio simbólico · Próximamente disponible
        </p>
        <CTAButton href="/sobre-mi">Conocer más</CTAButton>
      </section>
    </div>
  );
}
