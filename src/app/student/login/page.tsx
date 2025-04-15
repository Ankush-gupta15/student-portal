"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { useRouter } from "next/navigation";

// Define the Student type
type Student = {
  id: string;
  name: string;
  rollNumber: string;
  branch: string;
  email: string;
  password: string; // Consider hashing this in a real application
  status: "pending" | "approved" | "rejected";
};

export default function StudentLoginPage() {
  const [name, setName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [branch, setBranch] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Create a new student object
    const newStudent: Student = {
      id: Math.random().toString(36).substring(2, 15), // Generate a random ID
      name,
      rollNumber,
      branch,
      email,
      password, // In real app, hash this before storing
      status: "pending",
    };

    // Store the new student in mockStudents (you would typically store this in a database)
    mockStudents.push(newStudent);

    // Redirect to the home page after registration
    router.push("/");
  };

  // Mock database to store students. In a real app, you would use a database
  const mockStudents: Student[] = [];

  return (
    <div className="flex justify-center items-center min-h-screen bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Student Registration/Login</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <label htmlFor="name">Name</label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="rollNumber">Roll Number</label>
              <Input
                id="rollNumber"
                type="text"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="branch">Branch</label>
              <Input
                id="branch"
                type="text"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email">Email ID</label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="password">Password</label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full mt-4">
              Register
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
