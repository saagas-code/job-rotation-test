import './App.css'
import { useFibonnaci } from './hooks/useFibonnaci2';
import { useFatDist } from './hooks/useFatDist3';
import { useMensalData } from './hooks/useMensalData4';
import { useInvert } from './hooks/useInvert5';
import { currency } from './format/currency';

function App() {
  
  //  #2
  const {
    setNumber, verifyIfIncludeInFibonnaci
  } = useFibonnaci()

  // #3
  const {
    dias, maiorFat, menorFat, json
  } = useFatDist()

  // #4
  const { mensalData, total } = useMensalData()

  // #5
  const { result, setValueInput } = useInvert()
  
  

  
  return (
    <div className="">
      <div 
        style=
        {{ 
          borderBottom: '2px solid white',
          paddingBottom: '10px',
          marginTop: '10px'
        }}
        className=""
      >
        <h2 >#2 Verificar se o número pertence a sequencia de fibonnaci</h2>
        <div 
        >
          <form 
            action=""
            style={{display: 'inline-flex', 
            flexDirection: 'column'}}
          >
            <input 
              onChange={(e) => setNumber(e.target.value as any)} 
              type="number" 
            />

            <button 
              type={'submit'}
              style={{marginTop: '10px'}}
              onClick={() => verifyIfIncludeInFibonnaci()}
            >
                Selecionar
            </button>
          </form>
        </div>
      </div>

      <div 
        style=
        {{ 
          borderBottom: '2px solid white',
          paddingBottom: '10px',
          marginTop: '10px'
        }}
      >
        <h2 >#3 Cálculo dos dados da distribuidora</h2>

        <div style={{display: 'flex', justifyContent: 'center'}}>
        <table >
          <thead >
            <tr >
              <th >
                dia
              </th>
              <th >
                faturamento
              </th>
            </tr>
          </thead>
          <tbody >
            {json.map((i, k) => (
              <>
                <tr>
                  <td>
                    {i.dia}
                  </td>
                  <th>
                    {currency(i.valor, 'pt-BR', 'BRL')}
                  </th>
                </tr>
                
              </>
            ))}
          </tbody>
        </table>
        </div>

        <div className="">Maior Valor de faturamento mensal: {maiorFat} </div>
        <div className="">Menor Valor de faturamento mensal: {menorFat}</div>
        <div className="">Dias que não houve faturamento mensal maior que a média: {dias}</div>
        <button onClick={() => alert(JSON.stringify(json))}>Ver Json</button>
      </div>

      <div 
        style=
        {{ 
          borderBottom: '2px solid white',
          paddingBottom: '10px',
          marginTop: '10px'
        }}
      >
        <h2 >#4 Cálculo mensal da distribuidora por estado</h2>
        {mensalData.map((i, k) => (
          <div key={k} className="">
            {i.estado.toUpperCase()} - {i.faturamento.toLocaleString("pt-BR", {style: 'currency', currency: 'BRL'})} - {i.porcentagem}%
          </div>
        ))}
        <div className="">
          TOTAL - {currency(total, 'pt-BR', 'BRL')}
        </div>
      </div>

      <div 
        style=
        {{ 
          borderBottom: '2px solid white',
          paddingBottom: '10px',
          marginTop: '10px'
        }}
      >
        <h2 >#5 Inversão de palavras</h2>
        {result &&
          <h3>{result}</h3>
        }
        <form 
            action=""
            style={{display: 'inline-flex', 
            flexDirection: 'column'}}
          >
            <input 
              onChange={(e) => setValueInput(e.target.value as string)} 
            />

            <button 
              type={'submit'}
              style={{marginTop: '10px'}}
              
            >
                Inverter
            </button>

          </form>
        
      </div>
      

    </div>
  )
}

export default App
