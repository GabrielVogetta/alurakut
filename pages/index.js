import React from "react";
import MainGrid from "../src/components/MainGrid";
import ProfileSideBar from "../src/components/ProfileSideBar";
import WelcomeBox from "../src/components/WelcomeBox";
import FormComunitiesBox from "../src/components/FormComunitiesBox";
import {AlurakutMenu} from "../src/lib/AlurakutCommons";
import {ProfileRelationsComunitiesBox, ProfileRelationsFollowersBox, ProfileRelationsFavoritiesBox} from "../src/components/ProfileRelations";

function Home() {

  const user = {
    userName: "GabrielVogetta",
  }

  const [comunidades, setComunidades] = React.useState([]);
  const [seguidores, setSeguidores] = React.useState([]);

  React.useEffect(function(){
    fetch("https://api.github.com/users/peas/followers")
      .then(res => res.json())
      .then(res => setSeguidores(res))


    const tokenDatoCMS = "24d7a96cea1421831af782ed1d5964";  
    // API GraphQL
    fetch("https://graphql.datocms.com/", {
      method: "POST",
      headers: {
        "Authorization" : tokenDatoCMS,
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "query": `{
          allCommunities{
            id
            title
            imageUrl
            link
            creatorSlug
          }
        }`
      })
    })
    .then(res => res.json())
    .then(res => {
      const comunidades = res.data.allCommunities;
      setComunidades(comunidades);
    })
  }, [])

  const favoritos = [
    "flaviohenriquealmeida", 
    "omariosouto", 
    "filipedeschamps",
    "marcobrunodev",
    "guilhermesilveira",
    "sergiolopes"
  ]
  

  return (
    <>
      <AlurakutMenu githubUser={user.userName}/>
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea"}}>
          <ProfileSideBar userName={user.userName}/>
        </div>

        <div className="welcomeArea" style={{ gridArea: "welcomeArea"}}>
          <WelcomeBox/>

          <FormComunitiesBox usuario={user.userName} atualizarComunidades={ novaComunidade => {
            setComunidades([...comunidades, novaComunidade]);
          }}/>
        </div>

        <div className="profileRelationsArea" style={{ gridArea: "profileRelationsArea"}}>
          <ProfileRelationsFollowersBox title="Seguidores" perfis={seguidores}/>
          <ProfileRelationsComunitiesBox comunidades={comunidades}/>
          <ProfileRelationsFavoritiesBox title="Favoritos" perfis={favoritos}/>
        </div>
      </MainGrid>
    </>
  );
}

export default Home;