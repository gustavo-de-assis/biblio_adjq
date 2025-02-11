import LoginForm from "@/components/loginForm";

export default function Login() {
  return (
    <main className="flex flex-row w-full h-full">
      <section className="h-screen w-2/3">
        <div
          className="fixed top-0 left-0 w-full h-full bg-cover bg-no-repeat -z-10"
          style={{ backgroundImage: `url('/assets/images/biblioteca.png')` }}
        ></div>
      </section>
      <section className="flex flex-col justify-center items-center bg-blue-400 h-screen w-1/3 gap-6">
        <div className="text-4xl">Bem vindo à biblioteca ADJQ</div>
        <LoginForm />
      </section>
    </main>
  );
}
