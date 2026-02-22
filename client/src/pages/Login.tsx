import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const Login = () => {
  const [loginInput, setLoginInput] = useState({ email: "", password: "" });
  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e , type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignupInput({ ...signupInput, [name]: value });
    } else {
      setLoginInput({ ...loginInput, [name]: value });
    }
  };

  const handleSubmit =(type)=>{
    const inputData = type === "signup"? signupInput : loginInput
    console.log(inputData)
  };

  return (
    <div className="flex items-center justify-center">
      <Tabs
        defaultValue="SignUp"
        className="w-[400px] flex item-center justify-center"
      >
        <TabsList className="w-full">
          <TabsTrigger value="SignUp">SignUp</TabsTrigger>
          <TabsTrigger value="Login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="SignUp">
          <Card>
            <CardHeader>
              <CardTitle>SignUp</CardTitle>
              <CardDescription>Create a new account</CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm space-y-3">
              <div className="space-y-1">
                <Label htmlFor="name">Name </Label>
                <Input
                  type="text"
                  name="name"
                  value={signupInput.name}
                  onChange={(e)=>{handleInputChange(e,"signup")}}
                  placeholder="eg. adeed khan"
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="text"
                  name="email"
                  value={signupInput.email}
                  onChange={(e)=>{handleInputChange(e,"signup")}}
                  placeholder="eg. adeedkhan0786@gmail.com"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="Password">Password</Label>
                <Input
                  type="text"
                  name="password"
                  value={signupInput.password}
                  onChange={(e)=>{handleInputChange(e,"signup")}}
                  placeholder="eg. xyz"
                />
              </div>
              <Button onClick={()=>{handleSubmit("signup")}} className="my-1">SignUp</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="Login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>Login to existing account</CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm space-y-3">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="text"
                  name="email" value={loginInput.email}
                  onChange={(e)=>{handleInputChange(e,"login")}}
                  placeholder="eg. adeedkhan0786@gmail.com"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="Password">Password</Label>
                <Input
                  type="text"
                  name="password" value={loginInput.password}
                  onChange={(e)=>{handleInputChange(e,"login")}}
                  placeholder="eg. xyz"
                />
              </div>
              <Button onClick={()=>{handleSubmit("login")}} className="my-1">Login</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;
