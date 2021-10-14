import Box from "../Box";

function FormComunitiesBox(props){
    return(
        <Box>
            <h2 className="subTitle">
              O que você deseja fazer?
            </h2>
            <form onSubmit={ event => {
              event.preventDefault();

              const dadosDoForm = new FormData(event.target);

              const novaComunidade = {
                title: dadosDoForm.get("title"),
                imageUrl: dadosDoForm.get("image"),
                link: dadosDoForm.get("link"),
                creatorSlug: props.usuario,
              }

              fetch('/api/comunidades', {
                method: 'POST',
                headers: {
                  'Content-Type' : 'application/json',
                },
                body: JSON.stringify(novaComunidade)
              })
              .then(async (response) => {
                const dados = await response.json();
                props.atualizarComunidades(dados.record);
                event.target.reset();
              })
              
            }}>
              <div>
                <input 
                  placeholder="Qual vai ser o nome da sua comunidade?" 
                  name="title" 
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                />
              </div>
              <div>
                <input 
                  placeholder="Coloque uma URL para usarmos de capa" 
                  name="image" 
                  aria-label="Coloque uma URL para usarmos de capa"
                  type="text"
                />
              </div>
              <div>
                <input 
                  placeholder="Coloque o link de sua comunidade" 
                  name="link" 
                  aria-label="Coloque o link de sua comunidade"
                  type="text"
                />
              </div>

              <button>
                Criar comunidade
              </button>
            </form>
          </Box>
    );
}

export default FormComunitiesBox;