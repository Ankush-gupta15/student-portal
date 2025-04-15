"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";

// Define the Student type
type Student = {
  id: string;
  name: string;
  rollNumber: string;
  branch: string;
  email: string;
  status: "pending" | "approved" | "rejected";
};

// Mock data for student details
const mockStudents: Student[] = [
  {
    id: "1",
    name: "John Doe",
    rollNumber: "2023001",
    branch: "Computer Science",
    email: "john.doe@example.com",
    status: "pending",
  },
  {
    id: "2",
    name: "Jane Smith",
    rollNumber: "2023002",
    branch: "Electrical Engineering",
    email: "jane.smith@example.com",
    status: "approved",
  },
  {
    id: "3",
    name: "Alice Johnson",
    rollNumber: "2023003",
    branch: "Mechanical Engineering",
    email: "alice.johnson@example.com",
    status: "rejected",
  },
  {
    id: "4",
    name: "Bob Williams",
    rollNumber: "2023004",
    branch: "Civil Engineering",
    email: "bob.williams@example.com",
    status: "pending",
  },
];

// Define the StudentListProps type
type StudentListProps = {
  students: Student[];
  onApprove?: (id: string) => void;
  onReject?: (id: string) => void;
};

export default function AdminPanelPage() {
  const [students, setStudents] = useState<Student[]>(mockStudents);

  // Separate lists based on status
  const pendingList = students.filter((student) => student.status === "pending");
  const approvedList = students.filter((student) => student.status === "approved");
  const rejectedList = students.filter((student) => student.status === "rejected");

  useEffect(() => {
    // TODO: Fetch student data from database and setStudents
  }, []);

  const handleApprove = (id: string) => {
    // TODO: Implement approval logic and send confirmation email
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, status: "approved" } : student
      )
    );
  };

  const handleReject = (id: string) => {
    // TODO: Implement rejection logic
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, status: "rejected" } : student
      )
    );
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-5">Admin Panel</h1>

      <Tabs defaultValue="approval" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="approval">Approval List ({pendingList.length})</TabsTrigger>
          <TabsTrigger value="approved">Approved List ({approvedList.length})</TabsTrigger>
          <TabsTrigger value="rejected">Rejected List ({rejectedList.length})</TabsTrigger>
          <TabsTrigger value="total">Total List ({students.length})</TabsTrigger>
        </TabsList>
        <TabsContent value="approval" className="mt-5">
          <StudentList
            students={pendingList}
            onApprove={handleApprove}
            onReject={handleReject}
          />
        </TabsContent>
        <TabsContent value="approved" className="mt-5">
          <StudentList students={approvedList} />
        </TabsContent>
        <TabsContent value="rejected" className="mt-5">
          <StudentList students={rejectedList} />
        </TabsContent>
        <TabsContent value="total" className="mt-5">
          <StudentList
            students={students}
            onApprove={handleApprove}
            onReject={handleReject}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

// StudentList Component
function StudentList({ students, onApprove, onReject }: StudentListProps) {
  return (
    <ul>
      {students.map((student) => (
        <li key={student.id} className="border p-4 rounded-md mb-2">
          <div className="font-semibold">{student.name}</div>
          <div>Roll Number: {student.rollNumber}</div>
          <div>Branch: {student.branch}</div>
          <div>Email: {student.email}</div>
          <div>Status: {student.status}</div>
          {onApprove && onReject && (
            <div className="flex justify-end mt-4 space-x-2">
              <button
                className="px-4 py-2 bg-accent text-primary-foreground rounded-md hover:bg-accent/80"
                onClick={() => onApprove(student.id)}
              >
                Approve
              </button>
              <button
                className="px-4 py-2 bg-destructive text-primary-foreground rounded-md hover:bg-destructive/80"
                onClick={() => onReject(student.id)}
              >
                Reject
              </button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
