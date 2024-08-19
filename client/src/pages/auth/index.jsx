import Background from "@/assets/login2.png";
import Victory from "@/assets/victory.svg";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react";

const Auth = () => {

    const [email, setemail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")

    const handleLogin = async() => {

    }

    const handleSignup = async() => {

    }
  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center">

      <div className="h-[80vh] bg-white border-2 border-white text-opacity-90 shadow-2xl
       w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2">

        <div className="flex flex-col gap-10 items-center justify-center">

          <div className="flex items-center justify-center flex-col">

            <div className="flex items-center justify-center">

              <h1 className="text-5xl font-bold lg:text-6xl">Welcome</h1>
              
              <img src={Victory} alt="Victory Emoji" className="h-[100px]" />
            </div>
            <p className="font-medium text-center">Fill the details to get start chatting with your loved ones!!!!</p>
          </div>
          <div className="flex items-center justify-center w-full">

            <Tabs className="w-3/4">

              <TabsList className="bg-transparent rounded-none w-full">

                <TabsTrigger value="login" className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300">Login</TabsTrigger>

                <TabsTrigger value="signup" className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300">SignUp</TabsTrigger>
              </TabsList>


              <TabsContent className="flex flex-col gap-5 mt-10" value="login">

              <input placeholder="Email"
                type="email"
                className="rounded-full p-6"
                value={email}
                onChange={(e) => setemail(e.target.value)} 
              />

              <input placeholder="Password"
                type="password"
                className="rounded-full p-6"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
              />

              <Button 
                className="rounded-full p-6" 
                onClick={handleLogin}>
                Login
              </Button>

              </TabsContent>

              <TabsContent className="flex flex-col gap-3 " value="signup">
              <input placeholder="Email"
                type="email"
                className="rounded-full p-6"
                value={email}
                onChange={(e) => setemail(e.target.value)} 
              />

              <input placeholder="Password"
                type="password"
                className="rounded-full p-6"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
              />

              <input placeholder="Confirm Password"
                type="password"
                className="rounded-full p-6"
                value={confirmPassword}
                onChange={(e) => setconfirmPassword(e.target.value)} 
              />
              <Button 
                className="rounded-full p-6" 
                onClick={handleSignup}>
                SignUp
              </Button>
              
              </TabsContent>

            </Tabs>
          </div>
        </div>
        <div className="hidden xl:flex justify-center items-center">
          <img src={Background} alt="background login image" className="h-[700px]" />
        </div>
       </div>
    </div>
  );
};

export default Auth;