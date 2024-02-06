"use client"

import { useState, useTransition } from "react"
import { ProjectCard } from "./ProjectCard"
import { ProjectTag } from "./ProjectTag"

const projectsData = [
  {
    id: 1,
    title: "NLW - Shorts Summary",
    description: "Make shorts summary with IA",
    gitUrl: "https://github.com/RuanCxrdoso/NLW-IA",
    previewUrl: "",
    image: "/assets/projects/nlwIA.png",
    tag: ["All", "Vanilla Js"],
  },
  {
    id: 2,
    title: "Ignite Timer",
    description: "Pomodoro Timer with timers register",
    gitUrl: "https://github.com/RuanCxrdoso/Ignite-Timer",
    previewUrl: "",
    image: "/assets/projects/igniteTimer.png",
    tag: ["All", "React"],
  },
  {
    id: 3,
    title: "Ignite Feed",
    description: "Notice Feed with comments",
    gitUrl: "https://github.com/RuanCxrdoso/Ignite-Feed",
    previewUrl: "",
    image: "/assets/projects/igniteFeed.png",
    tag: ["All", "React"],
  },
  {
    id: 4,
    title: "iMovi",
    description: "Bootstrap Landing Page",
    gitUrl: "https://github.com/RuanCxrdoso/Landing-Page",
    previewUrl: "",
    image: "/assets/projects/iMovi.jpg",
    tag: ["All", "Vanilla Js"],
  },
  {
    id: 5,
    title: "Calculator",
    description: "Calculator with 4 operations",
    gitUrl: "https://github.com/RuanCxrdoso/Calc-Js",
    previewUrl: "",
    image: "/assets/projects/calcJs.png",
    tag: ["All", "Vanilla Js"],
  },
  {
    id: 6,
    title: "Spotify Interface",
    description: "Spotify Clone with Tailwind",
    gitUrl: "https://github.com/RuanCxrdoso/Spotify-Clone",
    previewUrl: "",
    image: "/assets/projects/spotifyClone.png",
    tag: ["All", "Vanilla Js"],
  },
  // {
  //   id: 7,
  //   title: "",
  //   description: "",
  //   gitUrl: "https://github.com/RuanCxrdoso/",
  //   previewUrl: "",
  //   image: "/assets/projects/",
  //   tag: [],
  // },
  // {
  //   id: 8,
  //   title: "",
  //   description: "",
  //   gitUrl: "https://github.com/RuanCxrdoso/",
  //   previewUrl: "",
  //   image: "/assets/projects/",
  //   tag: [],
  // },
]

export function ProjectsSection() {
  const [activeTag, setActiveTag] = useState("All")
  const [isPending, startTransition] = useTransition()

  function handleTagClick(id) {
    startTransition(() => {
      setActiveTag(id)
    })
  }

  const filteredProjects = projectsData.filter((project) => project.tag.includes(activeTag))

  return (
    <div id="projects">
      <h2 className="py-2 text-center text-4xl sm:text-6xl font-bold mt-8">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2A900] via-[#F28900] to-[#F25900]">My projects</span>
      </h2>

      <div className="text-white md:text-xl font-semibold flex justify-center items-center gap-16 w-auto my-12">
        <ProjectTag selectFilter={() => handleTagClick("All")}  tag="All" active={activeTag === "All"} />
        <ProjectTag selectFilter={() => handleTagClick("React")}  tag="React" active={activeTag === "React"} />
        <ProjectTag selectFilter={() => handleTagClick("Vanilla Js")}  tag="Vanilla Js" active={activeTag === "Vanilla Js"} />
      </div>

      <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-8 md:gap-12">
        {
          filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              title={project.title} 
              imgUrl={project.image} 
              description={project.description} 
              gitUrl={project.gitUrl} 
              previewUrl={project.previewUrl}
            />
          ))
        }
      </div>
    </div>
  )
}
