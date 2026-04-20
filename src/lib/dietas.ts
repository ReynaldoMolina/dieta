export interface Ingredient {
  name: string
  amount: string
}

export interface DishOption {
  title: string
  image: string
  ingredients: Ingredient[]
}

export interface DailyPlan {
  day: string
  meals: {
    breakfast: DishOption[]
    morningSnack: DishOption[]
    lunch: DishOption[]
    afternoonSnack: DishOption[]
    dinner: DishOption[]
  }
}

export const dietPlan: DailyPlan[] = [
  {
    day: "lunes",
    meals: {
      breakfast: [],
      morningSnack: [],
      lunch: [
        {
          title: "Ensalada pollo",
          image: "/1/sopa-de-pollo-fideos.jpg",
          ingredients: [
            { name: "Pollo", amount: "30 g" },
            { name: "Pasta de fideo cocida", amount: "25 g, 1/4 tasa" },
            { name: "Zanahoria", amount: "25 g, 1/2 tasa" },
            { name: "Ejote", amount: "30 g, 1/2 tasa" },
            { name: "Aceite de canola", amount: "5 ml, 1 cucharadita" },
          ],
        },
      ],
      afternoonSnack: [],
      dinner: [],
    },
  },
  {
    day: "sabado",
    meals: {
      breakfast: [],
      morningSnack: [],
      lunch: [
        {
          title: "Caldo de pollo con fideos",
          image: "/1/sopa-de-pollo-fideos.jpg",
          ingredients: [
            { name: "Pollo", amount: "30 g" },
            { name: "Pasta de fideo cocida", amount: "25 g, 1/4 tasa" },
            { name: "Zanahoria", amount: "25 g, 1/2 tasa" },
            { name: "Ejote", amount: "30 g, 1/2 tasa" },
            { name: "Aceite de canola", amount: "5 ml, 1 cucharadita" },
          ],
        },
      ],
      afternoonSnack: [],
      dinner: [],
    },
  },
]
