// aluno/INCREMENTAR_TEMPO, adiciona 1 dia de acesso
// aluno/REDUZIR_TEMPO, reduz 1 dia de acesso
// aluno/MODIFICAR_EMAIL(email), modifica o email do usuário

const ADD_ACCES_TIME = "aluno/INCREMENTAR_TEMPO";
const REMOVE_ACESS_TIME = "aluno/REDUZIR_TEMPO";
const CHANGE_EMAIL = "aluno/MODIFICAR_EMAIL(email)";

export function addAccesTime() {
  return { type: ADD_ACCES_TIME };
}

export function removeAccesTime() {
  return { type: REMOVE_ACESS_TIME };
}

export function changeEmail(email) {
  return { type: CHANGE_EMAIL, payload: email };
}

const initialState = {
  email: "brunomachado3818@gmail.com",
  acessoDias: 0,
};

const studentReducer = immer.produce((state, action) => {
  switch (action.type) {
    case ADD_ACCES_TIME:
      state.acessoDias = ++state.acessoDias;
      break;
    case REMOVE_ACESS_TIME:
      state.acessoDias = --state.acessoDias;
      break;
    case CHANGE_EMAIL:
      state.email = action.payload;
      break;
  }
}, initialState);

export default studentReducer;
