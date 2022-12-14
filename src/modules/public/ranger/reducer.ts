import { ApiPromise } from '@polkadot/api'

import { RangerAction } from './actions'
import {
  RANGER_CONNECT_DATA,
  RANGER_CONNECT_ERROR,
  RANGER_CONNECT_FETCH,
  RANGER_DISCONNECT_DATA
} from './constants'

export interface RangerState {
  connected: boolean
  connecting: boolean
  timestamp?: number
  api?: ApiPromise
}

const initialRangerState: RangerState = {
  connected: false,
  connecting: false
}

export const rangerReducer = (
  state = initialRangerState,
  action: RangerAction
): RangerState => {
  switch (action.type) {
    case RANGER_CONNECT_FETCH:
      return {
        ...state,
        connected: false,
        connecting: true,
        timestamp: Math.floor(Date.now() / 1000)
      }

    case RANGER_CONNECT_DATA:
      return {
        ...state,
        connected: true,
        connecting: false,
        api: action.payload
      }

    case RANGER_CONNECT_ERROR:
    case RANGER_DISCONNECT_DATA:
      return {
        ...state,
        connected: false,
        connecting: false
      }

    default:
  }

  return state
}
