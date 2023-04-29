import Image from "next/image";
import Head from "next/head";
import Balancer from "react-wrap-balancer";
import { MonteCarlo, Montserrat } from "next/font/google";

import { Button } from "@/components/Button";

const montserrat = Montserrat({ subsets: ["latin"] });
const monteCarlo = MonteCarlo({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hiago Ramos · Nutricionista</title>
      </Head>

      <main className={montserrat.className}>
        <section className="flex flex-col items-center pt-12 text-white bg-black gap-14 px-9">
          <div className="flex flex-col text-center">
            <h1 className={`${monteCarlo.className} mb-12 text-2xl`}>
              Hiago Ramos
            </h1>
            <h2 className="mb-6 text-[32px] font-normal leading-[41.6px]">
              <Balancer>
                A <strong className="font-bold">chave para a sua saúde</strong>{" "}
                está em <strong className="font-bold">sua alimentação</strong>.
              </Balancer>
            </h2>
            <p className="mb-8 leading-[22.4px]">
              <Balancer>
                Mude sua vida através da <strong>alimentação saudável</strong>{" "}
                com a ajuda de um <strong>nutricionista especializado</strong>!
              </Balancer>
            </p>
            <div className="mx-auto">
              <Button asChild>
                <a href="#">Agende uma consulta</a>
              </Button>
            </div>
          </div>

          <Image
            alt="Foto do Hiago Rams"
            src="/hiagoramos-hero.svg"
            width={238}
            height={364}
            priority
          />
        </section>

        <section className="px-4 py-20">
          <div className="flex flex-col items-center text-center">
            <h2 className="font-bold uppercase leading-[130%] tracking-widest mb-1">
              Sobre mim
            </h2>
            <strong className="text-2xl leading-[130%] mb-6 block">Hiago Ramos</strong>

            <Image
              alt="Foto do Hiago Ramos"
              src="hiagoramos-about.svg"
              width={358}
              height={358}
              className="mb-8"
            />

            <p className="text-sm leading-[22.4px] opacity-80 mb-6">
              <Balancer>
                Hiago Ramos é um nutricionista altamente qualificado e
                apaixonado por promover hábitos alimentares saudáveis e
                equilibrados em seus pacientes. Com anos de experiência na área,
                Hiago acredita que a nutrição é fundamental para uma vida
                saudável e busca constantemente se manter atualizado sobre as
                últimas tendências e pesquisas em nutrição e saúde.
              </Balancer>
            </p>

            <p className="text-sm leading-[22.4px] opacity-80">
              <Balancer>
                Seu objetivo é ajudar seus pacientes a atingirem seus objetivos
                de saúde e bem-estar, fornecendo um atendimento personalizado e
                adaptando as recomendações nutricionais às necessidades
                individuais de cada pessoa. Hiago é um defensor da alimentação
                natural e acredita que a dieta deve ser baseada em alimentos
                integrais e frescos.
              </Balancer>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
