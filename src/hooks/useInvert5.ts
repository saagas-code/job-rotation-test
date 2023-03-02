
import { useState, useEffect } from 'react';


export const useInvert = () => {
  const [valueInput, setValueInput] = useState('')
  const [result, setResult] = useState('')

  const reverseFunction = (txt: string) => {
    const length = txt.length
    let indice = length
    let newString = ''

    while (indice > 0) {
      newString = newString+txt[indice - 1]
      indice = indice - 1
    }
    setResult(newString)
  }

  useEffect(() => {
    reverseFunction(valueInput)
  }, [valueInput])

  return ({
    result, setValueInput
  })
}