export default function LoginForm() {
  return (
    <main className="text-2xl flex flex-col items-center gap-6">
      <form className="flex flex-col gap-6">
        <div>
          <p>Login</p>
          <input type="text" placeholder="Usuario" />
        </div>
        <div>
          <p>Senha</p>
          <input type="text" placeholder="Senha" />
        </div>
      </form>
      <button className="py-3 px-6 border-2 rounded-md bg-blue-500">
        Entrar
      </button>
    </main>
  );
}
