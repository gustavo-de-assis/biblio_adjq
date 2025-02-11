export default function LoginForm() {
  return (
    <main className="text-2xl flex flex-col items-center gap-6 font-sans">
      <form className="flex flex-col gap-6">
        <div className="text-xl">
          <p>Login</p>
          <input
            type="text"
            placeholder="Entre com o nome de usuário"
            className="p-2 border-2 rounded-md"
          />
        </div>
        <div className="text-xl">
          <p>Senha</p>
          <input
            type="password"
            placeholder="Senha"
            className="p-2 border-2 rounded-md"
          />
        </div>
      </form>
      <button className="py-3 px-6 border-2 rounded-md bg-blue-500">
        Entrar
      </button>
    </main>
  );
}
