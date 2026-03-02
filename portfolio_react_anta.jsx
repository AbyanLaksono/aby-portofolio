import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-20">
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center h-screen">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Anta
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg md:text-xl text-gray-400 max-w-xl"
        >
          Informatics Student | Network & System Enthusiast | Performance Optimization
        </motion.p>
        <div className="mt-8 flex gap-4">
          <Button className="rounded-2xl">View Projects</Button>
          <Button variant="outline" className="rounded-2xl">Download CV</Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <h2 className="text-3xl font-semibold mb-8">About Me</h2>
        <p className="text-gray-400 max-w-3xl leading-relaxed">
          Saya mahasiswa Informatika yang fokus pada jaringan komputer, sistem, dan optimasi performa.
          Berpengalaman dalam konfigurasi VLAN, subnetting, dan pengembangan berbasis performa termasuk
          optimasi FiveM serta pengelolaan server.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="py-20">
        <h2 className="text-3xl font-semibold mb-12">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["HTML", "CSS", "JavaScript", "React", "Python", "Cisco", "Blender", "Git"].map(
            (tech) => (
              <Card key={tech} className="rounded-2xl bg-zinc-900 border-zinc-800">
                <CardContent className="p-6 text-center text-gray-300">
                  {tech}
                </CardContent>
              </Card>
            )
          )}
        </div>
      </section>

      {/* Projects */}
      <section className="py-20">
        <h2 className="text-3xl font-semibold mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="rounded-2xl bg-zinc-900 border-zinc-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">VLAN & InterVLAN Simulation</h3>
              <p className="text-gray-400 text-sm">
                Simulasi jaringan menggunakan Cisco Packet Tracer untuk konfigurasi VLAN,
                routing, dan subnetting dalam skenario kampus.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl bg-zinc-900 border-zinc-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">FiveM FPS Optimization</h3>
              <p className="text-gray-400 text-sm">
                Optimasi konfigurasi dan resource game untuk meningkatkan stabilitas dan
                performa FPS pada server FiveM.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-semibold mb-8">Contact</h2>
        <div className="flex justify-center gap-6">
          <Github className="cursor-pointer" />
          <Linkedin className="cursor-pointer" />
          <Mail className="cursor-pointer" />
        </div>
        <p className="text-gray-500 mt-6 text-sm">© {new Date().getFullYear()} Anta. All rights reserved.</p>
      </section>
    </div>
  );
}
