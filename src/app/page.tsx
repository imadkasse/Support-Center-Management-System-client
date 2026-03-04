import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">School Management Platform</h1>
          <nav className="flex items-center gap-4">
            <Link href="/courses">
              <Button variant="ghost">Browse Courses</Button>
            </Link>
            <Link href="/login">
              <Button>Login</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="container mx-auto px-4 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Welcome to Our School Management Platform</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Browse courses, enroll online, and manage your learning journey all in one place.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/courses">
                <Button size="lg">Browse Courses</Button>
              </Link>
              <Link href="/login">
                <Button size="lg" variant="outline">Sign In</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Browse Courses</CardTitle>
                <CardDescription>
                  Explore our wide range of courses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Find the perfect course for you with detailed information about schedule, pricing, and availability.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Easy Enrollment</CardTitle>
                <CardDescription>
                  Simple online enrollment process
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Enroll in courses with just a few clicks and manage your subscriptions from your dashboard.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Track Progress</CardTitle>
                <CardDescription>
                  Monitor your learning journey
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  View your enrolled courses, attendance, and subscription status all in one place.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          © 2026 School Management Platform. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
