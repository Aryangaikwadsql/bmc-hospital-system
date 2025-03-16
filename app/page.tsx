import { LoginForm } from "@/components/login-form"
import Image from "next/image"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="flex flex-col items-center space-y-4 mb-6">
            <Image src="/bmc-logo.svg" alt="BMC Hospital Logo" width={120} height={120} className="mb-2" />
            <h1 className="text-3xl font-bold text-center">BMC Hospital</h1>
            <p className="text-muted-foreground text-center">Patient Management System</p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

