import { useSession } from 'next-auth/react'
import { useLocalStorage } from './use-local-storage'

interface DiamondStorage {
  diamonds: number
}

interface UserDiamonds {
  [userId: string]: DiamondStorage
}

export function useDiamonds(): [number, () => void] {
  const { data: session } = useSession()
  const userId = session?.user?.id || 'anonymous'
  
  const [userDiamonds, setUserDiamonds] = useLocalStorage<UserDiamonds>('user-diamonds', {})
  
  const currentUserDiamonds = userDiamonds[userId]?.diamonds || 0
  
  const incrementDiamonds = () => {
    setUserDiamonds((prev) => ({
      ...prev,
      [userId]: {
        diamonds: (prev[userId]?.diamonds || 0) + 1
      }
    }))
  }

  return [currentUserDiamonds, incrementDiamonds]
}
