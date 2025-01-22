import { useEffect } from "react"

export const useAuth = (userId) => {
    useEffect(() => {
        if (userId) {
            localStorage.setItem('userId', userId)
        }
    }, [userId])

    if(localStorage.getItem('userId')){
        return true 
      }else {
        return false
      }
}