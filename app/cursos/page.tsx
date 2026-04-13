import CTAButton from "@/components/CTAButton";

const cursos = [
  {
    icon: "🌱",
    title: "Curso Base",
    subtitle: "Acompañamiento emocional desde el principio",
    description:
      "El punto de partida para entender las emociones de tu hijo y acompañarlas con herramientas prácticas, cuentos y rutinas simples.",
    modules: 4,
    href: "/cursos/curso-base",
    color: "bg-lila/20",
  },
];

export default function CursosPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="font-playfair text-4xl font-bold text-gray-800 mb-4 text-center">
        Cursos
      </h1>
      <p className="font-poppins text-gray-500 text-center mb-14 max-w-xl mx-auto">
        Aprendizaje suave, práctico y lleno de amor. Diseñado para madres reales.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cursos.map((c) => (
          <div
            key={c.title}
            className={`${c.color} rounded-2xl p-8 flex flex-col gap-4`}
          >
            <span className="text-4xl">{c.icon}</span>
            <h2 className="font-playfair text-2xl font-bold text-gray-800">
              {c.title}
            </h2>
            <p className="font-poppins text-sm text-rosa font-medium">{c.subtitle}</p>
            <p className="font-poppins text-sm text-gray-600 leading-relaxed">
              {c.description}
            </p>
            <p className="font-poppins text-xs text-gray-400">{c.modules} módulos</p>
            <CTAButton href={c.href}>Ver curso</CTAButton>
          </div>
        ))}
      </div>
    </div>
  );
}
