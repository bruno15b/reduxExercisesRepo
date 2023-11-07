// aulas/COMPLETAR_AULA(id), completa a aula com base no ID passado
// aulas/COMPLETAR_CURSO, completa todas as aulas
// aulas/RESETAR_CURSO, reseta todas as aulas completas

const COMPLETE_LESSON = "aulas/COMPLETAR_AULA(id)";
const COMPLETE_COURSE = "aulas/COMPLETAR_CURSO";
const RESET_COURSE = "aulas/RESETAR_CURSO";

export function completeLesson(lessonId) {
  return { type: COMPLETE_LESSON, payload: lessonId };
}

export function completeCourse() {
  return { type: COMPLETE_COURSE };
}

export function resetCourse() {
  return { type: RESET_COURSE };
}

const initialState = [
  {
    id: 1,
    nome: "Design",
    completa: true,
  },
  {
    id: 2,
    nome: "HTML",
    completa: false,
  },
  {
    id: 3,
    nome: "CSS",
    completa: false,
  },
  {
    id: 4,
    nome: "JavaScript",
    completa: false,
  },
];

const lessonReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMPLETE_LESSON:
      return state.map((lesson, index) => (index === action.payload - 1 ? { ...lesson, completa: true } : lesson));
    case COMPLETE_COURSE:
      return state.map((lesson) => ({ ...lesson, completa: true }));
    case RESET_COURSE:
      return state.map((lesson) => ({ ...lesson, completa: false }));
    default:
      return state;
  }
};

export default lessonReducer;
