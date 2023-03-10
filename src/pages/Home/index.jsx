import SloganHome from "../../components/Slogan";
import BackgroundImage from "../../components/Background";
import Logotipo from "../../components/Logotipo";
import HomeStyle from "./style";
import { FaSearchPlus } from "react-icons/fa";
// modais de login & cadastro
import LoginOrLogout from "../../components/LoginOrLogout";
import ModalLoginOrLogout from "../../components/ModalLoginOrLogout";
import RegisterUserModal from "../../components/ModalRegisterUser";
// modais de listar ads & cadastrar ads
import ModalListAds from "../../components/ModalListAds";
import ModalCreateAds from "../../components/ModalListAds/components/ModalCreateAds";

// Database
import { gamesList } from "../../database/games_list";
import CardGame from "./components/Cards";
import { useContext } from "react";
import { HomePageContext } from "../../context/MainPage";

function HomePage() {

  const modalsControl = ()=>{
    setOpenModalCreateAds(true)
    setOpenModalListAds(false)
  }

  const {openModalListAds, setOpenModalListAds, openModalCreateAds, setOpenModalCreateAds,
    openModalLogin, setOpenModalLogin, openModalRegisterUser, setOpenModalRegisterUser, authenticated } = useContext(HomePageContext)
  return (
    <>
      <LoginOrLogout setOpenModalLogin={setOpenModalLogin}/>
      {openModalLogin && <ModalLoginOrLogout setOpenModalLogin={setOpenModalLogin} setOpenModalRegisterUser={setOpenModalRegisterUser}/>}
      {openModalRegisterUser && <RegisterUserModal setOpenModalRegisterUser={setOpenModalRegisterUser}/>}
      <HomeStyle>
        <div>
          <BackgroundImage />
        </div>
        <div>
          <h1>Duogaming</h1>{" "}
          {/* <h1/> está invisivel - existe apenas para o rank de sites*/}
          <Logotipo />
        </div>
        <div>
          <SloganHome />
        </div>
        <section>
          {gamesList.map((game, index) => (
            <CardGame game={game} key={index} setOpenModalListAds={setOpenModalListAds} setOpenModalCreateAds={setOpenModalCreateAds}/>
          ))}
        </section>
        {authenticated && <footer>
          <div>
            <div>
              <h2>Não encontrou seu duo?</h2>
              <span>Publique um anúncio para encontrar novos players!</span>
            </div>
            <div onClick={()=> modalsControl()} about='abrir menu de criação de anuncios'>
              <FaSearchPlus />
              <button>Publicar anúncio</button>
            </div>
          </div>
        </footer>}
      </HomeStyle>
      {openModalListAds && <ModalListAds setOpenModalListAds={setOpenModalListAds}/>}
      {openModalCreateAds && <ModalCreateAds setOpenModalCreateAds={setOpenModalCreateAds}/>}
    </>
  );
}

export default HomePage;
