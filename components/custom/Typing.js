import React, { useState } from "react";
import Typing from "react-typing-animation";
import Link from "next/link";
import Image from 'next/image';
import { Container, Span, Sub, Paragraph, Title } from "./styles";

export default function TextArea({ home, pre, title, subtitle, children }) {
    const [actived, setActived] = useState(false);
    const [buttonHover, setButtonHover] = useState(false)
    
  
    return (
        <Container>
        <div className="typing-box">
        <Typing
          cursorClassName="custom"
          cursor={<span>_</span>}
          speed={800}
          onFinishedTyping={() => setActived(true)}
        >
          {!home ? (
            <Title>{title}</Title>
          ) : pre ? (
            <React.Fragment>
              <Typing.Speed ms={800} />
                  <Span>
                      <div>Hi,</div>
                      <div>
                          I'm <span><Image src={"/img/jj.png"} alt="J" loading={'eager'} eager priority={true} height={50} width={30} className="special-j"/></span> ason,
                      </div>
                      <div>
                          Web Developer!
                      </div>
                  </Span>
  
              <Typing.Backspace count={32} delay={100} speed={3000} />
              <Typing.Speed ms={2000} />
                  <Span>
                      <div>Hi,</div>
                      <div>
                          I'm <span><img src={"/img/jj.png"} alt="" className="special-j"/></span> ason,
                      </div>
                      <div>
                          Web Developer!
                      </div>
                  </Span>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Typing.Speed ms={50} />
                  <span >
                      <div><Span key={Math.random()} name="rubberBand">H</Span ><Span key={Math.random()} name="rubberBand">i</Span><Span key={Math.random()} name="rubberBand">,</Span></div>
                      <div>
                          <Span key={Math.random()} name="rubberBand">I</Span>
                          <Span key={Math.random()} name="rubberBand">'</Span>
                          <Span key={Math.random()} name="rubberBand">m</Span>
                          <Typing.Speed ms={1} />
                          <Span><span> </span><span> </span></Span>
                          <Typing.Speed ms={50} />
                          <span><img src={"/img/jj.png"} alt="" className="special-j"/></span>
                          <Span key={Math.random()} name="rubberBand">a</Span>
                          <Span key={Math.random()} name="rubberBand">s</Span>
                          <Span key={Math.random()} name="rubberBand">o</Span>
                          <Span key={Math.random()} name="rubberBand">n</Span>
                          <Span key={Math.random()} name="rubberBand">,</Span>
                      </div>
                      <div>
                          <Span key={Math.random()} name="rubberBand">W</Span>
                          <Span key={Math.random()} name="rubberBand">e</Span>
                          <Span key={Math.random()} name="rubberBand">b</Span>
                          <Typing.Speed ms={1} />
                          <Span><span> </span><span> </span></Span>
                          <Typing.Speed ms={50} />
                          <Span key={Math.random()} name="rubberBand">D</Span>
                          <Span key={Math.random()} name="rubberBand">e</Span>
                          <Span key={Math.random()} name="rubberBand">v</Span>
                          <Span key={Math.random()} name="rubberBand">e</Span>
                          <Span key={Math.random()} name="rubberBand">l</Span>
                          <Span key={Math.random()} name="rubberBand">o</Span>
                          <Span key={Math.random()} name="rubberBand">p</Span>
                          <Span key={Math.random()} name="rubberBand">e</Span>
                          <Span key={Math.random()} name="rubberBand">r</Span>
                          <Span key={Math.random()} name="rubberBand">!</Span>
                      </div>
                  </span>
            </React.Fragment>
          )}
        </Typing>
        </div>
        {home && <Sub className="below-typing">{subtitle}</Sub>}
        {home && (
          <Link href="/skills">
            {/* <Button className={actived && "active"}>Under Construction</Button> */}
            <button 
              className="description-name" 
              id={buttonHover ? 'desc-hover' : 'desc-button' }
              onMouseEnter={() => setButtonHover(true)}
              onMouseLeave={() => setButtonHover(false)}
              style={{animation: `buttonFade 6s`}}
              >Contact me!</button>
          </Link>
        )}
        <Paragraph>{children}</Paragraph>
      </Container>
    )
}