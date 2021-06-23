import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { ChatEngine } from 'react-chat-engine'
import { auth } from '../../API/firebase'
import style from './Chats.module.scss'
import { useAuth } from '../../contexts/AuthContext'
import axios from 'axios';

const Chats = () => {

   const { user } = useAuth()
   const [loading, setLoading] = useState<boolean>(true)
   const history = useHistory()

   const handleLogout = async () => {
      await auth.signOut()
      history.push('/')
   }

   const getFile = async (url: string) => {
      const resp = await fetch(url)
      const data = await resp.blob()

      return new File([data],
         'userPhoto.jpg',
         { type: 'image/jpeg' })
   }

   useEffect(() => {
      if (!user || user === null) {
         history.push('/')
         return
      }
      axios.get('https://api.chatengine.io/users/me/', {
         headers: {
            'Project-ID': process.env.REACT_APP_CHAT_ENGINE_ID,
            'User-Name': user.email,
            'User-Secret': user.uid,
         }
      })
         .then(() => {
            setLoading(false)
         })
         .catch(() => {
            let formData = new FormData()
            formData.append('email', user.email)
            formData.append('username', user.email)
            formData.append('secret', user.uid)
            getFile(user.photoURL)
               .then((avatar) => {
                  formData.append('avatar', avatar, avatar.name)
                  axios.post('https://api.chatengine.io/users/',
                     formData,
                     {
                        headers: {
                           'private-key': process.env.REACT_APP_CHAT_ENGINE_KEY
                        }
                     })
                     .then(() => setLoading(false))
                     .catch((error) => console.log(error))
               })
         })
   }, [user, history])

   if (loading) return <h1>YES</h1>

   return (
      <div className={style.chatsPage}>
         <div className={style.navBar}>
            <div className={style.logoTab}>
               React-Typescript chat application
            </div>
            <div
               onClick={() => handleLogout()}
               className={style.logoutTab}>
               Log out
            </div>
         </div>
         <ChatEngine
            height='calc(100vh - 66px)'
            projectID={process.env.REACT_APP_CHAT_ENGINE_ID}
            userName={user?.email}
            userSecret={user?.uid}
         />
      </div >
   )
}

export default Chats