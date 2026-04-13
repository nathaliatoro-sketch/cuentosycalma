import CTAButton from "@/components/CTAButton";

export default function Modulo3Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <p className="font-poppins text-sm text-rosa uppercase tracking-widest mb-2">
        Curso Base · Módulo 3
      </p>
      <h1 className="font-playfair text-4xl font-bold text-gray-800 mb-6">
        La caja de la calma
      </h1>
      <div className="bg-lila/20 rounded-2xl p-8 mb-10">
        <p className="font-poppins text-gray-600 leading-relaxed">
          La caja de la calma es una herramienta concreta y sensorial que tu
          hijo puede usar cuando sus emociones lo desbordan. En este módulo
          aprenderás cómo crearla juntos y cómo integrarla en el día a día.
        </p>
      </div>
      <h2 className="font-playfair text-2xl font-semibold text-gray-700 mb-4">
        Contenidos
      </h2>
      <ul className="font-poppins text-sm text-gray-600 leading-loose list-disc list-inside mb-12 space-y-2">
        <li>Qué es la caja de la calma y para qué sirve</li>
        <li>Cómo elegir los objetos sensoriales correctos</li>
        <li>Cómo presentarla a tu hijo (sin que sea una "obligación")</li>
        <li>Recursos descargables: etiquetas y guía de uso</li>
        <li>Testimonios de madres que ya la usan</li>
      </ul>
      <div className="flex gap-4 flex-wrap">
        <CTAButton href="/cursos/curso-base/modulo-2">← Módulo anterior</CTAButton>
        <CTAButton href="/cursos/curso-base/modulo-4" variant="secondary">
          Siguiente módulo →
        </CTAButton>
      </div>
    </div>
  );
}
