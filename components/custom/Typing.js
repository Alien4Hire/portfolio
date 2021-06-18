import React, { useState, useEffect, useRef } from "react";
import Typing from "react-typing-animation";
import Link from "next/link";
import Image from 'next/image';
import { Container, Span, Sub, Paragraph, Title } from "./styles";
import {useRouter} from 'next/router';

export default function TextArea({ home, pre, title, subtitle, children, isLoaded, setIsLoaded }) {
    const [actived, setActived] = useState(false);
    const [buttonHover, setButtonHover] = useState(false);
    const router = useRouter();
    const ref = useRef(null);

    useEffect(() => {
      if ((ref.current?.firstChild?.firstChild)?.complete) {
        setLoaded(true)
      }
    }, [])
    
  
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
                      <div className="text-size">Hi,</div>
                      <div ref={ref} className="text-size">
                          I'm <span><Image src={"/img/jj.png"} alt="J" onLoad={() => setIsLoaded(true)} loading={'eager'} eager priority={true} height={50} width={30} className="special-j"/></span> ason,
                      </div>
                      <div className="text-size">
                          Web Developer!
                      </div>
                  </Span>
  
              <Typing.Backspace count={32} delay={100} speed={3000} />
              <Typing.Speed ms={2000} />
                  <Span>
                      <div className="text-size">Hi,</div>
                      <div className="text-size">
                          I'm <span><img src={"/img/jj.png"} alt="" className="special-j"/></span> ason,
                      </div>
                      <div className="text-size">
                          Web Developer!
                      </div>
                  </Span>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Typing.Speed ms={50} />
                  <span >
                      <div className="typing-width"><Span key={Math.random()} className="text-size" className="text-size" name="rubberBand">H</Span ><Span key={Math.random()} className="text-size" name="rubberBand">i</Span><Span key={Math.random()} className="text-size" name="rubberBand">,</Span></div>
                      <div className="typing-width">
                          <Span key={Math.random()} className="text-size" name="rubberBand">I</Span>
                          <Span key={Math.random()} className="text-size" name="rubberBand">'</Span>
                          <Span key={Math.random()} className="text-size" name="rubberBand">m</Span>
                          <Typing.Speed ms={1} />
                          <Span><span> </span><span> </span></Span>
                          <Typing.Speed ms={50} />
                          <span ref={ref}><img src={"/img/jj.png"} alt="J" className="special-j"/></span>
                          <Span key={Math.random()} className="text-size" name="rubberBand">a</Span>
                          <Span key={Math.random()} className="text-size" name="rubberBand">s</Span>
                          <Span key={Math.random()} className="text-size" name="rubberBand">o</Span>
                          <Span key={Math.random()} className="text-size" name="rubberBand">n</Span>
                          <Span key={Math.random()} className="text-size" name="rubberBand">,</Span>
                      </div>
                      <div className="typing-width">
                          <Span key={Math.random()} className="text-size" name="rubberBand">W</Span>
                          <Span key={Math.random()} className="text-size" name="rubberBand">e</Span>
                          <Span key={Math.random()} className="text-size" name="rubberBand">b</Span>
                          <Typing.Speed ms={1} />
                          <Span><span> </span><span> </span></Span>
                          <Typing.Speed ms={50} />
                          <Span key={Math.random()} className="text-size" name="rubberBand">D</Span>
                          <Span key={Math.random()} className="text-size" name="rubberBand">e</Span>
                          <Span key={Math.random()} className="text-size" name="rubberBand">v</Span>
                          <Span key={Math.random()} className="text-size" name="rubberBand">e</Span>
                          <Span key={Math.random()} className="text-size" name="rubberBand">l</Span>
                          <Span key={Math.random()} className="text-size" name="rubberBand">o</Span>
                          <Span key={Math.random()} className="text-size" name="rubberBand">p</Span>
                          <Span key={Math.random()} className="text-size" name="rubberBand">e</Span>
                          <Span key={Math.random()} className="text-size" name="rubberBand">r</Span>
                          <Span key={Math.random()} className="text-size" name="rubberBand">!</Span>
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
              onClick={(e) => {
                e.preventDefault();
                router.push('#contact');
              }}
              style={{animation: `buttonFade 6s`}}
              >Contact me!</button>
          </Link>
        )}
        <Paragraph>{children}</Paragraph>
        
      </Container>
    )
}