import CTAButton from "@/components/CTAButton";

export default function SobreMiPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-playfair text-4xl font-bold text-gray-800 mb-6 text-center">
        Sobre mí
      </h1>

      <div className="bg-rosa/10 rounded-2xl p-8 mb-10 text-center">
        <div className="w-24 h-24 rounded-full bg-lila/30 mx-auto mb-6 flex items-center justify-center">
          <span className="text-4xl">🌸</span>
        </div>
        <h2 className="font-playfair text-2xl font-semibold text-gray-800 mb-2">
          Hola, soy Nathalia
        </h2>
        <p className="font-poppins text-sm text-rosa font-medium">
          Educadora emocional · Madre · Creadora de Cuentos para la Calma
        </p>
      </div>

      <div className="flex flex-col gap-6 mb-14">
        <div className="bg-white rounded-2xl p-6 border border-lila/20">
          <p className="font-poppins text-sm text-gray-600 leading-relaxed">
            Soy madre de dos niños y sé lo que es sentirse perdida cuando tu
            hijo llora y no sabes cómo ayudarlo. Durante años busqué
            herramientas que fueran reales, simples y que pudiera aplicar en el
            día a día sin estudiar una carrera.
          </p>
        </div>
        <div className="bg-verde/15 rounded-2xl p-6">
          <p className="font-poppins text-sm text-gray-600 leading-relaxed">
            Encontré en los cuentos terapéuticos una puerta mágica: una manera
            de hablar de emociones con mis hijos sin que se pusieran a la
            defensiva, de forma lúdica, suave y llena de amor.
          </p>
        </div>
        <div className="bg-azul/15 rounded-2xl p-6">
          <p className="font-poppins text-sm text-gray-600 leading-relaxed">
            Creé Cuentos para la Calma para compartir todo lo que aprendí y
            sigo aprendiendo, con madres que quieren criar de forma más consciente,
            más conectada y con más calma.
          </p>
        </div>
      </div>

      <div className="text-center">
        <p className="font-poppins text-gray-500 text-sm mb-8">
          ¿Quieres empezar este camino juntas?
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <CTAButton href="/cursos">Ver cursos</CTAButton>
          <CTAButton href="/comunidad" variant="secondary">
            Unirme a la comunidad
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
