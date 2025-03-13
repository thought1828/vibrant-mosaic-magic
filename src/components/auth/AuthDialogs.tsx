
import React, { useState } from 'react';
import { User, Mail, Lock, Eye, EyeOff, UserPlus, LogIn } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type AuthTabType = 'login' | 'signup';

export function LoginButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <LogIn className="h-4 w-4" /> Log In
        </Button>
      </DialogTrigger>
      <AuthDialogContent defaultTab="login" />
    </Dialog>
  );
}

export function SignupButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2 bg-mosaic-purple hover:bg-mosaic-purple/90">
          <UserPlus className="h-4 w-4" /> Sign Up
        </Button>
      </DialogTrigger>
      <AuthDialogContent defaultTab="signup" />
    </Dialog>
  );
}

function AuthDialogContent({ defaultTab = 'login' }: { defaultTab: AuthTabType }) {
  const [activeTab, setActiveTab] = useState<AuthTabType>(defaultTab);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle className="text-center text-2xl font-bold gradient-text">
          {activeTab === 'login' ? 'Welcome Back' : 'Create Account'}
        </DialogTitle>
      </DialogHeader>
      
      <div className="flex border-b mb-4">
        <button
          onClick={() => setActiveTab('login')}
          className={cn(
            "flex-1 py-2 text-center font-medium transition-colors",
            activeTab === 'login' 
              ? "border-b-2 border-mosaic-purple text-mosaic-purple" 
              : "text-gray-500 hover:text-mosaic-purple/70"
          )}
        >
          Log In
        </button>
        <button
          onClick={() => setActiveTab('signup')}
          className={cn(
            "flex-1 py-2 text-center font-medium transition-colors",
            activeTab === 'signup' 
              ? "border-b-2 border-mosaic-purple text-mosaic-purple" 
              : "text-gray-500 hover:text-mosaic-purple/70"
          )}
        >
          Sign Up
        </button>
      </div>

      {activeTab === 'login' ? (
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input 
                id="email" 
                placeholder="your@email.com" 
                className="pl-10"
                type="email"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input 
                id="password" 
                type={showPassword ? "text" : "password"} 
                className="pl-10 pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showPassword ? 
                  <EyeOff className="h-4 w-4 text-gray-500" /> : 
                  <Eye className="h-4 w-4 text-gray-500" />
                }
              </button>
            </div>
            <div className="text-right">
              <button className="text-xs text-mosaic-purple hover:underline">
                Forgot password?
              </button>
            </div>
          </div>
          <Button type="submit" className="w-full bg-gradient-to-r from-mosaic-purple to-mosaic-pink hover:opacity-90">
            Login to Your Account
          </Button>
        </form>
      ) : (
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input 
                id="name" 
                placeholder="John Doe" 
                className="pl-10"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="signup-email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input 
                id="signup-email" 
                placeholder="your@email.com" 
                className="pl-10"
                type="email"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="signup-password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input 
                id="signup-password" 
                type={showPassword ? "text" : "password"} 
                className="pl-10 pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showPassword ? 
                  <EyeOff className="h-4 w-4 text-gray-500" /> : 
                  <Eye className="h-4 w-4 text-gray-500" />
                }
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="terms"
              className="rounded border-gray-300 text-mosaic-purple focus:ring-mosaic-purple"
              required
            />
            <label htmlFor="terms" className="text-xs text-gray-600">
              I agree to the{" "}
              <a href="#" className="text-mosaic-purple hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-mosaic-purple hover:underline">
                Privacy Policy
              </a>
            </label>
          </div>
          <Button type="submit" className="w-full bg-gradient-to-r from-mosaic-purple to-mosaic-coral hover:opacity-90">
            Create Your Account
          </Button>
        </form>
      )}
      
      <div className="relative mt-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-gray-500">Or continue with</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" type="button" className="flex items-center justify-center gap-2">
          <svg className="h-4 w-4" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
            <path d="M1 1h22v22H1z" fill="none" />
          </svg>
          Google
        </Button>
        <Button variant="outline" type="button" className="flex items-center justify-center gap-2">
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
          </svg>
          Facebook
        </Button>
      </div>
      
      <div className="mt-4 text-center text-sm text-gray-500">
        {activeTab === 'login' ? (
          <p>
            Don't have an account?{' '}
            <button
              className="font-medium text-mosaic-purple hover:underline"
              onClick={() => setActiveTab('signup')}
            >
              Sign up
            </button>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <button
              className="font-medium text-mosaic-purple hover:underline"
              onClick={() => setActiveTab('login')}
            >
              Log in
            </button>
          </p>
        )}
      </div>
    </DialogContent>
  );
}
