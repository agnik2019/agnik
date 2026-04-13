import "./portfolio.scss";
import React, { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import {
  featuredPortfolio,
  llmPortfolio,
  healthAiPortfolio,
  graphPortfolio,
  publicationsPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    { id: "featured", title: "Featured" },
    { id: "llm", title: "LLMs & GenAI" },
    { id: "health", title: "Health AI" },
    { id: "graph", title: "Graph & Network Science" },
    { id: "publications", title: "Publications" },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "llm":
        setData(llmPortfolio);
        break;
      case "health":
        setData(healthAiPortfolio);
        break;
      case "graph":
        setData(graphPortfolio);
        break;
      case "publications":
        setData(publicationsPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="research">
      <h1>Research</h1>

      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>

      <div className="container">
        {data.map((d) => (
          <a
            key={d.id}
            className="item"
            href={d.link}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={d.img}
              alt={d.title}
              onError={(e) => {
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80";
              }}
            />
            <div className="overlay">
              <h3>{d.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}