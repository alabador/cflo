import {Navigate} from 'react-router-dom'

export const Protected = ({auth, children}) => {
  if (!auth) {
    return <Navigate to={"/"} replace/>
  } else {
    return children
  }
}
