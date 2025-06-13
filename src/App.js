// stacks
import { ReactComponent as Css } from "./assets/stacks/css3.svg";
import { ReactComponent as Html } from "./assets/stacks/html.svg";
import { ReactComponent as Js } from "./assets/stacks/javascript.svg";
import { ReactComponent as ReactLogo } from "./assets/stacks/react.svg";
import { ReactComponent as Node } from "./assets/stacks/node.svg";

// others
import { ReactComponent as Plus } from "./assets/icons/plus.svg";
import { ReactComponent as External } from "./assets/icons/externalLink.svg";

// social
import { ReactComponent as Github } from "./assets/social/github.svg";
import { ReactComponent as Linkedin } from "./assets/social/linkedin.svg";
import { ReactComponent as Email } from "./assets/social/email.svg";

import perfil from "./assets/img/perfil.jpg";

//components
import SkillPill from "./components/SkillPill";
import IconLink from "./components/IconLink";

function App() {
  return (
    <div className="inline-flex flex-col justify-start items-center gap-8">
      <nav className="bg-black flex z-10 px-3.5 py-[5px] rounded-[10px] outline outline-[-2px] outline-offset-[-1.30px] outline-orange-500">
        <ul className="flex list-none gap-6">
          <li className="holographic-hover hover:scale-105 hover:bg-gray-800 transition-transform duration-300 ease-in-out rounded-lg px-2 py-1">
            <a
              href="#sobre"
              className="relative z-10 no-underline text-xl text-white text-center font-semibold font-inter hover:text-orange-400 hover:drop-shadow-md transition-colors duration-300"
            >
              Sobre
            </a>
          </li>

          <li className="holographic-hover hover:scale-105 hover:bg-gray-800 transition-transform duration-300 ease-in-out rounded-lg px-2 py-1">
            <a
              href="/"
              className="relative z-10 no-underline text-xl text-white text-center font-semibold font-inter hover:text-orange-400 hover:drop-shadow-md transition-colors duration-300"
            >
              Projetos
            </a>
          </li>

          <li className="holographic-hover hover:scale-105 hover:bg-gray-800 transition-transform duration-300 ease-in-out rounded-lg px-2 py-1">
            <a
              href="/"
              className="relative z-10 no-underline text-xl text-white text-center font-semibold font-inter hover:text-orange-400 hover:drop-shadow-md transition-colors duration-300"
            >
              Contatos
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex flex-col items-center">
        <h1 className="text-[96px]">Gabriel Martins</h1>
        <h4>DESENVOLVEDOR FULLSTACK</h4>
        <h6 className="text-[#c4c4c4]">Criando softwares eficientes</h6>
      </div>

      <button class="holographic-hover p-2.5 rounded-[10px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1.00)] outline outline-orange-500 inline-flex flex-col justify-center items-center gap-2.5 bg-transparent hover:bg-gray-800 transition-all duration-300">
        <span class="relative z-10 text-white text-xl font-bold font-['Inter'] leading-normal text-center">
          CURRÍCULO
        </span>
      </button>

      {/* stacks */}
      <div className="flex gap-4">
        <Css className="w-10 h-10" />
        <Html className="w-10 h-10" />
        <Js className="w-10 h-10" />
        <ReactLogo className="w-10 h-10" />
        <Node className="w-10 h-10" />
      </div>

      <h3 className="mt-10">Sobre Mim</h3>

      {/* sobre mim */}
      <div
        id="sobre"
        class="self-stretch inline-flex justify-start items-center gap-12"
      >
        <p>
          Prazer, Sou <span>jovem desenvolvedor</span> web capaz de{" "}
          <span>criar projetos do zero</span> e <span>bem estruturados</span>
          .&nbsp;
          <br />
          <br />
          Meu interesse por programação começou em <span>2018</span>, quando
          tive meu primeiro contato com a linguagem <span>c#</span>. Naquela
          época, adorava <span>criar programas</span> simples, como
          calculadoras, e <span>compartilhar meus scripts</span> com os meus
          amigos.
          <br />
          <br />
          Somente em <span>2024</span> que eu tive a oportunidade de{" "}
          <span>estudar</span> mais <span>seriamente</span> sobre a área e
          descobri que essa era <span>minha vocação</span>. Tenho me dedicado a{" "}
          <span>aprender</span> tecnologias modernas como{" "}
          <span>Javascript</span>, <span>Node.js</span>, e <span>React</span> e
          atualmente estou estudando <span>UI/UX</span>.
          <br />
          <br />
          Estou sempre <span>me desafiando</span> e me atualizando com as
          tendências do mercado. Sigo motivado por aquela mesma{" "}
          <span>curiosidade</span> de quando comecei, agora com ainda mais{" "}
          <span>foco disciplina</span> e vontade de <span>construir</span>{" "}
          soluções <span>úteis</span> e bem feitas.
        </p>
        {/* img */}
        <div className="inline-flex justify-start items-center gap-5">
          <div className="w-80 h-80 rounded-full overflow-hidden">
            <img
              src={perfil}
              alt="foto"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* experiencias */}
        <div class="inline-flex flex-col justify-center items-center gap-10">
          <div class="flex flex-col justify-start items-start gap-0.5">
            <div class="inline-flex justify-center items-center overflow-hidden">
              <div class="flex justify-center items-center gap-0.5">
                <h5>1</h5>
                <Plus className="w-8 h-8 stroke-orange-500 text-orange-500" />
              </div>
            </div>
            <div class="inline-flex justify-center items-center">
              <p className="text-lg">Ano de experiencia</p>
            </div>
          </div>
          <div class="flex flex-col justify-start items-start gap-0.5">
            <div class="inline-flex justify-center items-center overflow-hidden">
              <div class="flex justify-center items-center gap-0.5">
                <h5>4</h5>
                <Plus className="w-8 h-8 stroke-orange-500 text-orange-500" />
              </div>
            </div>
            <div class="inline-flex justify-center items-center gap-2.5">
              <p className="text-lg">Projetos Finalizados</p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="mt-10">Projetos</h3>

      {/* projetos */}
      <div class="self-stretch inline-flex flex-col justify-center items-center gap-6">
        <h5>StoreApp</h5>

        <p>
          Projeto pessoal baseado em <span>e-commerce</span> criado para fins{" "}
          <span>didáticos</span>, o usuário pode <span>colocar</span> produtos
          na lista de <span>favoritos</span>, <span>colocar</span> produtos no{" "}
          <span>carrinho</span> e <span>finalizar pedido</span>. Ele possui,
          design <span>responsivo</span>, sistema de autenticação{" "}
          <span>segura</span> e boa estruturação com o padrão <span>MVC</span>.
        </p>

        <div class="self-stretch flex flex-col justify-start items-start gap-3.5">
          <div className="self-stretch inline-flex justify-start items-center gap-2">
            <SkillPill text="Node.js" />
            <SkillPill text="MySQL" />
            <SkillPill text="Handlebars" />
            <SkillPill text="Javascript" />
            <SkillPill text="Tailwind" />
          </div>
          <div class="self-stretch inline-flex justify-start items-center gap-5">
            <IconLink icon={Github} href="https://github.com/gbr-dev-web" />
            <IconLink icon={External} href="https://storeapp-klm0.onrender.com/" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
