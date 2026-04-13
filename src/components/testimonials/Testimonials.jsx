import "./testimonials.scss";
import React from "react";

export default function Collaborators() {
  const advisors = [
    {
      id: 1,
      name: "Ugur Kursuncu",
      title: "PhD Advisor · Georgia State University",
      img: "https://ui-avatars.com/api/?name=Ugur+Kursuncu&background=ce99ff&color=fff&size=160",
      link: "https://www.ugurkursuncu.com/",
      desc: "Research collaboration in generative AI, knowledge graphs, and interdisciplinary AI systems.",
    },
    {
      id: 2,
      name: "Esra Akbas",
      title: "PhD Co-Advisor · Georgia State University",
      img: "https://ui-avatars.com/api/?name=Esra+Akbas&background=ce99ff&color=fff&size=160",
      link: "https://sites.google.com/view/esraakbas/",
      desc: "Collaboration on computer vision and multimodal AI research.",
    },
    {
      id: 3,
      name: "Animesh Mukherjee",
      title: "M.Tech Advisor · IIT Kharagpur",
      img: "https://ui-avatars.com/api/?name=Animesh+Mukherjee&background=ce99ff&color=fff&size=160",
      link: "https://cse.iitkgp.ac.in/~animeshm/",
      desc: "Worked on network science, online communities, and large-scale data analysis.",
    },
  ];

  const collaborators = [
    {
      id: 4,
      name: "Trilok Padhi",
      title: "Research Collaborator",
      img: "https://ui-avatars.com/api/?name=Trilok+Padhi&background=ce99ff&color=fff&size=160",
      link: "#",
      desc: "Collaborative research in AI systems and model evaluation.",
    },
    {
      id: 5,
      name: "Kadir Erol",
      title: "Research Collaborator",
      img: "https://ui-avatars.com/api/?name=Kadir+Erol&background=ce99ff&color=fff&size=160",
      link: "#",
      desc: "Worked on vision-language models and AI safety research.",
    },
  ];

  const renderCard = (d, featured = false) => (
    <a
      key={d.id}
      href={d.link}
      target="_blank"
      rel="noreferrer"
      className={featured ? "card featured" : "card"}
    >
      <div className="avatarWrap">
        <img
          className="user"
          src={d.img}
          alt={d.name}
          onError={(e) => {
            e.currentTarget.src =
              "https://ui-avatars.com/api/?name=User&background=e0e0e0&color=555&size=160";
          }}
        />
      </div>

      <div className="center">{d.desc}</div>

      <div className="bottom">
        <h3>{d.name}</h3>
        <h4>{d.title}</h4>
      </div>
    </a>
  );

  return (
    <div className="testimonials" id="collaborators">
      <h1>Collaborators</h1>

      <div className="group">
        <h2>Advisors</h2>
        <div className="container advisors">
          {advisors.map((item) => renderCard(item, true))}
        </div>
      </div>

      <div className="group">
        <h2>Research Collaborators</h2>
        <div className="container collaborators">
          {collaborators.map((item) => renderCard(item))}
        </div>
      </div>
    </div>
  );
}