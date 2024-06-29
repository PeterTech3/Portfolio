import React from "react";
import { useInView } from "react-intersection-observer";
import styled, { css } from "styled-components";
import { Element } from "react-scroll";
import { Sidebar } from "./Sidebar";

const SectionContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;

  ${(props) =>
    props.inView &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`;

const Video = styled.video`
  width: 100%;
  max-width: 800px;
  height: auto;
  margin-top: 20px;
`;

export const Section = ({
  name,
  children,
  videoSrc,
  clase,
  imgSrc,
  text,
  title,
  navbarSections
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Element name={name} className={clase} key={name}>
      <SectionContainer className={`content content-${clase}`} ref={ref}>
        <Sidebar sections={navbarSections}/>
        <Content inView={inView}>{children}</Content>
        {imgSrc && (
          <Content className="img" inView={inView}>
            <img src={imgSrc} />
          </Content>
        )}
        {title && (
          <Content className="img" inView={inView}>
            <h2>{title}</h2>
          </Content>
        )}
        {videoSrc && (
          <Content className="video" inView={inView}>
            <Video src={videoSrc} muted controls />
          </Content>
        )}
        {text && (
          <Content className="text" inView={inView}>
            {text}
          </Content>
        )}
      </SectionContainer>
    </Element>
  );
};
