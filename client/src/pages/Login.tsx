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
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from "@/features/api/authApi";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {

  const navigate = useNavigate()
  const [loginInput, setLoginInput] = useState({ email: "", password: "" });
  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [
    registerUser,
    {
      data: registerData,
      error: registerError,
      isLoading: registerIsLoading,
      isSuccess: registerIsSuccess,
    },
  ] = useRegisterUserMutation();
  const [
    loginUser,
    {
      data: loginData,
      error: loginError,
      isLoading: loginIsLoading,
      isSuccess: loginIsSuccess,
    },
  ] = useLoginUserMutation();
  const handleInputChange = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignupInput({ ...signupInput, [name]: value });
    } else {
      setLoginInput({ ...loginInput, [name]: value });
    }
  };

  const handleSubmit = async(type) => {
    const inputData = type === "signup" ? signupInput : loginInput;
    const action = type === "signup"?registerUser:loginUser;
    await action(inputData);

  };
  useEffect(()=>{

    if(registerIsSuccess && registerData){
      toast.success(registerData?.message || "signup succesfull...")
    }
    if(registerError){
      toast.error(registerData?.data.message || "Register failed")
    }
    if(loginError){
      toast.error(loginData?.data.message || "Login failed")
    }
    if(loginIsSuccess && loginData){
      navigate("/")
      toast.success(loginData?.message || "login succesfull...")
    }

  },[loginIsLoading , registerIsLoading , loginData , registerData , loginError , registerError])

  return (
    <div className="flex items-center justify-center mt-40">
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
                  onChange={(e) => {
                    handleInputChange(e, "signup");
                  }}
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
                  onChange={(e) => {
                    handleInputChange(e, "signup");
                  }}
                  placeholder="eg. adeedkhan0786@gmail.com"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="Password">Password</Label>
                <Input
                  type="text"
                  name="password"
                  value={signupInput.password}
                  onChange={(e) => {
                    handleInputChange(e, "signup");
                  }}
                  placeholder="eg. xyz"
                />
              </div>
              <Button
              disabled={registerIsLoading}
                onClick={() => {
                  handleSubmit("signup");
                }}
                className="my-1"
              >
                {
                  registerIsLoading?(<>
                <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                Please wait
                </>):"SignUp"
                }
              </Button>
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
                  name="email"
                  value={loginInput.email}
                  onChange={(e) => {
                    handleInputChange(e, "login");
                  }}
                  placeholder="eg. adeedkhan0786@gmail.com"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="Password">Password</Label>
                <Input
                  type="text"
                  name="password"
                  value={loginInput.password}
                  onChange={(e) => {
                    handleInputChange(e, "login");
                  }}
                  placeholder="eg. xyz"
                />
              </div>
              <Button
              disabled={loginIsLoading}
                onClick={() => {
                  handleSubmit("login");
                }}
                className="my-1"
              >
                {
                loginIsLoading?(<>
                <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                Please wait
                </>):"Login"}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;
