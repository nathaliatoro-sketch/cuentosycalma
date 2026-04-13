import CTAButton from "@/components/CTAButton";

const cats = [
  { emoji: "😊", name: "Alegre", color: "bg-rosa/20", description: "Cuando Alfred está contento, Alegre ronronea suavecito." },
  { emoji: "😢", name: "Tristón", color: "bg-azul/20", description: "Cuando algo duele, Tristón se acurruca y llora lágrimas pequeñas." },
  { emoji: "😠", name: "Fuego", color: "bg-orange-100", description: "Cuando algo no es justo, Fuego maúlla muy fuerte y se pone grande." },
  { emoji: "😨", name: "Sombra", color: "bg-gray-100", description: "Cuando hay algo desconocido, Sombra se esconde debajo de la cama." },
  { emoji: "🤢", name: "Nudito", color: "bg-verde/20", description: "Cuando algo no le gusta, Nudito revuelve el estómago de Alfred." },
  { emoji: "😲", name: "Chispa", color: "bg-yellow-100", description: "Cuando algo es inesperado, Chispa salta muy alto con sorpresa." },
  { emoji: "🥰", name: "Ternura", color: "bg-lila/20", description: "Cuando Alfred quiere abrazar a todos, Ternura pide mimos sin parar." },
];

export default function CuentoAlfredPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <p className="font-poppins text-sm text-rosa uppercase tracking-widest mb-2">
        Cuento terapéutico
      </p>
      <h1 className="font-playfair text-4xl font-bold text-gray-800 mb-6">
        Alfred y los 7 gatos
      </h1>
      <p className="font-poppins text-gray-600 leading-relaxed mb-12">
        Alfred es un niño que tiene 7 gatos, uno por cada emoción. Cuando una
        emoción es muy grande, el gato correspondiente crece mucho. Un cuento
        sobre la regulación y el equilibrio emocional.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
        {cats.map((c) => (
          <div key={c.name} className={`${c.color} rounded-2xl p-5 flex gap-4 items-start`}>
            <span className="text-3xl">{c.emoji}</span>
            <div>
              <h3 className="font-playfair text-base font-semibold text-gray-800 mb-1">
                {c.name}
              </h3>
              <p className="font-poppins text-sm text-gray-600">{c.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-azul/20 rounded-2xl p-6 mb-12">
        <p className="font-poppins text-xs font-semibold text-gray-500 uppercase mb-2">
          Actividad madre-hijo
        </p>
        <p className="font-poppins text-sm text-gray-700 leading-relaxed">
          Dibuja a Alfred y sus 7 gatos. ¿Cuál gato está grande hoy en tu casa?
          ¿Qué podemos hacer para que ese gato se relaje un poco y no estorbe
          tanto?
        </p>
      </div>

      <CTAButton href="/cuentos">← Volver a los cuentos</CTAButton>
    </div>
  );
}
