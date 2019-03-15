import { defineAction } from 'redux-define'

export const GENERAL_ACTION = defineAction('GENERAL_ACTION')

export function action() {
  return {
    type: GENERAL_ACTION,
    payload: null,
  }
}
