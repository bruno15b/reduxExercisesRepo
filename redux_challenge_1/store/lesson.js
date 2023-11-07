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

const initialState = {
  hist: 0,
  mat: 0,
  port: 0,
};

const lessonReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMPLETE_LESSON:
      return { ...state, [action.payload]: 999 };
    case COMPLETE_COURSE:
      return { ...state, hist: 999, mat: 999, port: 999 };
    case RESET_COURSE:
      return { ...state, hist: 0, mat: 0, port: 0 };
    default:
      return state;
  }
};

export default lessonReducer;
