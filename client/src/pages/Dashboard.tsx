import { useAuth } from "@/hooks/use-auth";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  CalendarIcon, 
  BookOpen, 
  Users, 
  Video, 
  BarChart2, 
  Headphones, 
  Clock, 
  CheckCircle 
} from "lucide-react";

export default function Dashboard() {
  const { user, logoutMutation } = useAuth();
  const [progress] = useState(65);

  return (
    <div className="container mx-auto p-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-500 to-teal-400 rounded-2xl p-8 text-white mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.username}!</h1>
        <p className="mb-4 opacity-90">You're making great progress. Continue your medical journey.</p>
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <div className="flex justify-between mb-2">
              <span>Weekly Study Goal</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
          <Button variant="secondary">Continue Learning</Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 rounded-xl">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold">127</p>
              <p className="text-gray-500">Questions Answered</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-100 rounded-xl">
              <Clock className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold">14.5</p>
              <p className="text-gray-500">Study Hours</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-amber-100 rounded-xl">
              <CheckCircle className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <p className="text-2xl font-bold">85</p>
              <p className="text-gray-500">Flashcards Reviewed</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-red-100 rounded-xl">
              <BarChart2 className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <p className="text-2xl font-bold">93%</p>
              <p className="text-gray-500">Average Score</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Learning Progress */}
        <div className="lg:col-span-2">
          <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Continue Learning</h2>
              <Button variant="link" className="text-sm">View All</Button>
            </div>

            {/* Course Cards */}
            <div className="space-y-4">
              <CourseCard 
                title="Cardiovascular System"
                progress={68}
                videos={12}
                questions={45}
                duration="4h 30m"
              />
              <CourseCard 
                title="Neuroanatomy Fundamentals"
                progress={42}
                videos={16}
                questions={62}
                duration="6h 15m"
              />
              <CourseCard 
                title="Antibiotics & Antimicrobials"
                progress={23}
                videos={9}
                questions={38}
                duration="3h 45m"
              />
            </div>
          </Card>
        </div>

        {/* Upcoming Sessions */}
        <div>
          <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Upcoming Sessions</h2>
              <Button variant="link" className="text-sm">View All</Button>
            </div>

            {/* Session Cards */}
            <div className="space-y-4">
              <SessionCard 
                day="15"
                month="Apr"
                title="Cardiology Live Session"
                time="10:00 - 11:30 AM"
                instructor="Dr. Michael Chen"
              />
              <SessionCard 
                day="17"
                month="Apr"
                title="Neurology Study Group"
                time="2:00 - 3:30 PM"
                participants={8}
              />
              <SessionCard 
                day="20"
                month="Apr"
                title="Pharmacology Q&A"
                time="4:00 - 5:00 PM"
                instructor="Dr. Sarah Johnson"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

function CourseCard({ title, progress, videos, questions, duration }) {
  return (
    <div className="flex gap-4 p-4 border rounded-xl hover:border-blue-500 transition-colors">
      <div className="w-16 h-16 bg-gray-100 rounded-lg shrink-0" />
      <div className="flex-1">
        <h3 className="font-semibold mb-2">{title}</h3>
        <div className="flex gap-4 text-sm text-gray-500 mb-3">
          <span><Video className="inline h-4 w-4 mr-1" /> {videos} videos</span>
          <span><BookOpen className="inline h-4 w-4 mr-1" /> {questions} questions</span>
          <span><Clock className="inline h-4 w-4 mr-1" /> {duration}</span>
        </div>
        <Progress value={progress} className="h-1" />
      </div>
    </div>
  );
}

function SessionCard({ day, month, title, time, instructor, participants }) {
  return (
    <div className="flex gap-4 p-4 border rounded-xl hover:border-blue-500 transition-colors">
      <div className="w-12 h-12 bg-blue-500 text-white rounded-lg flex flex-col items-center justify-center">
        <span className="text-lg font-bold">{day}</span>
        <span className="text-xs">{month}</span>
      </div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <div className="text-sm text-gray-500">
          <p><Clock className="inline h-4 w-4 mr-1" /> {time}</p>
          {instructor && <p><Users className="inline h-4 w-4 mr-1" /> {instructor}</p>}
          {participants && <p><Users className="inline h-4 w-4 mr-1" /> {participants} participants</p>}
        </div>
      </div>
    </div>
  );
}