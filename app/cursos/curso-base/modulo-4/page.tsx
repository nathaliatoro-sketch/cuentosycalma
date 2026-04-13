import CTAButton from "@/components/CTAButton";

export default function Modulo4Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <p className="font-poppins text-sm text-rosa uppercase tracking-widest mb-2">
        Curso Base · Módulo 4
      </p>
      <h1 className="font-playfair text-4xl font-bold text-gray-800 mb-6">
        Rutinas emocionales
      </h1>
      <div className="bg-azul/20 rounded-2xl p-8 mb-10">
        <p className="font-poppins text-gray-600 leading-relaxed">
          Las rutinas crean seguridad emocional. En este módulo diseñarás
          rituales sencillos para la mañana, el momento del cuento y la noche,
          que nutren el mundo emocional de tu hijo sin agregar carga a tu día.
        </p>
      </div>
      <h2 className="font-playfair text-2xl font-semibold text-gray-700 mb-4">
        Contenidos
      </h2>
      <ul className="font-poppins text-sm text-gray-600 leading-loose list-disc list-inside mb-12 space-y-2">
        <li>Por qué las rutinas regulan las emociones</li>
        <li>Ritual de bienvenida al día (5 minutos)</li>
        <li>El momento del cuento como ritual de conexión</li>
        <li>Ritual nocturno de calma y cierre emocional</li>
        <li>Cómo mantener las rutinas en días difíciles</li>
      </ul>
      <div className="flex gap-4 flex-wrap">
        <CTAButton href="/cursos/curso-base/modulo-3">← Módulo anterior</CTAButton>
        <CTAButton href="/cursos/curso-base" variant="secondary">
          Volver al curso
        </CTAButton>
      </div>
    </div>
  );
}
