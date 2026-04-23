export type Ingredient = string

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
      breakfast: [
        {
          title: "Agua de limón con chía",
          image: "/1/chia-limon.png",
          ingredients: [
            "Agua 300 ml",
            "Jugo de limón 20 ml, 2 piezas",
            "Chía 5 g, 1 cucharadita",
          ],
        },
        {
          title: "Pan con mermelada",
          image: "/1/pan-mermelada.png",
          ingredients: [
            "Pan de caja 30 g, 1 pieza",
            "Mermelada 17 g, 2 ½ cucharaditas",
          ],
        },
        {
          title: "Huevo estrellado",
          image: "/1/huevo-estrellado.png",
          ingredients: [
            "Huevo estrellado 45 g, 1 pieza",
            "Aceite de canola 5 ml, 1 cucharadita",
          ],
        },
      ],
      morningSnack: [
        {
          title: "Manzana verde",
          image: "/1/manzana-verde.png",
          ingredients: ["Manzana 140 g, 1 pieza"],
        },
        {
          title: "Té verde",
          image: "/1/te-verde.png",
          ingredients: ["Agua 220 ml"],
        },
      ],
      lunch: [
        {
          title: "Ensalada de lechuga y jamón",
          image: "/1/lunes-almuerzo.png",
          ingredients: [
            "Lechuga, cos o romana 100 g, 2 ⅕ tazas",
            "Jamón de pavo 21 g, 1 rebanada",
            "Jitomate bola 70 g",
            "Pollo sin piel, asado 50 g",
            "Pan integral tostado 58 g, 2 piezas",
          ],
        },
      ],
      afternoonSnack: [
        {
          title: "",
          image: "",
          ingredients: ["Gelatina 100 g, ⅔ taza"],
        },
      ],
      dinner: [
        {
          title: "",
          image: "",
          ingredients: ["Enterex Diabetics 100 g"],
        },
      ],
    },
  },
  {
    day: "martes",
    meals: {
      breakfast: [
        {
          title: "Pancake de avena",
          image: "/1/pancakes.png",
          ingredients: [
            "Avena cruda en hojuelas 40 g, ½ taza",
            "Huevo entero fresco 100 g, 2 piezas",
            "Plátano 109 g, 1 pieza",
            "Vainilla Extracto 1 g",
            "Manzana con piel 100 g, 1 pieza",
          ],
        },
        {
          title: "Té verde",
          image: "/1/te-verde.png",
          ingredients: ["Agua 220 ml"],
        },
      ],
      morningSnack: [
        {
          title: "Tupper de frutas",
          image: "/1/frutas.png",
          ingredients: [
            "Sandía 40 g, ¼ taza",
            "Pepino 50 g, ½ taza",
            "Piña 40 g, ¼ taza",
            "Melón 40 g, ¼ taza",
          ],
        },
      ],
      lunch: [
        {
          title: "Pierna de pollo sin piel",
          image: "/1/pollo-sin-piel.png",
          ingredients: [
            "Pollo (asado o rostizado) 70 g",
            "Aceite 5 ml, 1 cucharadita",
          ],
        },
        {
          title: "Tomate con cebolla",
          image: "/1/tomate-con-cebolla.png",
          ingredients: ["Tomate 100 g, ½ taza", "Cebolla blanca 50 g, ¼ taza"],
        },
        {
          title: "Agua de limón",
          image: "/1/agua-limon.png",
          ingredients: ["Agua 300 ml", "Jugo de limón 20 ml, 2 piezas"],
        },
        {
          title: "Tortilla de maíz",
          image: "/1/tortilla.png",
          ingredients: ["Tortilla 22 g, 1 pieza"],
        },
      ],
      afternoonSnack: [
        {
          title: "Nuez",
          image: "/1/nuez.png",
          ingredients: ["Nuez 10 g, 7"],
        },
        {
          title: "Té de manzanilla",
          image: "/1/te-manzanilla.png",
          ingredients: ["Agua 220 ml"],
        },
      ],
      dinner: [
        {
          title: "Frijoles enteros",
          image: "/1/frijoles.png",
          ingredients: ["Frijoles enteros 128 g, ½ taza"],
        },
        {
          title: "Pan tostado",
          image: "/1/pan-tostado.png",
          ingredients: ["Pan tostado 17 g, 1 rebanada"],
        },
        {
          title: "Tomate con cebolla",
          image: "/1/tomate-con-cebolla.png",
          ingredients: ["Tomate 100 g, ½ taza", "Cebolla blanca 50 g, ¼ taza"],
        },
        {
          title: "Té de manzanilla",
          image: "/1/te-manzanilla.png",
          ingredients: ["Agua 220 ml"],
        },
      ],
    },
  },
  {
    day: "miercoles",
    meals: {
      breakfast: [
        {
          title: "Avena con leche y manzana",
          image: "/1/leche-avena.png",
          ingredients: [
            "Leche semidescremada 240 ml, 1 taza",
            "Avena 27 g, ⅓ taza",
            "Manzana 106 g, 1 pieza",
          ],
        },
      ],
      morningSnack: [
        {
          title: "Té verde",
          image: "/1/te-verde.png",
          ingredients: ["Agua 220 ml"],
        },
        {
          title: "Papaya con melón",
          image: "/1/papaya-melon.png",
          ingredients: ["Papaya 70 g, ½ taza", "Melón 90 g, 1 taza"],
        },
      ],
      lunch: [
        {
          title: "Caldo de pollo con vegetales",
          image: "/1/caldo-pollo.png",
          ingredients: [
            "Pollo 30 g",
            "Elote 20 g, 0.1 taza",
            "Zanahoria 20 g, ¼ taza",
            "Chícharo 20 g, 0.1 taza",
            "Aceite de canola 5 ml, 1 cucharadita",
          ],
        },
      ],
      afternoonSnack: [
        {
          title: "Batido de espinaca y apio",
          image: "/1/batido-espinaca.png",
          ingredients: [
            "Espinaca cruda 60 g, 1 taza",
            "Apio crudo 100 g, 1.1 tazas",
            "Pepino con cáscara 52 g, ½ taza",
          ],
        },
      ],
      dinner: [
        {
          title: "",
          image: "",
          ingredients: ["Enterex Diabetics 100 g"],
        },
      ],
    },
  },
  {
    day: "jueves",
    meals: {
      breakfast: [
        {
          title: "Naranja",
          image: "/1/naranja.png",
          ingredients: ["Naranja 60 g, ½ pieza"],
        },
        {
          title: "Huevos revueltos",
          image: "/1/huevos-revueltos.png",
          ingredients: [
            "Huevos revueltos 90 g, 2 piezas",
            "Aceite de canola 5 ml, 1 cucharadita",
          ],
        },
        {
          title: "Galleta salada",
          image: "/1/galleta-salada.png",
          ingredients: ["Galletas saladas 16 g, 4 piezas"],
        },
      ],
      morningSnack: [
        {
          title: "Ensalada de frutas con yogurt griego",
          image: "/1/ensalada-frutas.png",
          ingredients: [
            "Yogurt griego alto en proteína 80 ml, ⅓ taza",
            "Melón 44 g, ¼ taza",
            "Sandía 80 g, ½ taza",
            "Fresa 36 g, 3 piezas",
            "Uva 20 g, 4 piezas",
          ],
        },
      ],
      lunch: [
        {
          title: "Ensalada de pollo con verdutas",
          image: "/1/ensalada-pollo.png",
          ingredients: [
            "Lechuga 45 g, 1 taza",
            "Pechuga de pollo desmenuzada 60 g",
            "Elote 40 g, ¼ taza",
            "Zanahoria 35 g, ½ taza",
            "Chícharo 20 g, 0.1 taza",
          ],
        },
      ],
      afternoonSnack: [
        {
          title: "Batido de zanahoria, naranja y limón",
          image: "/1/batido-zanahoria.png",
          ingredients: [
            "Zanahoria 40 g, ½ taza",
            "Limón real 195 g",
            "Naranja 76 g, 1 pieza",
          ],
        },
      ],
      dinner: [
        {
          title: "Té de manzanilla",
          image: "/1/te-manzanilla.png",
          ingredients: ["Agua 220 ml"],
        },
        {
          title: "Pan con ensalada de atún",
          image: "/1/pan-atun.png",
          ingredients: [
            "Pan de caja 30 g, 1 pieza",
            "Atún 80 g, 1 lata",
            "Lechuga 10 g, ⅕ taza",
          ],
        },
      ],
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
            "Pollo 30 g",
            "Pasta de fideo cocida 25 g, 1/4 tasa",
            "Zanahoria 25 g, 1/2 tasa",
            "Ejote 30 g, 1/2 tasa",
            "Aceite de canola 5 ml, 1 cucharadita",
          ],
        },
      ],
      afternoonSnack: [],
      dinner: [],
    },
  },
]
