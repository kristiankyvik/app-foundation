import { SupabaseAuthUI } from "../integrations/supabase/auth.jsx";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen h-full lg:min-h-screen lg:h-full xl:min-h-screen xl:h-full lg:grid lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12 h-full">
        <div className="mx-auto grid w-[350px] gap-4 h-full">
          <h3 className="text-center text-2xl font-semibold">Login</h3>
          <SupabaseAuthUI />
        </div>
      </div>
      <div className="hidden bg-muted lg:block h-full">
        <img
          src="/placeholder.svg"
          alt="img"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}