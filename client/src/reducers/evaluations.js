import {GET_EVALUATIONS, ADD_NEW_EVALUATION} from '../actions/evaluations'

export default function (state = [], {type, payload}) {
	switch (type) {
		case GET_EVALUATIONS:
			return payload

        case ADD_NEW_EVALUATION:
			return [...state, payload]

		default:
      return state
	}
}