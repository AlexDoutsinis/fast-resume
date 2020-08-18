type State = {
  isModalOpen: boolean
  currentTemplate: string
  wobble: number
}

type Action = {
  type: "openModal_startWobble" | "closeModal_stopWobble" | "stopWobble"
  templateName?: string
}

export function templatesReducer(state: State, action: Action): State {
  switch (action.type) {
    case "openModal_startWobble": {
      return {
        isModalOpen: true,
        currentTemplate: action.templateName,
        wobble: 1,
      }
    }
    case "closeModal_stopWobble": {
      return { ...state, isModalOpen: false, wobble: 0 }
    }
    case "stopWobble": {
      return { ...state, wobble: 0 }
    }
  }
}
