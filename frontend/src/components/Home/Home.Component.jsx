import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="main--component">
      <section className="home--section" id="inicio">
        <div className="welcome--itens">
          <div>
            <img
              src="./images/Layer-1.png"
              alt="school logo"
              className="image--home"
            />
          </div>
          <div className="ML">
            <h1>Master Learn</h1>
            <h3>Escola de Programação</h3>
          </div>
        </div>

        <div className="content--section">
          <div className="styled--item">
            <h4>html</h4>
          </div>
          <div className="styled--item">
            <h4>css</h4>
          </div>
          <div className="styled--item">
            <h4>javascript</h4>
          </div>
          <div className="styled--item">
            <h4>mysql</h4>
          </div>
          <div className="styled--item">
            <h4>mongodb</h4>
          </div>
          <div className="styled--item">
            <h4>react</h4>
          </div>
        </div>
      </section>

      <section className="about--section" id="sobre-nos">
        <div>
          <h1>sobre nós</h1>
          <h4>Bem-vindo(a) a Master Learn a escola programação online!</h4>
          <br />
          <h4>
            Nossa plataforma online proporciona uma experiência de aprendizado
            intuitiva, permitindo que você acesse nossos cursos de qualquer
            lugar, a qualquer momento. Você terá acesso a videoaulas
            envolventes, exercícios interativos de codificação e projetos
            práticos que simulam situações do mundo real. Nosso objetivo é não
            apenas ensinar as habilidades técnicas, mas também desenvolver sua
            capacidade de resolver problemas e pensamento crítico,
            características essenciais para um programador de sucesso.
          </h4>
          <br />
          <h4>
            Acreditamos que a aprendizagem deve ser um processo colaborativo e
            de apoio. Por meio de nossos fóruns e oportunidades de networking,
            você terá a chance de se conectar com outros alunos, compartilhar
            ideias e colaborar em projetos. Nossos instrutores e equipe de
            suporte estão sempre disponíveis para oferecer orientação e
            responder a quaisquer dúvidas que possam surgir durante sua jornada.
          </h4>
        </div>
        <div>
          <img src="./images/OBJECTS.png" alt="about" className="about-img" />
        </div>
      </section>

      <div className="price--section" id="precos">
        <div className="prices--infos">
          <h1>escolha seu plano</h1>
          <h4 className="prices-h4">
            e venha fazer parte da melhor escola de programação do brasil.
          </h4>
          <div className="prices">
            <div className="price">
              <i class="bi bi-diamond"></i>
              <h2>básico</h2>
              <h3>R$ 30/mês</h3>
              <h4 className="infos">
                este é nosso plano básico ele cobre 70% do contéudo da
                plataforma isso inclui:
              </h4>
              <br />
              <div className="offer-list">
                <h4>
                  <i class="bi bi-check-lg"></i> video aulas
                </h4>
                <h4>
                  <i class="bi bi-check-lg"></i> forum para duvidas
                </h4>
                <h4>
                  <i class="bi bi-check-lg"></i> suporte 12h
                </h4>
                <h4>
                  <i class="bi bi-check-lg"></i> 3 video conferências ao mês
                </h4>
                <h4>
                  <i class="bi bi-check-lg"></i> comunidade discord
                </h4>
                <h4>
                  <i class="bi bi-check-lg"></i> professor particular*
                </h4>
              </div>
              <input type="button" value="Contratar" className="btn-primary" />
            </div>

            <div className="price foccus">
              <i class="bi bi-diamond-half"></i>
              <h2>Pro</h2>
              <h3>R$ 90/mês</h3>
              <h4 className="infos">
                este é nosso plano pro ele cobre 100% do contéudo da plataforma
                isso inclui:
              </h4>
              <br />
              <div className="offer-list">
                <h4>
                  <i class="bi bi-check-lg"></i> video aulas
                </h4>
                <h4>
                  <i class="bi bi-check-lg"></i> forum para duvidas
                </h4>
                <h4>
                  <i class="bi bi-check-lg"></i> suporte 24h
                </h4>
                <h4>
                  <i class="bi bi-check-lg"></i> video conferências
                </h4>
                <h4>
                  <i class="bi bi-check-lg"></i> comunidade vip
                </h4>
                <h4>
                  <i class="bi bi-check-lg"></i> professor particular
                </h4>
              </div>
              <input type="button" value="Contratar" className="btn-primary" />
            </div>

            <div className="price">
              <i class="bi bi-diamond-fill"></i>
              <h2>Empresas</h2>
              <h3>R$ 190/mês</h3>
              <h4 className="infos">
                este é nosso plano empresarial ele cobre 100% do contéudo isso
                inclui:
              </h4>
              <br />
              <div className="offer-list">
                <h4>
                  <i class="bi bi-check-lg"></i> video aulas
                </h4>
                <h4>
                  <i class="bi bi-check-lg"></i> forum para duvidas
                </h4>
                <h4>
                  <i class="bi bi-check-lg"></i> suporte 24h
                </h4>
                <h4>
                  <i class="bi bi-check-lg"></i> video conferências
                </h4>
                <h4>
                  <i class="bi bi-check-lg"></i> comunidade premium
                </h4>
                <h4>
                  <i class="bi bi-check-lg"></i> professor particular
                </h4>
              </div>
              <input type="button" value="Contratar" className="btn-primary" />
            </div>
          </div>
        </div>
      </div>

      {/* #TODO Tutors section */}
      <div className="tutors--section" id="professores">
        <h1 className="tutor-know-1">conheça o time</h1>
        <h5 className="tutor-know-2">A Master Learn conta com os melhores professores nas principais areas do desenvolvimento web</h5>

        <div className="tutors">

          <div className="tutor">
            <img src="./images/tutor-1.jpg" alt="tutor" className="tutor--img"/>
            <h1>Fernando</h1>
            <h5>Back-end</h5>
          </div>

          <div className="tutor">
            <img src="./images/tutor-2.jpg" alt="tutor" className="tutor--img"/>
            <h1>Clara</h1>
            <h5>Front-end</h5>
   
          </div>

          <div className="tutor">
            <img src="./images/tutor-3.jpg" alt="tutor" className="tutor--img"/>
            <h1>Lucca</h1>
            <h5>UX/UI</h5>

          </div>

        </div>
      </div>

      {/* #TODO Depoiments section */}
      <div className="depoiments--section" id="depoimentos"></div>

      {/* #TODO Contact us section */}
      <div className="contact--section" id="contato"></div>
    </div>
  );
};

export default Home;
