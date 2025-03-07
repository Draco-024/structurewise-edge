
import { MainNav } from "@/components/MainNav";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log("Reset password for:", email);
    toast({
      title: "Reset link sent",
      description: "Please check your email to reset your password",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <MainNav />
      <div className="container px-4 py-16 flex justify-center items-center">
        <Card className="w-full max-w-md p-8">
          <h1 className="text-2xl font-bold text-center mb-8">Reset Password</h1>
          <p className="text-center text-muted-foreground mb-8">
            Enter your email address and we'll send you a link to reset your
            password.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-xl"
              />
            </div>
            <Button type="submit" className="w-full rounded-xl">
              Send Reset Link
            </Button>
          </form>
          <div className="mt-6 text-center text-sm">
            Remember your password?{" "}
            <Link to="/signin" className="text-primary hover:underline">
              Sign in
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ForgotPassword;
