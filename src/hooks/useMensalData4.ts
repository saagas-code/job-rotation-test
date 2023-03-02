
import { useState, useEffect } from 'react';

interface Data {
  estado: string
  faturamento: number
  porcentagem?: any | null
}

let json: Data[] = [
  {estado: 'SP', faturamento: 67836.43},
  {estado: 'RJ', faturamento: 29229.88},
  {estado: 'MG', faturamento: 27165.48},
  {estado: 'ES', faturamento: 19849.53},
  {estado: 'OUTROS', faturamento: 19849.53},
]

export const useMensalData = () => {
  const [data, setData] = useState<Data[]>(json)
  const [total, setTotal] = useState(0)

  const getMensalData = () => {
    let tempData = data
    const soma = tempData.reduce((a, b) => {return a + b.faturamento}, 0)
    for (let i in tempData) {
      tempData[i] = {...tempData[i], porcentagem: ((tempData[i].faturamento * 100) / soma).toFixed(0)}
    }
    setData(tempData)
    setTotal(soma)
  }

  useEffect(() => {
    getMensalData()
  }, [])

  return (
    {
      mensalData: data,
      total
    }
  )
}