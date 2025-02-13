import Image from "next/image";
import { FaBook } from "react-icons/fa6";
import { IoAdd, IoPersonAddSharp } from "react-icons/io5";

export default function Home() {
  return (
    <main>
      <nav
        className="w-full h-72 bg-cover bg-no-repeat flex relative"
        style={{ backgroundImage: `url('/assets/images/biblioteca.png')` }}
      >
        <h1 className="absolute bottom-0 left-0 text-6xl text-zinc-100 p-4 font-serif">
          BIBLIOTECA ADJQ
        </h1>
        <h1 className="absolute bottom-0 right-0 text-2xl text-white p-4 font-serif">
          Seja Bem vindo, Fulano
        </h1>
      </nav>

      <section>
        <div className="flex flex-row w-full p-3 gap-2 items-center">
          <div className="w-2/3">
            <input
              type="text"
              placeholder="Digite o título para fazer a busca"
              className="p-2 border-2 rounded-md w-full"
            />
          </div>
          <div className="flex relative p-3 border-2 rounded-md bg-[#FEF9E1] hover:bg-[#E5D0AC]">
            <a href="" title="Adicionar Livro">
              <FaBook className="text-2xl" />
            </a>
            <IoAdd className="absolute bottom-5 left-[1px] text-sm" />
          </div>
          <div className="flex relative p-3 border-2 rounded-md bg-[#FEF9E1] hover:bg-[#E5D0AC]">
            <a href="" title="Adicionar Usuário">
              <IoPersonAddSharp className="text-2xl" />
            </a>
          </div>
        </div>
      </section>

      <section className="flex p-3">
        <div className="flex flex-col items-center w-[300px] border-4 rounded-lg ">
          <Image
            src={"/assets/images/books/7af88f4502.jpg"}
            alt="Café"
            width={"250"}
            height={"400"}
          />
          <p>Café com Deus Pai</p>
          <p>Júnior Rostirola</p>
        </div>
      </section>
      <footer></footer>
    </main>
  );
}
