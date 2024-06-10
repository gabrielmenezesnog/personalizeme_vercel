# Personalize.me: um gerador de currículos

O projeto [personalize.me](https://personalizeme.vercel.app/) se baseia no conceito de um gerador de currículos em PDF. Nele é possível criar um currículo, ver uma lista dos currículos criados, editar e também excluir.

## O pocesso

Iniciei o projeto criando todo o seu esign no <b>Figma</b>, tanto mobile quanto desktop. Com o design pronto, parti para o código, que foi feito usando o <b>framework Vue-js 3 com Typescript</b>. Comecei com as telas estáticas, criação de componentes, adequação <b>SCSS e BEM naming convention</b>, bem como a criação de algumas <b>animações</b> na homepage. Implementei o <b>vue-router</b> para navegação entre views, o <b>vuelidate</b> para validação de formulários (mesmo que ainda simples neste projeto, devido ao tempo) e o axios para realizar a integração com o <b>Cru/dCrud<b>. Depois de corrigir alguns bugs e com todas as implementações funcionando, o projeto deixou de ser estático e agora se comunica com a API, possibilitando visualizar como o projeto seria com um back-end.

O código está separado em <b>pastas auto-descritivas</b>. Por exemplo: na seção "components" temos os componentes, na seção "views" temos as páginas, na seção "api" temos a configuração central da API (axios), etc.

Na questão dos <b>commits</b>, optei pelo modelo [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) para facilitar o entendimento do que um commit quer dizer. Também fragmentei processos grandes, como a implementação do formulário por completo, por exemplo, em <b>commits menores</b> e mais claros para que fosse possível para o reviewer observar com mais clareza e entender o que foi implementado.

## Como rodar

Importante: priorize utilizar uma versão nodeJS >= 18.

- Clone este repositório;
- Abra o repositório clonado em um editor de código (VSCode ou WebStorm, por exemplo);
- Execute o comando `npm install` para instalar todas as dependências do projeto;
- Execute o comando `npm run dev` e espere até que o código seja compilado;
- Acesse o endereço localhost informado no terminal e
- pronto, o projeto está rodando!

## Sobre mim

Perfil do burh: https://burh.com.br/gabrielnogueira38

Meu nome é Gabriel de Menezes Nogueira, tenho 22 anos e atuo como Desenvolvedor Front End (Full Stack também, a gente precisa saber fazer de tudo né hahaha), com três anos de experiência na área. Possuo boa experiência com React-JS, React-native, Next-JS, Vue-JS, JavaScript/ Typescript, Java Spring Boot e no design UX/UI.
