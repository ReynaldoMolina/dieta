import { useState } from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { dietPlan, type DishOption } from "@/lib/dietas"

const days = [
  { id: "lunes", label: "Lunes" },
  { id: "martes", label: "Martes" },
  { id: "miercoles", label: "Miércoles" },
  { id: "jueves", label: "Jueves" },
  { id: "viernes", label: "Viernes" },
  { id: "sabado", label: "Sábado" },
  { id: "domingo", label: "Domingo" },
]

export function DietSelector() {
  const getTodayId = () => {
    const today = new Date().toLocaleDateString("es-ES", { weekday: "long" })
    return today
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
  }

  const [selectedDay, setSelectedDay] = useState(getTodayId())

  const currentPlan = dietPlan.find((plan) => plan.day === selectedDay)

  return (
    <>
      <Select value={selectedDay} onValueChange={setSelectedDay}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Selecciona un día" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {days.map((day) => (
              <SelectItem key={day.id} value={day.id}>
                {day.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <div className="mt-6 flex flex-col gap-8">
        {currentPlan ? (
          <>
            {/* Renderizamos cada categoría de comida */}
            <MealSection
              title="Desayuno"
              options={currentPlan.meals.breakfast}
            />
            <MealSection
              title="Merienda Mañana"
              options={currentPlan.meals.morningSnack}
            />
            <MealSection title="Almuerzo" options={currentPlan.meals.lunch} />
            <MealSection
              title="Merienda Tarde"
              options={currentPlan.meals.afternoonSnack}
            />
            <MealSection title="Cena" options={currentPlan.meals.dinner} />
          </>
        ) : (
          <p className="text-muted-foreground italic">
            No hay un plan cargado para este día.
          </p>
        )}
      </div>
    </>
  )
}

// Componente auxiliar para las secciones de comida
function MealSection({
  title,
  options,
}: {
  title: string
  options: DishOption[]
}) {
  if (options.length === 0) return null // No mostrar secciones vacías

  return (
    <section className="rounded-xl border p-2 shadow-xl">
      <h3 className="mb-2 text-center font-bold text-blue-900">{title}</h3>
      <div className="grid gap-4">
        {options.map((option, idx) => (
          <div
            key={idx}
            className="overflow-hidden border bg-card text-card-foreground"
          >
            {option.image && (
              <img
                src={option.image}
                alt={option.title}
                className="object-fit h-48 w-full p-5"
              />
            )}
            <div className="p-4">
              <h4 className="mb-3 text-center font-semibold text-neutral-700">
                {option.title}
              </h4>
              <ul className="space-y-1">
                {option.ingredients.map((ing, i) => (
                  <li
                    key={i}
                    className="flex justify-between gap-2 border-b border-slate-100 pb-1 text-sm last:border-0"
                  >
                    <span className="text-slate-600">{ing.name}</span>
                    <span className="w-10"></span>
                    <span className="font-medium text-slate-900">
                      {ing.amount}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
