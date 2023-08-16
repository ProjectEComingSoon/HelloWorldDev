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


import React, { useState } from 'react';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        console.log('email: ', email);
        console.log('password: ', password);
    };

    return (
        <div className=''>
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
    );


}

export default LoginPage;
