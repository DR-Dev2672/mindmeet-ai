"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Alert, AlertTitle } from "@/components/ui/alert"
import { useState } from "react"
import { OctagonAlertIcon } from "lucide-react"
import { authClient } from "@/lib/auth-client"
import { useRouter } from "next/navigation"

const formSchema=z.object({
  email:z.string().email({message:"Please enter a valid email address"}),
  password:z.string().min(6,{message:"Password must be at least 6 characters long"})
})

export const SignInViews = () => {
  const router=useRouter();
  const [error,setError]=useState<string|null>(null)
   const form= useForm<z.infer<typeof formSchema>>({
     resolver:zodResolver(formSchema),
     defaultValues:{
      email:"",
      password:""
     }
  })
  const onSubmit=async(data:z.infer<typeof formSchema>)=>{
    setError(null);
    await authClient.signIn.email(
      {
      email:data.email,
      password:data.password,
      callbackURL:"/",
    },
    {
      onSuccess:()=>{
        router.push("/")
        console.log("Sign in successful")
      },
    
      onError:({error})=>{
        setError(error.message)
      }
    }
  )

  }



 
    return (
    <Card className="w-full max-w-sm mx-auto">
      <CardContent>
       <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold">Welcome Back</h1>
            <p className="text-muted-foreground text-balance ">Login to your account</p>

          </div>
          <div>
          <FormField
          control={form.control}
          name="email"
          render={({field})=>(
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="name@gmail.com" {...field}/>
              </FormControl>
              <FormMessage/>
            </FormItem>
            
             )}
          />
          </div>

          <div className="">
          <FormField
          control={form.control}
          name="password"
          render={({field})=>(
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="******" {...field}/>
              </FormControl>
              <FormMessage/>
            </FormItem>
             )}
          />
          </div>
          {!!error &&
          (
            <Alert>
              <OctagonAlertIcon/>
              <AlertTitle>{error}</AlertTitle>
            </Alert>
          )}
          <Button className="w-full" type="submit">
            Sign In
          </Button>
          </div>
          </form> 
        <div className="bg-radial from-sidebar-accent to-sidebar relative hidden md:flex flex-col items-center justify-center gap-y-4">
            <Image
              src="/logo.svg"
              alt="Meet.AI logo"
              width={92}
              height={92}
              style={{
                width: "auto",
                height: "auto",
                maxWidth: "92px",
                maxHeight: "92px",
              }}
            />
            <p className="text-2xl font-semibold text-white">Meet.AI</p>
          </div>
          <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
            By clicking continue, you agree to our 
            <a href="#">Terms of Service</a> and{" "} <a href="#">Privacy Policy</a>
            </div>
            </Form>
      </CardContent>
    </Card>


    );
}

