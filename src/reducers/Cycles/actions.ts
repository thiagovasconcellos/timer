import { Cycle } from '../../contexts/CyclesContext'

/* eslint-disable no-unused-vars */
export enum CyclesActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CICLE',
  STOP_CURRENT_CYCLE = 'STOP_CURRENT_CYCLE',
  FINISH_CURRENT_CYCLE = 'FINISH_CURRENT_CYCLE',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: CyclesActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function finiseCurrentCycleAction() {
  return {
    type: CyclesActionTypes.FINISH_CURRENT_CYCLE,
  }
}

export function stopCurrentCycleAction() {
  return {
    type: CyclesActionTypes.STOP_CURRENT_CYCLE,
  }
}
