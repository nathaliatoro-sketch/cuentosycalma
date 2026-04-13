import CTAButton from "@/components/CTAButton";
import EmotionalBlock from "@/components/EmotionalBlock";

const problems = [
  {
    icon: "😰",
    title: "Crisis emocionales infantiles",
    description:
      "Los berrinches, el llanto intenso y el desborde emocional son agotadores para toda la familia.",
    color: "bg-rosa/10",
  },
  {
    icon: "💔",
    title: "Frustración materna",
    description:
      "Sientes que no tienes las herramientas para responder con calma y presencia en los momentos difíciles.",
    color: "bg-rosa/10",
  },
  {
    icon: "🔍",
    title: "Falta de herramientas",
    description:
      "No sabes por dónde empezar para enseñarle a tu hijo a gestionar sus emociones.",
    color: "bg-rosa/10",
  },
];

const solutions = [
  {
    icon: "📖",
    title: "Cuentos terapéuticos",
    description:
      "Cada cuento trabaja una emoción específica de forma narrativa, segura y amorosa.",
    color: "bg-rosa/20",
  },
  {
    icon: "🧘",
    title: "Regulación emocional",
    description:
      "Técnicas sencillas para que tu hijo aprenda a calmarse y tú puedas acompañarlo sin agotarte.",
    color: "bg-verde/20",
  },
  {
    icon: "⏰",
    title: "Rutinas simples",
    description:
      "Pequeños rituales diarios que crean seguridad emocional y conexión entre madre e hijo.",
    color: "bg-azul/20",
  },
];

const products = [
  {
    icon: "🎓",
    title: "Curso Base",
    description:
      "Aprende a acompañar las emociones de tu hijo con herramientas prácticas y cuentos guiados.",
    color: "bg-lila/20",
  },
  {
    icon: "📚",
    title: "Cuentos Terapéuticos",
    description:
      "Historias diseñadas para trabajar emociones difíciles de forma suave y entretenida.",
    color: "bg-rosa/20",
  },
  {
    icon: "🧰",
    title: "Kit Emocional",
    description:
      "Recursos descargables: tarjetas, actividades y guías para el día a día.",
    color: "bg-verde/20",
  },
  {
    icon: "🌸",
    title: "Membresía",
    description:
      "Únete a nuestra comunidad de madres. Acceso a todo el contenido y apoyo continuo.",
    color: "bg-azul/20",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-b from-beige to-rosa/10">
        <p className="font-poppins text-sm uppercase tracking-widest text-rosa mb-4">
          Crianza emocional con amor
        </p>
        <h1 className="font-playfair text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
          Cuentos para
          <br />
          la Calma
        </h1>
        <p className="font-poppins text-lg md:text-xl text-gray-600 max-w-xl mb-10 leading-relaxed">
          Acompañamiento emocional para madres e hijos a través de cuentos
        </p>
        <CTAButton href="/cursos">Explorar cursos</CTAButton>
      </section>

      {/* PROBLEMA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            ¿Te sientes así?
          </h2>
          <p className="font-poppins text-center text-gray-500 mb-12 max-w-xl mx-auto">
            Muchas madres enfrentan estos mismos desafíos cada día.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.map((p) => (
              <EmotionalBlock key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* SOLUCIÓN */}
      <section className="py-20 px-6 bg-beige">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Hay otra manera
          </h2>
          <p className="font-poppins text-center text-gray-500 mb-12 max-w-xl mx-auto">
            Con las herramientas correctas, puedes transformar los momentos
            difíciles en oportunidades de conexión.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutions.map((s) => (
              <EmotionalBlock key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Nuestros recursos
          </h2>
          <p className="font-poppins text-center text-gray-500 mb-12 max-w-xl mx-auto">
            Todo lo que necesitas para acompañar el mundo emocional de tu hijo.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((p) => (
              <EmotionalBlock key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-6 bg-gradient-to-b from-lila/20 to-rosa/20 text-center">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Tu camino empieza aquí
        </h2>
        <p className="font-poppins text-gray-600 mb-10 max-w-md mx-auto">
          Únete a cientos de madres que ya están criando con más calma, presencia
          y confianza.
        </p>
        <CTAButton href="/cursos">Comienza hoy</CTAButton>
      </section>
    </div>
  );
}
