import Image from "next/image";
import Head from "next/head";
import Balancer from "react-wrap-balancer";
import { Inter, MonteCarlo, Montserrat } from "next/font/google";

import { Button } from "@/components/Button";

const montserrat = Montserrat({ subsets: ["latin"] });
const monteCarlo = MonteCarlo({ subsets: ["latin"], weight: ["400"] });
const inter = Inter({ subsets: ["latin"] });

const whatsAppButtonLink =
  "https://wa.me/5522998221892/?text=Olá, Hiago! Tenho interesse em agendar uma consulta nutricional com você.";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hiago Ramos · Nutricionista</title>
        <meta
          name="description"
          content="Hiago Ramos oferece consultoria nutricional personalizada, visando melhorar sua saúde e qualidade de vida. Obtenha orientações alimentares específicas para suas necessidades e alcance seus objetivos."
        />
      </Head>

      <main className={montserrat.className}>
        <section className="bg-black px-9 pt-12 text-white md:h-[800px]">
          <div className="relative flex flex-col items-center gap-14 md:mx-auto md:h-full md:max-w-[1060px] md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col self-center text-center md:max-w-[504px] md:text-left">
              <h1
                className={`${monteCarlo.className} mb-12 text-2xl md:absolute md:top-0 md:mb-[84px]`}
              >
                Hiago Ramos
              </h1>
              <h2 className="mb-6 text-[32px] font-normal leading-[41.6px] md:mb-4 lg:text-5xl lg:leading-[62.4px]">
                <Balancer>
                  A{" "}
                  <strong className="font-bold">chave para a sua saúde</strong>{" "}
                  está em <strong className="font-bold">sua alimentação</strong>
                  .
                </Balancer>
              </h2>
              <p
                className={`${inter.className} mb-8 leading-[22.4px] md:text-lg md:leading-[28.8px]`}
              >
                <Balancer>
                  Mude sua vida através da <strong>alimentação saudável</strong>{" "}
                  com a ajuda de um <strong>nutricionista especializado</strong>
                  !
                </Balancer>
              </p>

              <div className="mx-auto md:mx-0 md:mb-16">
                <Button asChild>
                  <a href={whatsAppButtonLink} target="_blank" rel="nofollow">
                    Agende uma consulta
                  </a>
                </Button>
              </div>

              <a href="#about" className="hidden md:animate-bounce xl:block">
                <Image
                  alt="Ir para sessão abaixo"
                  src="/arrow-down.svg"
                  width={24}
                  height={24}
                />
              </a>
            </div>

            <Image
              alt="Foto do nutricionista Hiago Ramos em uma de suas salas de atendimento sentado de frente para um computador."
              src="/hiago-hero.jpeg"
              className="rounded-md md:self-center"
              width={378}
              height={578}
              priority
            />
          </div>
        </section>

        <section id="about" className="px-4 py-20">
          <div className="flex flex-col-reverse items-stretch max-w-5xl gap-12 mx-auto text-center md:flex-row md:items-center md:justify-between md:text-left">
            <Image
              alt="Foto nutricionista Hiago Ramos em uma de suas salas de atendimento."
              src="/hiago.jpeg"
              width={358}
              height={358}
              className="self-center object-none object-right mb-8 rounded-md"
            />

            <div className="md:flex-[2]">
              <h2 className="mb-1 font-bold uppercase leading-[130%] tracking-widest">
                Sobre mim
              </h2>

              <strong className="mb-6 block text-2xl leading-[130%]">
                Hiago Ramos
              </strong>
              <p className="mb-6 text-sm leading-[22.4px] opacity-80">
                <Balancer>
                  Hiago Ramos é um nutricionista altamente qualificado e
                  apaixonado por promover hábitos alimentares saudáveis e
                  equilibrados em seus pacientes. Com anos de experiência na
                  área, Hiago acredita que a nutrição é fundamental para uma
                  vida saudável e busca constantemente se manter atualizado
                  sobre as últimas tendências e pesquisas em nutrição e saúde.
                </Balancer>
              </p>

              <p className="text-sm leading-[22.4px] opacity-80">
                <Balancer>
                  Seu objetivo é ajudar seus pacientes a atingirem seus
                  objetivos de saúde e bem-estar, fornecendo um atendimento
                  personalizado e adaptando as recomendações nutricionais às
                  necessidades individuais de cada pessoa. Hiago é um defensor
                  da alimentação natural e acredita que a dieta deve ser baseada
                  em alimentos integrais e frescos.
                </Balancer>
              </p>
            </div>
          </div>
        </section>

        <section className="opacity- bg-[#f9f9f9] px-[37px] py-[53px]">
          <div className="flex flex-col items-center">
            <strong className="mb-6 text-center text-2xl leading-[31.2px]">
              <Balancer>Eu também produzo conteúdo no Instagram!</Balancer>
            </strong>

            <Button asChild variant="primary">
              <a href="#" rel="nofollow" target="_blank">
                @hiagoramosnutricionista
              </a>
            </Button>
          </div>
        </section>

        <section className="flex flex-col items-center px-3 py-20 text-center">
          <h2 className="mb-6 text-[32px] font-normal leading-[41.6px]">
            <Balancer>
              A <strong className="font-bold">chave para a sua saúde</strong>{" "}
              está em <strong className="font-bold">sua alimentação</strong>.
            </Balancer>
          </h2>
          <p className="mb-8">
            <Balancer>Entre em contato e mude sua alimentação!</Balancer>
          </p>

          <Button variant="secondary" asChild>
            <a href={whatsAppButtonLink} target="_blank" rel="nofollow">
              Agende uma consulta
            </a>
          </Button>
        </section>

        <footer className="border border-t-[#0000001a] px-20 py-8 text-center">
          <p className="mb-6 text-sm font-semibold leading-[130%] opacity-30">
            <Balancer>
              Hiago Ramos © 2023 - Todos os direitos reservados.
            </Balancer>
          </p>
          <p className="text-base font-medium leading-[130%] opacity-60">
            Criado por{" "}
            <a
              href="https://www.instagram.com/gbrnogueira/"
              rel="nofollow"
              target="_blank"
              className="font-bold hover:underline"
            >
              Gabriel Ramos
            </a>
          </p>
        </footer>
      </main>
    </>
  );
}
