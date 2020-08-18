type State = {
  isModalOpen: boolean
  currentTemplate: string
  wobble: boolean
}

type Action = {
  type: "openModal" | "closeModal" | "stopWobble"
  templateName?: string
}

export function templatesReducer(state: State, action: Action): State {
  switch (action.type) {
    case "openModal": {
      return {
        isModalOpen: true,
        currentTemplate: action.templateName,
        wobble: true,
      }
    }
    case "closeModal": {
      return { ...state, isModalOpen: false, wobble: false }
    }
    case "stopWobble": {
      return { ...state, wobble: false }
    }
  }
}
