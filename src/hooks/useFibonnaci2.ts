
import { useState, useEffect } from 'react';

export const useFibonnaci = () => {
  const [fibonnaciLength, setFibonnaciLength] = useState(10)
  const [fibonnaciArray, setFibonnaciArray] = useState<number[]>([])
  const [number, setNumber] = useState<number>(0)

  const getFibonnaciNumbers = () => {
    let firstN = 0
    let secondN = 1
    let nextN = 0
    nextN = firstN + secondN

    let array: number[] = [
      firstN,
      secondN,
      nextN
    ]

    while (array.length <= fibonnaciLength) {
      firstN = secondN
      secondN = nextN
      nextN = firstN + secondN
      array.push(nextN)
    }
    setFibonnaciArray(array)
  }

  const verifyIfIncludeInFibonnaci = () => {
    const boolean = fibonnaciArray.includes(parseInt(number as any))
    if(boolean) {
      alert('Este número pertence a sequencia !')
      return
    }
    alert("Este número não pertence a sequencia !")
  }

  useEffect(() => {
    getFibonnaciNumbers()
  }, [])

  return (
    {
      fibonnaciLength, 
      fibonnaciArray, setFibonnaciArray,
      number, setNumber,
      getFibonnaciNumbers, verifyIfIncludeInFibonnaci
    }
  )
}