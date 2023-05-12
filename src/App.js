import { useState } from "react";
import "./index.css";

export const App = () => {

  const [sprinter, setSprinter] = useState(0)
  const [hr, seTHr] = useState(0)
  const [hrRferi, seTHrRferi] = useState(0)
  const [c20, setC20] = useState(0)
  const [ranger, setRanger] = useState(0)
  const [pipa, setPipa] = useState(0)
  const [lista, setLista] = useState([])


  return (
    <div className="divBase">
      <div className="divH1">
        <h1>Tebela Mercado Livre</h1>
      </div>
      <div className="divBaseTabela ">
        <table>
          <thead>
            <tr className="coluna">
              <th>Anúncio</th>
              <th>Visualizações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>sprinter</td>
              <td>{sprinter}</td>
            </tr>
            <tr>
              <td>hr 2014</td>
              <td>{hr}</td>
            </tr>
            <tr>
              <td>hr 2014 refri</td>
              <td>{hrRferi}</td>
            </tr>
            <tr>
              <td>c20</td>
              <td>{c20}</td>
            </tr>
            <tr>
              <td>Ranger</td>
              <td>{ranger}</td>
            </tr>
            <tr>
              <td>pipa</td>
              <td>{pipa }</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <form>
          <h3>vizu</h3>
          <label>sprinter</label>
          <input value={sprinter} onChange={(event)=>{
            setSprinter(event.target.value)
          }}/>
          <label>hr 2014</label>
          <input value={hr} onChange={(event)=>{
            seTHr(event.target.value)
          }}/>
          <label>hr 2014 refri</label>
          <input value={hrRferi} onChange={(event)=>{
            seTHrRferi(event.target.value)
          }}/>
          <label>c20</label>
          <input value={c20} onChange={(event)=>{
            setC20(event.target.value)
          }}/>
          <label>ranger</label>
          <input value={ranger} onChange={(event)=>{
            setRanger(event.target.value)
          }}/>
          <label >pipa</label>
          <input value={pipa} onChange={(event)=>{
            setPipa(event.target.value)
          }}/>
        </form>
        <button onClick={()=>{
          const obj = {sprinter,hr, hrRferi, c20, ranger, pipa}
          setLista([...lista, obj ])
          console.log(lista)
        }}>salvar</button>
        {lista.map((o)=>{
          return(
            <>
            <p>{o.sprinter}</p>
            <p>{o.sprinter}</p>
            <p>{o.sprinter}</p>
            <p>{o.sprinter}</p>
            </>
          )
        })}
      </div>
    </div>
  );
};
