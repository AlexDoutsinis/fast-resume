import { useReducer } from 'react'
import { useStoredData } from '../hooks/use-storedData'

type State = {
  isModalOpen: boolean
  currentTemplate: string
  wobble: number
}

type Action = {
  type:
    | 'openModal_startWobble'
    | 'closeModal_stopWobble'
    | 'stopWobble'
    | 'setCurrentTemplate'
  templateName?: string
}

export function ResumeBuilderReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'openModal_startWobble': {
      return {
        ...state,
        isModalOpen: true,
        wobble: 1,
      }
    }
    case 'closeModal_stopWobble': {
      return { ...state, isModalOpen: false, wobble: 0 }
    }
    case 'stopWobble': {
      return { ...state, wobble: 0 }
    }
    case 'setCurrentTemplate': {
      return { ...state, currentTemplate: action.templateName }
    }
  }
}

const {storedCurrentTemplate} = useStoredData()

const initialState: State = {
  isModalOpen: false,
  currentTemplate: storedCurrentTemplate || 'minimal1',
  wobble: 0,
}

export type ResumeBuilder = {
  state: State
  dispatch: React.Dispatch<Action>
}

export function useResumeBuilderReducer(): ResumeBuilder {
  const [state, dispatch] = useReducer(ResumeBuilderReducer, initialState)

  return { state, dispatch }
}
