import { getConditionalResponse } from "./itWorkerConditionalResponses";

export const itWorkerQuestions = [
  {
    question: "¿Hace cuánto estás trabajando en IT?",
    answers: [
      {
        option: "Menos de un año",
        response:
          "En primer lugar, ¡Felicitaciones por haber ingresado al rubro recientemente! En estos momentos, estás en una etapa donde es importante que aprendas lo más posible, aprovechando que estás en el área en la cual querés quedarte (al menos, por ahora). Ya lograste lo más difícil: conseguir tu primera experiencia laboral.",
      },
      {
        option: "Entre uno y cuatro años.",
        response:
          "En primer lugar, ¡Felicitaciones por haber ingresado al rubro! Si bien llevás un tiempo dedicándote a esto, no te olvides de que es importante seguir aprendiendo e intentar mejorar tus habilidades siempre. Ya lograste algo crucial: entrar en el mercado laboral.",
      },
      {
        option: "Más de cuatro años.",
        response:
          "En primer lugar, ¡Felicitaciones por estar en el rubro! Siendo que ya llevás un tiempo considerable, seguramente hayas aprendido mucho. Sin embargo, no te olvides de que siempre hay margen para seguir mejorando y formándote.",
      },
    ],
  },
  {
    question: "¿Cómo te formaste para trabajar en el rubro?",
    answers: [
      {
        option: "Fui a la universidad y me recibí.",
        response:
          "Que hayas tenido la posibilidad de ir a la universidad y recibirte es algo muy positivo para el mercado laboral actual. En tu caso, te recomiendo que te enfoques en aprender lo más posible en tu trabajo, aprovechando que a su vez estás ganando experiencia. También, podés considerar certificaciones que te resulten útiles para tu área.",
      },
      {
        option: "Fui a la universidad, pero no la terminé.",
        response: (experience: string) => {
          return getConditionalResponse(
            experience,
            "Fui a la universidad, pero no la terminé."
          );
        },
      },
      {
        option: "De manera autodidacta.",
        response: (experience: string) => {
          return getConditionalResponse(experience, "De manera autodidacta.");
        },
      },
      {
        option: "Mediante bootcamps.",
        response: (experience: string) => {
          return getConditionalResponse(experience, "Mediante bootcamps.");
        },
      },
    ],
  },
  {
    question: "¿Sentís que en tu trabajo actual estás aprendiendo?",
    answers: [
      {
        option: "Sí.",
        response:
          "El estar ganando experiencia en un entorno laboral es algo muy beneficioso para tu carrera. Por lo tanto, ya que en tu puesto actual sentís que estás aprendiendo, te recomiendo que lo aproveches al máximo. En el caso de que no lo hayas hecho, preguntá si podés rendir certificaciones que sean beneficiosas tanto para vos como para tu rol.",
      },
      {
        option: "No.",
        response:
          "El estar ganando experiencia en un entorno laboral es algo muy beneficioso para tu carrera. Por lo tanto, ya que en tu puesto actual sentís que no estás aprendiendo, te recomiendo que estudies por tu cuenta en tu tiempo libre. Si considerás que es posible, podés intentar hablarlo con tu jefe o manager: quizás puedas rendir certificaciones que sean beneficiosas tanto para vos vos como para tu rol, o cambiar de puesto en el caso de que ese sea el problema. No obstante, a veces esto no es posible, y si te ves estancado, lo mejor es buscar otro trabajo que te brinde lo que necesitás/querés para tu carrera.",
      },
    ],
  },
  {
    question: "¿Cuál es tu nivel de inglés?",
    answers: [
      {
        option: "No sé nada de inglés.",
        response: "En este rubro, el inglés es un idioma muy usado. Para poder ampliar tus oportunidades, te recomiendo que consideres aprenderlo, debido a que muchos roles suelen requerirlo.",
      },
      {
        option: "Básico.",
        response: "En este rubro, el inglés es un idioma muy usado. El hecho de que tengas un nivel básico es algo muy positivo. Para poder ampliar tus oportunidades, te recomiendo que consideres aprenderlo en más profundidad, debido a que muchos roles suelen requerirlo.",
      },
      {
        option: "Intermedio.",
        response: "En este rubro, el inglés es un idioma muy usado. El hecho de que tengas un nivel intermedio es algo muy positivo, y seguramente te ayude a conseguir buenas oportunidades, ya que muchos roles suelen requerirlo"
      },
      {
        option: "Avanzado.",
        response: "En este rubro, el inglés es un idioma muy usado. El hecho de que tengas un nivel avanzado es algo muy positivo, y seguramente te ayude a conseguir buenas oportunidades, ya que muchos roles suelen requerirlo."
      }
    ]
  }
];
