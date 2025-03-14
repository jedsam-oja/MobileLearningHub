import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import { useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

// UI Components
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

// Step 1: Personal Information
const personalInfoSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
});

// Step 2: Professional Information
const professionalInfoSchema = z.object({
  specialization: z.string().min(1, "Please select your specialization"),
  institute: z.string().min(2, "Please enter your medical institution"),
  graduationYear: z.string().regex(/^\d{4}$/, "Please enter a valid year (e.g., 2022)")
});

// Step 3: Additional Information
const additionalInfoSchema = z.object({
  bio: z.string().max(500, "Bio cannot exceed 500 characters").optional(),
});

type PersonalInfoInputs = z.infer<typeof personalInfoSchema>;
type ProfessionalInfoInputs = z.infer<typeof professionalInfoSchema>;
type AdditionalInfoInputs = z.infer<typeof additionalInfoSchema>;

export default function ProfileSetup() {
  const [step, setStep] = useState(1);
  const { user } = useAuth();
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  // Form states for each step
  const personalInfoForm = useForm<PersonalInfoInputs>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      fullName: user?.fullName || "",
      email: user?.email || "",
    },
  });

  const professionalInfoForm = useForm<ProfessionalInfoInputs>({
    resolver: zodResolver(professionalInfoSchema),
    defaultValues: {
      specialization: user?.specialization || "",
      institute: user?.institute || "",
      graduationYear: user?.graduationYear || "",
    },
  });

  const additionalInfoForm = useForm<AdditionalInfoInputs>({
    resolver: zodResolver(additionalInfoSchema),
    defaultValues: {
      bio: user?.bio || "",
    },
  });

  // Profile update mutation
  const updateProfileMutation = useMutation({
    mutationFn: async (profileData: any) => {
      const res = await apiRequest("POST", "/api/user/profile", profileData);
      return await res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/user"] });
      toast({
        title: "Profile updated",
        description: "Your profile has been successfully updated",
      });
      if (step === 3) {
        setLocation("/dashboard");
      } else {
        setStep(step + 1);
      }
    },
    onError: (error: Error) => {
      toast({
        title: "Update failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  // Handle form submissions
  const onPersonalInfoSubmit = (data: PersonalInfoInputs) => {
    updateProfileMutation.mutate(data);
  };

  const onProfessionalInfoSubmit = (data: ProfessionalInfoInputs) => {
    updateProfileMutation.mutate(data);
  };

  const onAdditionalInfoSubmit = (data: AdditionalInfoInputs) => {
    updateProfileMutation.mutate(data);
  };

  // Go back to previous step
  const goBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  // Skip to next step
  const skipStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setLocation("/dashboard");
    }
  };

  // Redirect if profile is already complete
  useEffect(() => {
    if (user?.isProfileComplete) {
      setLocation("/dashboard");
    }
  }, [user, setLocation]);
  
  if (user?.isProfileComplete) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-slate-900 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-primary">Complete Your Profile</CardTitle>
          <CardDescription className="text-center">
            Step {step} of 3: {step === 1 ? "Personal Information" : step === 2 ? "Professional Details" : "Additional Information"}
          </CardDescription>
          
          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-4">
            <div 
              className="bg-primary h-2.5 rounded-full transition-all duration-500" 
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </CardHeader>

        <CardContent>
          {step === 1 && (
            <Form {...personalInfoForm}>
              <form onSubmit={personalInfoForm.handleSubmit(onPersonalInfoSubmit)} className="space-y-6">
                <FormField
                  control={personalInfoForm.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Dr. John Smith" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={personalInfoForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="doctor@hospital.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex justify-between pt-4">
                  <Button variant="outline" onClick={skipStep}>Skip</Button>
                  <Button type="submit" disabled={updateProfileMutation.isPending}>
                    {updateProfileMutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      "Continue"
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          )}

          {step === 2 && (
            <Form {...professionalInfoForm}>
              <form onSubmit={professionalInfoForm.handleSubmit(onProfessionalInfoSubmit)} className="space-y-6">
                <FormField
                  control={professionalInfoForm.control}
                  name="specialization"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Specialization</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your specialization" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="general-medicine">General Medicine</SelectItem>
                          <SelectItem value="cardiology">Cardiology</SelectItem>
                          <SelectItem value="neurology">Neurology</SelectItem>
                          <SelectItem value="pediatrics">Pediatrics</SelectItem>
                          <SelectItem value="surgery">Surgery</SelectItem>
                          <SelectItem value="orthopedics">Orthopedics</SelectItem>
                          <SelectItem value="gynecology">Gynecology</SelectItem>
                          <SelectItem value="psychiatry">Psychiatry</SelectItem>
                          <SelectItem value="dermatology">Dermatology</SelectItem>
                          <SelectItem value="ophthalmology">Ophthalmology</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={professionalInfoForm.control}
                  name="institute"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Medical Institution</FormLabel>
                      <FormControl>
                        <Input placeholder="University Medical Center" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={professionalInfoForm.control}
                  name="graduationYear"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Graduation Year</FormLabel>
                      <FormControl>
                        <Input placeholder="YYYY" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex justify-between pt-4">
                  <Button variant="outline" onClick={goBack}>Back</Button>
                  <Button variant="outline" onClick={skipStep} className="mx-2">Skip</Button>
                  <Button type="submit" disabled={updateProfileMutation.isPending}>
                    {updateProfileMutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      "Continue"
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          )}

          {step === 3 && (
            <Form {...additionalInfoForm}>
              <form onSubmit={additionalInfoForm.handleSubmit(onAdditionalInfoSubmit)} className="space-y-6">
                <FormField
                  control={additionalInfoForm.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bio</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about yourself, your interests, and your medical journey..."
                          className="min-h-[150px] resize-none"
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        This will be displayed on your public profile.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex justify-between pt-4">
                  <Button variant="outline" onClick={goBack}>Back</Button>
                  <Button type="submit" disabled={updateProfileMutation.isPending}>
                    {updateProfileMutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      "Complete Profile"
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}