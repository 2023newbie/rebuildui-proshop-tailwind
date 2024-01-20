import { useState } from 'react'

const useInput = () => {
  const [input, setInput] = useState('')

  const changeStateInput = e => {
    setInput(e.target.value)
  }

  return [input, changeStateInput]
}

export default useInput
