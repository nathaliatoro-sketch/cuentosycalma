import CTAButton from "@/components/CTAButton";

const modulos = [
  {
    number: 1,
    title: "Entender las emociones",
    description:
      "Aprende qué son las emociones, cómo funcionan en el cerebro infantil y por qué los niños reaccionan como lo hacen.",
    href: "/cursos/curso-base/modulo-1",
    color: "bg-rosa/15",
  },
  {
    number: 2,
    title: "Acompañamiento emocional",
    description:
      "Descubre cómo estar presente en los momentos difíciles sin perder la calma y sin invalidar lo que siente tu hijo.",
    href: "/cursos/curso-base/modulo-2",
    color: "bg-verde/20",
  },
  {
    number: 3,
    title: "La caja de la calma",
    description:
      "Construye junto a tu hijo una caja con herramientas sensoriales y emocionales para usar cuando las emociones desbordan.",
    href: "/cursos/curso-base/modulo-3",
    color: "bg-lila/20",
  },
  {
    number: 4,
    title: "Rutinas emocionales",
    description:
      "Crea rituales diarios simples que fortalezcan la regulación emocional, la conexión y la seguridad en tu hogar.",
    href: "/cursos/curso-base/modulo-4",
    color: "bg-azul/20",
  },
];

export default function CursoBasePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <p className="font-poppins text-sm text-rosa uppercase tracking-widest mb-4">
        Curso Base
      </p>
      <h1 className="font-playfair text-4xl font-bold text-gray-800 mb-6">
        Acompañamiento emocional desde el principio
      </h1>
      <p className="font-poppins text-gray-600 leading-relaxed mb-12 max-w-2xl">
        Un recorrido completo para madres que quieren entender el mundo emocional
        de sus hijos y acompañarlo con herramientas reales, cuentos terapéuticos
        y rutinas simples que cambian el día a día.
      </p>

      <h2 className="font-playfair text-2xl font-bold text-gray-700 mb-8">
        Módulos del curso
      </h2>
      <div className="flex flex-col gap-6 mb-14">
        {modulos.map((m) => (
          <div
            key={m.number}
            className={`${m.color} rounded-2xl p-6 flex flex-col md:flex-row md:items-center gap-4`}
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/60 flex items-center justify-center">
              <span className="font-playfair text-xl font-bold text-lila">
                {m.number}
              </span>
            </div>
            <div className="flex-1">
              <h3 className="font-playfair text-lg font-semibold text-gray-800 mb-1">
                {m.title}
              </h3>
              <p className="font-poppins text-sm text-gray-600 leading-relaxed">
                {m.description}
              </p>
            </div>
            <CTAButton href={m.href} variant="secondary">
              Ver módulo
            </CTAButton>
          </div>
        ))}
      </div>

      <div className="text-center">
        <CTAButton href="/cursos">← Volver a cursos</CTAButton>
      </div>
    </div>
  );
}
