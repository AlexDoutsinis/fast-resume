import { useReducer } from "react"

type State = {
  isModalOpen: boolean
  currentTemplate: string
  wobble: number
}

type Action = {
  type:
    | "openModal_startWobble"
    | "closeModal_stopWobble"
    | "stopWobble"
    | "setCurrentTemplate"
  templateName?: string
}

export function templateListReducer(state: State, action: Action): State {
  switch (action.type) {
    case "openModal_startWobble": {
      return {
        ...state,
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
    case "setCurrentTemplate": {
      return { ...state, currentTemplate: action.templateName }
    }
  }
}

const initialState: State = {
  isModalOpen: false,
  currentTemplate: "",
  wobble: 0,
}

type UseTemplateListReducer = {
  state: State
  dispatch: React.Dispatch<Action>
}

export function useTemplateListReducer(): UseTemplateListReducer {
  const [state, dispatch] = useReducer(templateListReducer, initialState)

  return { state, dispatch }
}
