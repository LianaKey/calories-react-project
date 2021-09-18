import axios from 'axios'
import { useCallback } from 'react'
import { useHistory } from 'react-router'

export const useLogin = () => {
  const history = useHistory()

  const login = useCallback(
    (id: string) => {
      axios
        .get<any>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res:any) => {
          if (res.data) {
            const isAdmin = res.data.id === 10 ? true : false
            history.push('./home')
            alert('login success')
          } else {
            alert('User not found')
          }
        })
        .catch((err) => {
            throw new Error(err);
        })
    },
    [history]
  )
  return { login }
}