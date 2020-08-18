type State = {
  isModalOpen: boolean
  currentTemplate: string
}

type Action = {
  type: "openModal" | "closeModal"
  templateName?: string
}

export function templatesReducer(state: State, action: Action): State {
  switch (action.type) {
    case "openModal": {
      return {
        ...state,
        isModalOpen: true,
        currentTemplate: action.templateName,
      }
    }
    case "closeModal": {
      return { ...state, isModalOpen: false }
    }
  }
}
