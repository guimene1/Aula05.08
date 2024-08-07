import React, { useEffect , useState} from 'react';
import './App.css';


function App(){
  const [nutri, setNutri] = useState([]);

  useEffect(()=>{
    let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'

    fetch(url) //envia uma requisição.
    .then((r)=> r.json()) //recebe a resposta em json.
    .then((json) => setNutri(json)) // salva a resposta na const 'nutri' por meio do metodo 'setNutri'.
  }, []);

  return(
    <div className='conteudokk'>
      <header>
        <strong>React Nutri</strong>
      </header>

      {nutri.map((item)=>{ //tipo um for para andar pelos itens
        return(
          <article key={item.id}>
            <strong>{item.titulo}</strong>
            <img src={item.capa} alt={item.titulo}/>
            <p>{item.subtitulo}</p>
            <button>Acessar</button>
          </article>
        );
      })}
    </div>
  );
}

export default App;