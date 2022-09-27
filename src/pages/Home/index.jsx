import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Container, TextContent, Title, TitleHighLight } from "./styles";
import BannerImage from "../../assets/banner.png";

const Home = () => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate("/login");
  };

  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighLight>
              Implemente
              <br />
            </TitleHighLight>
            o seu futuro Global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>
          <Button
            title="Começar agora"
            variant="secondary"
            onClick={handleClickSignIn}
          />
        </div>
        <div>
          <img src={BannerImage} alt="Imagem principal" />
        </div>
      </Container>
    </>
  );
};

export { Home };
