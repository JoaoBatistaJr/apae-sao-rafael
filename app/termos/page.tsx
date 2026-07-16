import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermosServicoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="w-full bg-[#003F8A]">
        <TopBar />
        <Header />
        <div
          className="container-site flex flex-col items-center text-center"
          style={{ paddingBlock: "48px" }}
        >
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Termos de Serviço
          </h1>
          <p
            className="mt-4 text-sm text-white/80"
            style={{ maxWidth: "520px" }}
          >
            Última atualização: 15 de julho de 2026
          </p>
        </div>
      </div>

      <main className="flex-1 bg-warm">
        <section className="w-full" style={{ paddingBlock: "60px" }}>
          <div className="container-site">
            <div
              className="mx-auto text-base leading-7 text-gray-700"
              style={{ maxWidth: "760px" }}
            >
              <p>
                Estes Termos de Serviço regulam o uso do site da APAE São
                Rafael. Ao acessar ou utilizar este site, você concorda com as
                condições abaixo.
              </p>

              <h2 className="mt-10 mb-3 text-xl font-extrabold text-gray-900">
                1. Objeto
              </h2>
              <p>
                Este site tem finalidade institucional: apresentar as atividades
                e serviços da APAE São Rafael, divulgar novidades e cursos,
                viabilizar contato com a instituição e possibilitar doações
                financeiras e de materiais em apoio à sua missão.
              </p>

              <h2 className="mt-10 mb-3 text-xl font-extrabold text-gray-900">
                2. Uso do site
              </h2>
              <p>
                O conteúdo deste site pode ser acessado livremente para fins
                informativos. É vedado o uso do site para fins ilícitos, que
                violem direitos de terceiros ou que comprometam seu
                funcionamento e segurança.
              </p>

              <h2 className="mt-10 mb-3 text-xl font-extrabold text-gray-900">
                3. Doações
              </h2>
              <p>
                As doações realizadas por meio deste site são processadas pelo
                Mercado Pago. A APAE São Rafael não armazena dados de cartão de
                crédito. Doações únicas não são reembolsáveis, salvo erro
                comprovado de processamento. Assinaturas recorrentes
                (&ldquo;padrinho&rdquo;) podem ser canceladas a qualquer momento
                pelo doador, sem burocracia ou custo adicional.
              </p>

              <h2 className="mt-10 mb-3 text-xl font-extrabold text-gray-900">
                4. Conteúdo de terceiros
              </h2>
              <p>
                Novidades, cursos e outras informações dinâmicas exibidas neste
                site são gerenciados pela equipe da APAE São Rafael através de
                plataforma de gestão de conteúdo (Notion). A instituição não se
                responsabiliza por instabilidades temporárias de serviços de
                terceiros integrados ao site (processamento de pagamentos,
                hospedagem, exibição de conteúdo).
              </p>

              <h2 className="mt-10 mb-3 text-xl font-extrabold text-gray-900">
                5. Propriedade intelectual
              </h2>
              <p>
                Textos, imagens e demais materiais deste site são de propriedade
                da APAE São Rafael ou utilizados com a devida autorização, sendo
                vedada sua reprodução comercial sem consentimento prévio.
              </p>

              <h2 className="mt-10 mb-3 text-xl font-extrabold text-gray-900">
                6. Alterações
              </h2>
              <p>
                Estes termos podem ser atualizados periodicamente, sem aviso
                prévio individual. Recomendamos a consulta ocasional desta
                página.
              </p>

              <h2 className="mt-10 mb-3 text-xl font-extrabold text-gray-900">
                7. Foro
              </h2>
              <p>
                Fica eleito o foro da Comarca de São Rafael/RN para dirimir
                quaisquer controvérsias decorrentes destes termos.
              </p>

              <h2 className="mt-10 mb-3 text-xl font-extrabold text-gray-900">
                8. Contato
              </h2>
              <p>
                Dúvidas sobre estes termos podem ser enviadas para{" "}
                <a
                  href="mailto:apaesaorafael@gmail.com"
                  className="font-semibold text-[#003F8A] underline"
                >
                  digital.apaesaorafael@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
