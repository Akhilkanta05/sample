"use client"

import { Book, Globe, GraduationCap, Languages, Mail, Phone, User } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background">
      {/* Animated background pattern */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] opacity-20" />

      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div className="animate-fade-in-down">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent pb-2">
              VENKATESH AKHIL KANTA
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-muted-foreground mt-4">Software Developer</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center pt-6">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition-all duration-300"
              asChild
            >
              <Link href="mailto:kantavenkateshakhil@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 hover:bg-primary/10 transition-all duration-300"
              asChild
            >
              <Link href="tel:+916302094147">
                <Phone className="mr-2 h-5 w-5" />
                +91 6302094147
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Objective Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="backdrop-blur-sm bg-background/95 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <User className="h-6 w-6 text-primary" />
                Objective
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dedicated and driven software developer seeking opportunities to leverage expertise in C Programming,
                Python, HTML, and CSS to contribute effectively to innovative projects. Eager to apply problem-solving
                skills and passion for learning to deliver robust, user-friendly software solutions that meet and exceed
                client expectations.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Education Journey
          </h2>
          <div className="grid gap-6">
            {[
              {
                title: "Bachelor of Technology",
                period: "2023-Present",
                institution: "Gandhi Institute of Technology and Management",
                location: "Bengaluru, Karnataka",
              },
              {
                title: "Intermediate",
                period: "2021-2023",
                institution: "Sri Chaitanya Junior College",
                location: "Tirupathi, Andhra Pradesh",
              },
              {
                title: "Class 10, SSC",
                period: "2020-2021",
                institution: "DAV Bharathi Vidya Mandir",
                location: "Kamalapuram, Andhra Pradesh",
              },
            ].map((edu, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    {edu.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary font-medium">{edu.period}</p>
                  <p className="font-semibold mt-1">{edu.institution}</p>
                  <p className="text-muted-foreground">{edu.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="backdrop-blur-sm bg-background/95 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-primary" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "C Programming",
                    "Python",
                    "HTML, CSS",
                    "Web Designing",
                    "Microsoft Office",
                    "Master Data Management",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-primary/10 transition-colors duration-300"
                    >
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6">
              <Card className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Languages className="h-5 w-5 text-primary" />
                    Languages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {["English", "Telugu"].map((language) => (
                      <div
                        key={language}
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-primary/10 transition-colors duration-300"
                      >
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span>{language}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Book className="h-5 w-5 text-primary" />
                    Hobbies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    {["Browsing web", "Learning new things", "Watching tech news"].map((hobby) => (
                      <div
                        key={hobby}
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-primary/10 transition-colors duration-300"
                      >
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span>{hobby}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <Card className="backdrop-blur-sm bg-background/95 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="grid gap-6">
                {[
                  {
                    icon: <Mail className="h-6 w-6" />,
                    label: "Email",
                    value: "kantavenkateshakhil@gmail.com",
                    href: "mailto:kantavenkateshakhil@gmail.com",
                  },
                  {
                    icon: <Phone className="h-6 w-6" />,
                    label: "Phone",
                    value: "+91 6302094147",
                    href: "tel:+916302094147",
                  },
                  {
                    icon: <Globe className="h-6 w-6" />,
                    label: "Location",
                    value: "Kadapa, Andhra Pradesh, India",
                  },
                ].map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-primary/10 transition-all duration-300"
                  >
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      {contact.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      {contact.href ? (
                        <Link href={contact.href} className="font-medium hover:text-primary transition-colors">
                          {contact.value}
                        </Link>
                      ) : (
                        <p className="font-medium">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t bg-background/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Venkatesh Akhil Kanta. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

