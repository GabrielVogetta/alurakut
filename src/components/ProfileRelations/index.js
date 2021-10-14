import styled from 'styled-components';
import Box from '../Box';

const ProfileRelationsBoxWrapper = styled(Box)`
  ul {
    display: grid;
    grid-gap: 8px;
    grid-template-columns: 1fr 1fr 1fr; 
    max-height: 220px;
    list-style: none;
  }
  img {
    object-fit: cover;
    background-position: center center;
    width: 100%;
    height: 100%;
    position: relative;
  }
  ul li a {
    display: inline-block;
    height: 102px;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    span {
      color: #FFFFFF;
      font-size: 10px;
      position: absolute;
      left: 0;
      bottom: 10px;
      z-index: 2;
      padding: 0 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-indeX: 1;
      background-image: linear-gradient(0deg,#00000073,transparent);
    }
  }
`; 

export function ProfileRelationsComunitiesBox(props){
  return(
      <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
              Comunidades ({props.comunidades.length})
          </h2>

          <ul>
              {props.comunidades.map( (itemAtual, index) => {

              if(index + 1 < 7){
                  return(
                  <li key={itemAtual.id}>
                      <a href={itemAtual.link}>
                        <img src={itemAtual.imageUrl} alt="Imagem de capa da comunidade"/>
                        <span>{itemAtual.title}</span>
                      </a>
                  </li>
                  );
              }

              })}
          </ul>
      </ProfileRelationsBoxWrapper>
  );
}

export function ProfileRelationsFollowersBox(props){
  return(
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        { `${props.title} (${props.perfis.length})` }
      </h2>

      <ul>
        {props.perfis.map( (itemAtual, index) => {

          if(index + 1 < 7){
            return(
              <li key={itemAtual.id}>
                <a href={`https://github.com/${itemAtual.login}`}>
                  <img src={itemAtual.avatar_url} alt="Imagem de perfil"/>
                  <span>{itemAtual.login}</span>
                </a>
              </li>
            );
          }

        })}
      </ul>
    </ProfileRelationsBoxWrapper>
  );
}

export function ProfileRelationsFavoritiesBox(props){
  return(
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        { `${props.title} (${props.perfis.length})` }
      </h2>

      <ul>
        {props.perfis.map( (itemAtual, index) => {

          if(index + 1 < 7){
            return(
              <li key={itemAtual}>
                <a href={`https://github.com/${itemAtual}`}>
                  <img src={`https://github.com/${itemAtual}.png`} alt="Imagem de perfil"/>
                  <span>{itemAtual}</span>
                </a>
              </li>
            );
          }

        })}
      </ul>
    </ProfileRelationsBoxWrapper>
  );
}