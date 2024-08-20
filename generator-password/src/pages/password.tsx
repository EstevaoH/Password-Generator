import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, formSchemaInputs } from "@/types/schema";
import { useState } from "react";
import { Eye, EyeOff, Clipboard } from "lucide-react";
import axios from "axios"; 
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

export function Password() {
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [copyButtonText, setCopyButtonText] = useState("Copy Password");
  
  const { toast } = useToast();

  const methods = useForm<formSchemaInputs>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: formSchemaInputs) => {
    const password = await fetchPassword(data);
    setGeneratedPassword(password);
  };

  const fetchPassword = async (formData: formSchemaInputs) => {
    try {
      const response = await axios.post("http://localhost:5000/generate-password", {
        length: formData.passwordLength, 
        special_characters: formData.specialCharacters 
      });
      return response.data.password;
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate password. Please try again."
      });
      return "";
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPassword);
    setCopyButtonText("Password copied to clipboard!");
    setTimeout(() => setCopyButtonText("Copy Password"), 2000);
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Password Generator</CardTitle>
        <CardDescription>Create a secure password with customizable settings.</CardDescription>
      </CardHeader>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Label htmlFor="specialCharacters">Include Special Characters</Label>
              <Controller
                control={methods.control}
                name="specialCharacters"
                defaultValue={false}
                render={({ field }) => (
                  <Checkbox 
                    id="specialCharacters" 
                    checked={field.value} 
                    onCheckedChange={(checked) => field.onChange(checked)}
                  />
                )}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="length">Minimum Length</Label>
              <Input {...methods.register("passwordLength", { valueAsNumber: true })} className="w-1/2" id="length" type="number" />
              <small>{methods.formState.errors.passwordLength?.message}</small>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="generated-password">Generated Password</Label>
              <div className="relative">
                <Input
                  id="generated-password"
                  type={showPassword ? "text" : "password"}
                  value={generatedPassword}
                  readOnly
                />
                <button
                  type="button"
                  onClick={toggleShowPassword}
                  className="absolute right-2 top-2"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <Button type="button" onClick={copyToClipboard} className="mt-2 flex items-center gap-2">
                <Clipboard size={16} />
                {copyButtonText}
              </Button>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" type="submit">Generate Password</Button>
          </CardFooter>
        </form>
      </FormProvider>
      <Toaster />
    </Card>
  );
}
