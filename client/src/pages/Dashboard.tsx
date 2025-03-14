import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, {user?.username}</p>
        </div>
        <Button variant="outline" onClick={handleLogout} disabled={logoutMutation.isPending}>
          {logoutMutation.isPending ? "Logging out..." : "Logout"}
        </Button>
      </div>

      {/* Dashboard tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="courses">My Courses</TabsTrigger>
          <TabsTrigger value="qa">Question Bank</TabsTrigger>
          <TabsTrigger value="study">Study Tools</TabsTrigger>
        </TabsList>

        {/* Overview tab */}
        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Courses Enrolled</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">
                  2 in progress, 1 completed
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Study Hours</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">28.5</div>
                <p className="text-xs text-muted-foreground">
                  +2.5 hours from last week
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Practice Questions</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">245</div>
                <p className="text-xs text-muted-foreground">
                  78% correct answers
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Next Study Session</CardTitle>
                <CalendarIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Today</div>
                <p className="text-xs text-muted-foreground">
                  Cardiology - 4:00 PM
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Current Progress</CardTitle>
                <CardDescription>Your learning path completion</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Anatomy</div>
                      <div className="text-sm text-muted-foreground">75%</div>
                    </div>
                    <Progress value={75} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Physiology</div>
                      <div className="text-sm text-muted-foreground">60%</div>
                    </div>
                    <Progress value={60} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Pathology</div>
                      <div className="text-sm text-muted-foreground">45%</div>
                    </div>
                    <Progress value={45} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Pharmacology</div>
                      <div className="text-sm text-muted-foreground">30%</div>
                    </div>
                    <Progress value={30} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recommended Resources</CardTitle>
                <CardDescription>Based on your study patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Video className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">Cardiology Basic Concepts</h4>
                      <p className="text-sm text-muted-foreground">15 video lectures - 3.5 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">Respiratory System MCQs</h4>
                      <p className="text-sm text-muted-foreground">120 practice questions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Headphones className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">Neurology Review Podcast</h4>
                      <p className="text-sm text-muted-foreground">6 episodes - 4.2 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">Study Group: Pharmacology</h4>
                      <p className="text-sm text-muted-foreground">Next session: Tomorrow, 5 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Placeholder content for other tabs */}
        <TabsContent value="courses">
          <div className="text-center p-12">
            <h3 className="text-xl font-medium mb-2">Your Course Content</h3>
            <p className="text-muted-foreground mb-4">
              This section will display your enrolled courses and track your progress.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {/* Sample course cards would go here */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Anatomy & Physiology</CardTitle>
                  <CardDescription>Comprehensive course on human systems</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>75%</span>
                    </div>
                    <Progress value={75} />
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Last accessed: Yesterday
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Clinical Pathology</CardTitle>
                  <CardDescription>Disease mechanisms and diagnostics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>45%</span>
                    </div>
                    <Progress value={45} />
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Last accessed: 3 days ago
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Pharmacology Basics</CardTitle>
                  <CardDescription>Drug actions and clinical applications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>30%</span>
                    </div>
                    <Progress value={30} />
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Last accessed: Today
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="qa">
          <div className="text-center p-12">
            <h3 className="text-xl font-medium mb-2">Question Bank</h3>
            <p className="text-muted-foreground mb-4">
              Practice with thousands of medical MCQs across all specialties.
            </p>
            <Button className="mt-4">Start Practice Session</Button>
          </div>
        </TabsContent>

        <TabsContent value="study">
          <div className="text-center p-12">
            <h3 className="text-xl font-medium mb-2">Study Tools</h3>
            <p className="text-muted-foreground mb-4">
              Access spaced repetition tools, flashcards, and more to optimize your learning.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Spaced Repetition</CardTitle>
                  <CardDescription>Optimize memory retention with scientifically proven methods</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">Start Session</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Flashcards</CardTitle>
                  <CardDescription>Create and review custom flashcards for quick study</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">View Decks</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}