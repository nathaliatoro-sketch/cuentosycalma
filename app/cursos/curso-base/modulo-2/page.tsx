import CTAButton from "@/components/CTAButton";

export default function Modulo2Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <p className="font-poppins text-sm text-rosa uppercase tracking-widest mb-2">
        Curso Base · Módulo 2
      </p>
      <h1 className="font-playfair text-4xl font-bold text-gray-800 mb-6">
        Acompañamiento emocional
      </h1>
      <div className="bg-verde/20 rounded-2xl p-8 mb-10">
        <p className="font-poppins text-gray-600 leading-relaxed">
          Acompañar emocionalmente a tu hijo no significa resolver todo ni
          evitar el dolor. Significa estar presente, validar lo que siente y
          guiarlo a través de la tormenta emocional con calma y amor.
        </p>
      </div>
      <h2 className="font-playfair text-2xl font-semibold text-gray-700 mb-4">
        Contenidos
      </h2>
      <ul className="font-poppins text-sm text-gray-600 leading-loose list-disc list-inside mb-12 space-y-2">
        <li>Qué significa acompañar (y qué no es acompañar)</li>
        <li>Cómo validar emociones sin sobreproteger</li>
        <li>Frases que conectan vs. frases que desconectan</li>
        <li>La calma materna como herramienta de regulación</li>
        <li>Qué hacer durante un berrinche: paso a paso</li>
      </ul>
      <div className="flex gap-4 flex-wrap">
        <CTAButton href="/cursos/curso-base/modulo-1">← Módulo anterior</CTAButton>
        <CTAButton href="/cursos/curso-base/modulo-3" variant="secondary">
          Siguiente módulo →
        </CTAButton>
      </div>
    </div>
  );
}
