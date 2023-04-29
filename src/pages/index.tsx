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
      </main>
    </>
  );
}
