import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import SignInWithGitHub from "../components/SignInWithGitHub";
import { Label } from "@/components/ui/label";

export default function AuthPage() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Please sign in</CardTitle>
          <CardDescription>
            To access the private page you have to authenticated
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col">
            <div className="flex flex-col gap-y-2">
              <Label>Email</Label>
              <Input
                name="email"
                type="email"
                placeholder="name@example.com"
              ></Input>
            </div>
            <Button className="mt-4">Login with email</Button>
            <SignInWithGitHub></SignInWithGitHub>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
