import * as UserActionCreators from './users'
import * as ListActionCreators from './list'

export default {
  ...UserActionCreators,
  ...ListActionCreators
}