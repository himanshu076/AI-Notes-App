"use client"

import { CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { Loader2 } from "lucide-react";
import Link from "next/link";

type AuthFormProps = {
    type: "login" | "signup";
}

function AuthForm({ type }: AuthFormProps) {
    const isLoginForm = type === "login";
    const router = useRouter();

    const [isPending, startTransition] = useTransition();

    const handleSubmit = async (formData: FormData) => {
        console.log("form submitted")
    }
  return (
    <form action={handleSubmit}>
        <CardContent className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input type="email" name="email" id="email" placeholder="Enter your email" required disabled={isPending} />
            </div>
            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input type="password" name="password" id="password" placeholder="Enter your password" required disabled={isPending} />
            </div>
        </CardContent>
        <CardFooter className="mt-4 flex flex-col gap-6">
            <Button className="w-full">
                {isPending ? <Loader2 className="animate-spin" /> : isLoginForm ? "Login": "Sign Up"}
            </Button>
            <p className="text-xs">
                {isLoginForm ? "Don't have an account yet?" : "Already have an account?"} {" "}
                <Link href={isLoginForm ? "/sign-up" : "/login"} className={`text-blue-500 underline ${isPending ? "pointer-events-none opacity-50" : ""}`}>
                    {isLoginForm ? "Sign Up" : "Login"}
                </Link>
            </p>
        </CardFooter>
    </form>
  )
}

export default AuthForm
