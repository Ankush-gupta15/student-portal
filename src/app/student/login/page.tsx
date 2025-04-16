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
      id: Date.now().toString(), // Generate a unique ID using timestamp
      name,
      rollNumber,
      branch,
      email,
      password, // In real app, hash this before storing
      status: "pending",
    };

    // Get existing students from local storage or initialize an empty array
    const storedStudents = localStorage.getItem("students");
    let students: Student[] = [];
    if (storedStudents) {
      try {
        students = JSON.parse(storedStudents);
      } catch (error) {
        console.error("Error parsing students from local storage:", error);
        students = []; // Initialize to an empty array if parsing fails
      }
    }

    // Add the new student to the array
    students.push(newStudent);

    // Store the updated students array in local storage
    localStorage.setItem("students", JSON.stringify(students));

    // Redirect to the home page after registration
    router.push("/");
  };

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
