import S from "./doados.module.scss";
import protagonista from "../../assets/protagonista.png";
import axios from "axios";
import { useState,useEffect } from "react";

export default function Doados() {

  const[livro, setlivros] = useState([])

  const getlivros = async () => {
    const response = await axios.get("https://projeto-api-1-rdkv.onrender.com/livros")
  setlivros(response.data)  
  }

  useEffect(()=>{
    getlivros()
  },[])

  return (
    <section className={S.boxDoados}>
      <h2>Livros Doados</h2>
      <section className={S.boxcard}>
        <article>
          <img src={protagonista} alt="" />
          <h3>O protagonista</h3>
          <p>Susanne Andrade</p>
          <p>Ficção</p>
        </article>
        {livro.map((item)=>(
          <article key={item.id}>
            <img src={item.imagem_url} alt="" />
            <h3>{item.titulo}</h3>
            <p>{item.categoria}</p>
            <p>{item.autor}</p>
          </article>
        ))}
      </section>
    </section>
  );
}
