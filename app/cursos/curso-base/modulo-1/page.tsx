import CTAButton from "@/components/CTAButton";

export default function Modulo1Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <p className="font-poppins text-sm text-rosa uppercase tracking-widest mb-2">
        Curso Base · Módulo 1
      </p>
      <h1 className="font-playfair text-4xl font-bold text-gray-800 mb-6">
        Entender las emociones
      </h1>
      <div className="bg-rosa/10 rounded-2xl p-8 mb-10">
        <p className="font-poppins text-gray-600 leading-relaxed">
          En este módulo aprenderás qué son las emociones, cómo funcionan en el
          cerebro de tu hijo y por qué los niños reaccionan de formas que a veces
          no entendemos. Dar nombre a lo que sienten es el primer paso para
          acompañarlos.
        </p>
      </div>
      <h2 className="font-playfair text-2xl font-semibold text-gray-700 mb-4">
        Contenidos
      </h2>
      <ul className="font-poppins text-sm text-gray-600 leading-loose list-disc list-inside mb-12 space-y-2">
        <li>El cerebro emocional del niño: cómo funciona</li>
        <li>Las 5 emociones básicas y cómo identificarlas</li>
        <li>Por qué los niños no pueden "calmarse solos"</li>
        <li>El rol de la madre como reguladora externa</li>
        <li>Vocabulario emocional para usar a diario</li>
      </ul>
      <div className="flex gap-4 flex-wrap">
        <CTAButton href="/cursos/curso-base">← Volver al curso</CTAButton>
        <CTAButton href="/cursos/curso-base/modulo-2" variant="secondary">
          Siguiente módulo →
        </CTAButton>
      </div>
    </div>
  );
}
