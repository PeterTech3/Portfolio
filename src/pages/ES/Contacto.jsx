import React, { useState } from "react";
import "../../assets/styles/contact.scss";
import { Console } from "../../components/Console";
import { ParticlesBackground } from "../../components/Backgroud";

export const Contacto = () => {
  const [copied, setCopied] = useState(false);

  const email = "petech93@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const options = {
    fpsLimit: 60,
    fullScreen: { enable: true, zIndex: 0 },
    particles: {
      number: {
        value: 80, // Un poco menos denso para no saturar la terminal
        density: { enable: true, area: 1000 },
      },
      color: { value: "#22c55e" }, // Tu verde neón
      shape: {
        type: "char",
        options: {
          char: {
            value: ["@", "{", "}", "</>", "0", "1", "git", "mail", "&", ";"],
            font: "Fira Code, monospace",
            weight: "400",
          },
        },
      },
      opacity: {
        value: { min: 0.05, max: 0.4 }, // Muy tenue para priorizar la legibilidad
      },
      size: {
        value: { min: 12, max: 20 },
      },
      move: {
        enable: true,
        speed: 1.5, // Movimiento pausado y elegante
        direction: "bottom",
        straight: false, // Un poco de bamboleo para que no parezca lluvia estática
        outModes: { default: "out" },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "bubble", // Las letras crecen al pasar el ratón, como una lupa
        },
        onClick: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        bubble: {
          distance: 200,
          size: 30,
          duration: 2,
          opacity: 0.8,
          color: "#4ade80", // Brillo más claro al hover
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    detectRetina: true,
  };

  return (
    <div className="relative w-full min-h-screen bg-[#0a0f18]">
      <Console />
      <ParticlesBackground config={options} id="tsparticles_contact" />
    
      <section className="contact-section">
        <div className="terminal-container">
          <div className="terminal-header">
            <div className="buttons">
              <span className="close"></span>
              <span className="minimize"></span>
              <span className="maximize"></span>
            </div>
            <div className="title">contact_info.json</div>
          </div>

          <div className="terminal-body">
            <div className="terminal-body">
              <pre>
                <span className="bracket">{"{"}</span>
                <div className="line">
                  <span className="key">"name"</span>
                  <span className="colon">:</span>
                  <span className="string">"Pedro Antonio Sánchez Pérez"</span>,
                </div>
                <div className="line">
                  <span className="key">"role"</span>
                  <span className="colon">:</span>
                  <span className="string">"Fullstack Developer"</span>,
                </div>
                <div className="line">
                  <span className="key">"location"</span>
                  <span className="colon">:</span>
                  <span className="string">"Murcia, España"</span>,
                </div>
                <div className="line clickable" onClick={copyToClipboard}>
                  <span className="key">"email"</span>
                  <span className="colon">:</span>
                  <span className="string">"{email}"</span>,
                  <span className="comment"> // Click to copy</span>
                </div>
                <div className="line">
                  <span className="key">"socials"</span>
                  <span className="colon">:</span>
                  <span className="bracket">{"["}</span>
                  <div className="sub-line">
                    <a
                      href="https://www.linkedin.com/..."
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="string">"linkedin"</span>
                    </a>
                    <span className="colon">,</span>
                    <a
                      href="https://github.com/..."
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="string">"github"</span>
                    </a>
                  </div>
                  <span className="bracket">{"]"}</span>
                </div>
                <span className="bracket">{"}"}</span>
              </pre>

              {copied && (
                <div className="toast">Success: Email copied to clipboard!</div>
              )}
            </div>

            {copied && (
              <div className="toast">Success: Email copied to clipboard!</div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
