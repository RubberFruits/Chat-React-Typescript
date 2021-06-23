import React, { useContext, useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { auth } from '../API/firebase'

const AuthContext = React.createContext<any>(undefined)

export const useAuth = () => useContext(AuthContext)

export const AuthProvider: React.FC = ({ children }: any) => {

   const [loading, setLoading] = useState<boolean>(true)
   const [user, setUser] = useState<any>(null)
   const history = useHistory()

   useEffect(() => {
      auth.onAuthStateChanged((user) => {
         setUser(user)
         setLoading(false)
         if (user) {
            history.push('/chats')
         }
      })
   }, [user, history])

   const value: any = { user }

   return (
      <AuthContext.Provider value={value}>
         {!loading && children}
      </AuthContext.Provider>
   )
}