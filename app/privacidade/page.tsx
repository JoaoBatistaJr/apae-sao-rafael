import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PoliticaPrivacidadePage() {
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
            Política de Privacidade
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
                Esta Política de Privacidade descreve como a APAE São Rafael
                coleta, usa, armazena e protege os dados pessoais de quem
                utiliza este site, em conformidade com a Lei Geral de Proteção
                de Dados Pessoais (Lei nº 13.709/2018 — LGPD).
              </p>

              <h2 className="mt-10 mb-3 text-xl font-extrabold text-gray-900">
                1. Quem somos
              </h2>
              <p>
                A APAE São Rafael é uma associação sem fins lucrativos, com sede
                na Rua José Bezerra de Araújo, nº 200, São Rafael/RN,
                responsável pelo tratamento dos dados pessoais coletados através
                deste site (&ldquo;Controladora&rdquo;).
              </p>

              <h2 className="mt-10 mb-3 text-xl font-extrabold text-gray-900">
                2. Quais dados coletamos
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Formulário de contato:</strong> nome, e-mail e
                  telefone informados voluntariamente.
                </li>
                <li>
                  <strong>Doações:</strong> nome, e-mail e dados de pagamento
                  processados diretamente pelo Mercado Pago — não armazenamos
                  dados de cartão em nossos servidores.
                </li>
                <li>
                  <strong>Voluntariado e parcerias:</strong> nome, contato e
                  informações fornecidas ao manifestar interesse via formulário
                  ou WhatsApp.
                </li>
                <li>
                  <strong>Navegação:</strong> dados agregados e anônimos de uso
                  do site, coletados pelo Vercel Analytics, sem identificação
                  individual do visitante.
                </li>
              </ul>

              <h2 className="mt-10 mb-3 text-xl font-extrabold text-gray-900">
                3. Finalidade do tratamento
              </h2>
              <p>
                Utilizamos os dados coletados para: responder solicitações de
                contato; processar doações e assinaturas de apadrinhamento;
                organizar o cadastro de voluntários e parceiros; e entender o
                uso do site para melhorá-lo continuamente.
              </p>

              <h2 className="mt-10 mb-3 text-xl font-extrabold text-gray-900">
                4. Compartilhamento de dados
              </h2>
              <p>
                Dados de pagamento são compartilhados exclusivamente com o
                Mercado Pago, na qualidade de operador de pagamentos, seguindo
                os padrões de segurança da própria plataforma. Não vendemos,
                alugamos ou compartilhamos dados pessoais com terceiros para
                fins de publicidade.
              </p>

              <h2 className="mt-10 mb-3 text-xl font-extrabold text-gray-900">
                5. Armazenamento e segurança
              </h2>
              <p>
                Os dados são armazenados em ambiente seguro e mantidos apenas
                pelo tempo necessário para cumprir as finalidades descritas
                nesta política ou obrigações legais aplicáveis.
              </p>

              <h2 className="mt-10 mb-3 text-xl font-extrabold text-gray-900">
                6. Seus direitos
              </h2>
              <p>
                Nos termos do art. 18 da LGPD, você pode solicitar a qualquer
                momento: confirmação da existência de tratamento, acesso,
                correção, anonimização, portabilidade ou eliminação dos seus
                dados pessoais, além de revogar o consentimento dado.
              </p>

              <h2 className="mt-10 mb-3 text-xl font-extrabold text-gray-900">
                7. Contato
              </h2>
              <p>
                Para exercer seus direitos ou tirar dúvidas sobre esta política,
                entre em contato pelo e-mail{" "}
                <a
                  href="mailto:apaesaorafael@gmail.com"
                  className="font-semibold text-[#003F8A] underline"
                >
                  apaesaorafael@gmail.com
                </a>{" "}
                ou pelo telefone (84) 9 9612-4672.
              </p>

              <h2 className="mt-10 mb-3 text-xl font-extrabold text-gray-900">
                8. Alterações desta política
              </h2>
              <p>
                Esta política pode ser atualizada periodicamente. A data da
                última revisão está sempre indicada no topo desta página.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
