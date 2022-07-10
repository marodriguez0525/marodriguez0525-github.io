import React from "react";
import "./style.css";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Timeline = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Our Timeline | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Our Timeline</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="03-04-2021"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">First Chat in Discord</h3>
              <h5 className="vertical-timeline-element-subtitle">Awkward Acquantances</h5>
              <p>
                First known communication outside the game. We cleared immediately after a few days. Worth it. Pugs just suck at progging relativities.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="March 2021"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Becoming Friends</h3>
              <h5 className="vertical-timeline-element-subtitle">Talking more in and out of the game</h5>
              <p>
                Just doing small talks. Becoming each other's company during the early mornings and tries to do stuff together even if raid tier was already done like doing alt runs and dailies.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="April 2021"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Feeling something more than just friends</h3>
              <h5 className="vertical-timeline-element-subtitle">Holding back their feelings for each other</h5>
              <p>
                More than just small talks. Now talks about each other's personal lives. Seeing a lot of similarities like how we write our thoughts etc. Also added each other on FB late April. Planning to do ultimates together around this point. Although, the catch was she had a BF at this point. 
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="May 2021"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Where it kinda started</h3>
              <h5 className="vertical-timeline-element-subtitle">Short-lived</h5>
              <p>
                Lots of things happening here. Vess finally resigned on his hated job at Tsukiden. The fall off of Kana and Mortem's relationship. Vess's sudden confession, and it was answered back. First time doing couply stuff like gposing in game. ALso started to do ultimates together with dahomies.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
              date="June 2021"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              // icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">Bad Month</h3>
              <h5 className="vertical-timeline-element-subtitle">Also known as the month we don't wanna talk about</h5>
              <p>
                Kana broke up with Vess due to her internal struggles. Vess didn't gave up though. It was a really hard month. Vess had to see her RP-ing with other people and it was obvious it was gonna go over that. This is also Vess' first time playing a male character just to win her attention. Around the end of June, Kana decided to take a two week break from the game.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="July 2021"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              // icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">Reconciliation and getting back together</h3>
              <h5 className="vertical-timeline-element-subtitle">It was the return of the comeback for Vess</h5>
              <p>
                During the first weeks, it was surprising that Kana was still talking to Vess during the break, which didn't made much sense. After some time, Kana realizes something after trying to buy a desk and it got out of stuck. It might also happen for Vess. So, after thinking about it, she confessed to Vess. After a few days, they got back together. When she came back to the game, it's now time for TEA reprogs as she was out of the game for quite a while.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="August 2021"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              // icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">First Month of being together</h3>
              <h5 className="vertical-timeline-element-subtitle">First EB and a lot of ultimate progs</h5>
              <p>
                It was around this time when Vess decided to leave his inactive group of friends in Typhon to Atomos. He wasn't that comfy on socializing at first, but eventually warmed up to the FC. It was Vess's first time doing an intimate thing in game. A marriage in-game. Being the social recluse that he was, he doesn't know shit and needs Kana to guide him every step of the way. The celebration was poggers.
              </p>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="September 2021"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              // icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">First Ultimate clears</h3>
              <h5 className="vertical-timeline-element-subtitle">It was mainly a healer fight</h5>
              <p>
                The couple finally cleared the easiest ultimate in the game. It was still poggers and this was mainly Vess's fave glam out of the current three due to a blue shine. This was also the time where Kana was doing a lot of ultimate progs in NA and also UCOB.
              </p>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="October 2021"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              // icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">A new triple legend in the game</h3>
              <h5 className="vertical-timeline-element-subtitle">So proud of you</h5>
              <p>
                Kana managed to clear UCOB in the first week of October and TEA around the last week. TEA had a lot of adjustments and roster changes due to IRL but the couple and their friends managed to snag a clear before the month ended. Although, there was no reclears. Sadge.  
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="November 2021"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              // icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">The UCOB grind for Vess</h3>
              <h5 className="vertical-timeline-element-subtitle">Unfortunate</h5>
              <p>
                Seeing Kana cleared UCOB made Vess want to try and clear the ultimate on the last month of the expansion. They joined a static to speed up the prog, and did last minute attempts on clearing the content, but alas, they didn't secured a clear before the maintenance. This month was also a moment for Vess as it was his first time buying a suit, ever. Kana approves the look. Kana joined a hardcore week 1 static for the next tier and Vess opted to just chill and PF
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="December 2021"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              // icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">Doing things together</h3>
              <h5 className="vertical-timeline-element-subtitle">Best way to end the year</h5>
              <p>
                December came and it was time for Endwalker. The ending of the Zodiark/Hydaelyn arc was so good and it really deserved the name. It was really the end of things for that storyline, well worth the wait and really worth doing it with your special someone. Little did Vess know, Kana did a surprise video for him as a gift, where she showcased their days in game together. Like the crybaby that he was, he cried a lot while watching the video.
              </p>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="January 2022"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              // icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">New year, new me</h3>
              <h5 className="vertical-timeline-element-subtitle">A month of learnings</h5>
              <p>
                The new year didn't really start that good, as Kana was having a hard time, yet Vess decided to prog UCOB because their friends managed to organize a decent group that has clearing potential. He cleared but he left Kana alone in her bad times. Vess learned his lesson and tries to be much more attentive to Kana's needs. They also had a lot of arguments during but they both learned on what to do in the future. Moving on, this was also the month where the couple managed to clear a raid tier within week two, proving that with the right group, they can excel and clear early. Although Vess's clear was kind of a clutch and cannot do it without Kana's intervention in making a small group to just consistently prog the last boss.
              </p>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="February 2022"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              // icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">TEA and IRL progs</h3>
              <p>
                This month, the couple started to run a TEA HC prog because they want to get totems that they were deprived of due to the early dissolution of their TEA static. They managed to prog on a decent pace, given the days. As the prog reaches the final, there was a problematic member where he was inconsistent yet prideful in not using third-party programs to assist his gameplay. He was given the boot eventually. On the IRL side of things, Vess tried to surprise Kana in modifying their home to something similar to her previous house and a pseudo in-game dinner with a matching song composed by yours truly. And also flowers. Needless to say, it was super effective
              </p>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="March 2022"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              // icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">TEA Reclears and clashes of ideologies</h3>
              <h5 className="vertical-timeline-element-subtitle">The couple had a different mindset when it comes to progging</h5>
              <p>
                This was mainly a month of reclears and deciding on the schedule of the upcoming ultimate. The couple managed to snipe majority of the glams they want from the ultimate and was relatively happy with the group. However, the discussion of the schedules on how much time we should sink in to prog the ultimate caused a lot of discussions for the couple. Vess wanted to prog at a midcore pace but Kana wanted more because it usually attracts better players and clearing faster is good to create the free time early. Aside from that, even in the teambuilding, the couple had a lot to say, one wants to just do the savage as a check for the players and the other wants to prog an ultimate as a test of skill. Due to the differences, Kana decides to leave the static in order to pursue a more hardcore static.
              </p>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="April 2022"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              // icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">Separate ways</h3>
              <h5 className="vertical-timeline-element-subtitle">Teambuilding with each other's statics</h5>
              <p>
                This was the month where we started recruiting and preparing for DSR on our own groups. My side's recruitment went kind of smooth and landed on two capable players easily. Kana is starting to see how potentially toxic hardcore groups are and decided to leave. Vess thinks that it was for the best as progging with that kind of environment will be really really bad for your mental health.
              </p>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="May 2022"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              // icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">DSR Prog time</h3>
              <h5 className="vertical-timeline-element-subtitle">The tensions were really really high...</h5>
              <p>
                This basically marks the month where we mainly progged DSR and was mainly our talk during the evenings. Kana didn't have a group during the early days so she resorted in PF til she landed a really good static. They had a toxic DRK but eventually left and got stuck on the early phases of the fight (LMAO). The ultimate really shows how people's feelings towards progging an ultimate. Some treat it as some were just chill, some were really pouring all of their effort to the point where their mental is affecting their IRL. It's a rollercoaster ride where there are a lot of ups and downs. We both persevere to clear this content.
              </p>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="June 2022"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              // icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">Becoming a quadruple legend couple</h3>
              <h5 className="vertical-timeline-element-subtitle">We cleared the hardest content of the game</h5>
              <p>
                Early in the month, both manage to clear Dragonsong's Reprise, which was the hardest content released so far. Clearing it basically means cementing yourself as one of the best in the game in terms of gaming. The only not fun part in doing the ultimate was the drama ensues, so both of them learned on what they want for their next group. Also, it was during this month where Kana managed to land a job where she was more at home and not as pressured, so that's super pog as well.
              </p>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="Today"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              // icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">Happy Anniversary!</h3>
              <h5 className="vertical-timeline-element-subtitle">I really love you soooooooo much</h5>
              <p>
                I think it's better for you to read the letter
              </p>
              <Link to="/about" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      Click me!
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
            </Link>
            </VerticalTimelineElement>
        </VerticalTimeline>
      </Container>
    </HelmetProvider>
  );
};
