import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";
import S from "./footer.module.scss";

export default function footer() {
  return (
    <footer>
      <section className={S.boxSocial}>
        <h3>4002-8922</h3>
        <nav>
          <a href=""></a>{" "}
          <img src={facebook} alt="imagem da logo do facebook" />
          <a href=""></a> <img src={twitter} alt="imagem da logo do twitter" />
          <a href=""></a> <img src={youtube} alt="imagem da logo do youtube" />
          <a href=""></a>{" "}
          <img src={linkedin} alt="imagem da logo do linkedin" />
          <a href=""></a>{" "}
          <img src={instagram} alt="imagem da logo do instagram" />
        </nav>
      </section>
      <section className={S.boxEnd}>
        <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
      </section>
    </footer>
  );
}
