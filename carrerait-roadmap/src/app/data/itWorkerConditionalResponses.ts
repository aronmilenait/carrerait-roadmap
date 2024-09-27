export function getConditionalResponse(
  experience: string,
  educationType: string
): string {
  if (
    (experience == "Menos de un año." ||
      experience == "Entre uno y cuatro años.") &&
    educationType == "De manera autodidacta."
  ) {
    return "Dado a que te formaste de manera autodidacta para ingresar al rubro, podrías considerar estudiar en la universidad, sobre todo si estás en los primeros dos años de tu carrera. Sin embargo, si tenés una carga horaria y/o laboral muy intensas, te recomiendo que te enfoques en ganar experiencia y seguir formándote de manera autodidacta, o en cursar pocas materias (1 o 2). Si bien el mercado está un tanto saturado, ya lograste lo más importante: entrar al rubro.";
  } else if (
    (experience == "Menos de un año." ||
      experience == "Entre uno y cuatro años.") &&
    educationType == "Fui a la universidad, pero no la terminé."
  ) {
    return "Dado a que fuiste a la universidad por un tiempo y que ya estás trabajando en IT, podés enfocarte en formarte de manera autodidacta y ganando experiencia laboral. También, en el caso de que quieras y que tu carga horaria y/o laboral te lo permitan, podrías considerar retomar la universidad.";
  } else if (
    (experience == "Menos de un año." ||
      experience == "Entre uno y cuatro años.") &&
    educationType == "Mediante bootcamps."
  ) {
    return "Dado a que tu formación fue mediante bootcamps, te recomiendo que, además de seguir ganando experiencia laboral, continúes estudiando de manera autodidacta. Si tu carga horaria y/o laboral te lo permiten, podrías considerar empezar una carrera universitaria para tener una ventaja en el mercado laboral actual, aunque siendo que ya estás trabajando, depende de tus preferencias.";
  } else {
    return "Dado a que ya llevás más de cuatro años en el rubro, la manera en la cual te formaste no es tan relevante. Tenés mucha experiencia laboral, y eso es fundamental a la hora de crecer profesionalmente y obtener oportunidades.";
  }
}
