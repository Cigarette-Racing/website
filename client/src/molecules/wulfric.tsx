import React, { useContext, useReducer, useEffect, useMemo } from 'react'

interface ContextShape extends WizardState {
  init: (steps: string[]) => void
  next: () => void
  previous: () => void
  currentStep: string
}

interface WizardState {
  steps: string[]
  currentStepIndex: number
}

type WizardAction =
  | { type: 'INIT'; payload: string[] }
  | { type: 'NEXT' }
  | { type: 'PREVIOUS' }

const reducer = (state: WizardState, action: WizardAction): WizardState => {
  switch (action.type) {
    case 'INIT':
      return {
        steps: action.payload,
        currentStepIndex: 0,
      }
    case 'NEXT':
      return {
        ...state,
        currentStepIndex: Math.min(
          state.currentStepIndex + 1,
          state.steps.length - 1
        ),
      }
    case 'PREVIOUS':
      return {
        ...state,
        currentStepIndex: Math.max(state.currentStepIndex - 1, 0),
      }
    default:
      throw new Error('Unhandled reducer action')
  }
}

const WulfricContext = React.createContext<ContextShape | null>(null)

export const Wizard: React.FC = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    steps: [],
    currentStepIndex: 0,
  })
  const currentStep = state.steps[state.currentStepIndex]

  const value = useMemo(() => {
    const init = (steps: string[]) => {
      dispatch({ type: 'INIT', payload: steps })
    }
    const next = () => {
      dispatch({ type: 'NEXT' })
    }
    const previous = () => {
      dispatch({ type: 'PREVIOUS' })
    }

    return {
      ...state,
      currentStep,
      init,
      next,
      previous,
    }
  }, [state.currentStepIndex, state.steps])

  return (
    <WulfricContext.Provider value={value}>
      {props.children}
    </WulfricContext.Provider>
  )
}

export const Steps = (props: React.PropsWithChildren<{}>) => {
  const { init, currentStepIndex } = useWulfric()

  useEffect(() => {
    const steps = React.Children.map(
      props.children,
      (element) => (element as React.ReactElement)?.props?.id
    )
    init(steps as string[])
  }, [])

  const child = React.Children.toArray(props.children)[
    currentStepIndex
  ] as React.ReactElement
  return child
}

export const useWulfric = () => {
  const context = useContext(WulfricContext)

  if (context === undefined) {
    throw new Error('Must use useWulfric in a child component of Wizard')
  }

  return context!
}
