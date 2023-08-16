'use client';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Moon } from 'lucide-react';
import { useTheme } from "next-themes"

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const { theme, setTheme } = useTheme()

    const changeTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    const handleSignIn = () => {
        console.log('email: ', email);
        console.log('password: ', password);
        router.push('/dashboard');
    };

    return (
        <>
            <div className=''>
                <Moon className='m-2 hover:cursor-pointer' onClick={changeTheme}/>
                <div className='flex justify-center items-center h-screen'>
                    <div className='w-[400px] h-[400px] m-4'>
                        <Card className='p-4'>
                            <CardHeader>
                                <CardTitle className='text-center'>Sign In</CardTitle>
                                <CardDescription className='text-center'>Enter Your details and sign in to your account</CardDescription>
                            </CardHeader>
                            <Input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <br />
                            <Input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <br />
                            <div className='flex justify-center'>
                                <Button onClick={handleSignIn} className='item-center'>Sign In</Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );


}

export default LoginPage;
