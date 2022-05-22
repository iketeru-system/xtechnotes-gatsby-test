import { useEffect } from 'react'

export const useTwitter = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://platform.twitter.com/widgets.js'
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])
}
