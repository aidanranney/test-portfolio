import React from 'react';
import { withRouter } from 'react-router-dom';

const Resume = () => {

return (
    <div id="resume" className='jumbotron'>
        <p className="p3">&nbsp;</p>
        <p className="p3"><span className="s1" style={{fontFamily: 'georgia'}}><strong>Phone</strong>: (250) 888-2090 </span></p>
        <p className="p3"><span className="s1" style={{fontFamily: 'georgia'}}><strong>E-Mai</strong>l: <a href="mailto:aidan.s.ranney@gmail.com">aidan.s.ranney@gmail.com</a></span></p>
        <p className="p3">&nbsp;</p>
        <p className="p1"><span className="s1" style={{fontFamily: 'georgia'}}><strong>Objective</strong>:</span></p>
        <p className="p2"><span className="s2" style={{fontFamily: 'georgia'}}>To gain experience with current front and back-end Javascript frameworks.</span></p>
        <p className="p3">&nbsp;</p>
        <p className="p1"><span className="s1" style={{fontFamily: 'georgia'}}><strong>Qualifications/Skills</strong>:</span></p>
        <ul className="ul1">
        <li className="li1"><span style={{fontFamily: 'georgia'}}><span className="s2">JavaScript, Java, Python, C#, SQL</span><span className="s4">.</span></span></li>
        <li className="li4"><span className="s2" style={{fontFamily: 'georgia'}}>Some experience in Node.js, Express.js on the back-end; React on the front-end.</span></li>
        <li className="li4"><span className="s2" style={{fontFamily: 'georgia'}}>Adobe Creative Suite</span></li>
        <li className="li4"><span className="s2" style={{fontFamily: 'georgia'}}>Experience with design and layout, as well as editing and proofing copy.</span></li>
        <li className="li4"><span className="s2" style={{fontFamily: 'georgia'}}>Exceptional communication and customer service skills.</span></li>
        <li className="li4"><span className="s2" style={{fontFamily: 'georgia'}}>Works well under pressure in a high paced environment.</span></li>
        <li className="li4"><span className="s2" style={{fontFamily: 'georgia'}}>Always looking for new ways to improve efficiency and the experience of clients. </span></li>
        </ul>
        <p className="p5">&nbsp;</p>
        <p className="p1"><span className="s1" style={{fontFamily: 'georgia'}}><strong>Relevant Education</strong>:</span></p>
        <ul className="ul1">
        <li className="li4"><span className="s2" style={{fontFamily: 'georgia'}}>Camosun College Information and Computer Systems Technology Program [2017 &ndash; present]</span></li>
        <ul className="ul1">
        <li className="li4"><span className="s2" style={{fontFamily: 'georgia'}}>Training in full-stack web development, systems analysis and basic systems and security management.</span></li>
        </ul>
        <li className="li4"><span className="s2" style={{fontFamily: 'georgia'}}>UBCO Faculty of Creative and Critical Studies [2007-2010]</span></li>
        <ul className="ul1">
        <li className="li4"><span className="s2" style={{fontFamily: 'georgia'}}>Trained in the writing and editing of prose and gained experience in the field of journalism.</span></li>
        </ul>
        </ul>
        <p className="p5">&nbsp;</p>
        <p className="p1"><span className="s1" style={{fontFamily: 'georgia'}}><strong>Partial Work History</strong>:</span></p>
        <p className="p2"><span className="s2" style={{fontFamily: 'georgia'}}><strong>Foo Asian Street Food</strong></span></p>
        <p className="p2"><span className="s2" style={{fontFamily: 'georgia'}}>Cook</span></p>
        <p className="p2"><span style={{fontFamily: 'georgia'}}><span className="s2">Dishes/Prep/Server</span><span className="s2"><span className="Apple-converted-space">&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></span></span></p>
        <p className="p4"><span className="s2" style={{fontFamily: 'georgia'}}>Victoria, BC</span></p>
        <p className="p4"><span className="s2" style={{fontFamily: 'georgia'}}>March 2014 &ndash; Present</span></p>
        <p className="p4"><span className="s2" style={{fontFamily: 'georgia'}}>October 2010 &ndash; March 2014</span></p>
        <p className="p4">&nbsp;</p>
        <p className="p2"><span className="s2" style={{fontFamily: 'georgia'}}><strong>Phoenix Newspaper</strong></span></p>
        <p className="p2"><span className="s2" style={{fontFamily: 'georgia'}}>Copy Editor</span></p>
        <p className="p2"><span className="s2" style={{fontFamily: 'georgia'}}>Assistant Arts Editor</span></p>
        <p className="p4"><span className="s2" style={{fontFamily: 'georgia'}}>Kelowna, BC</span></p>
        <p className="p4"><span className="s2" style={{fontFamily: 'georgia'}}>September 2008 &ndash; April 2010</span></p>
        <p className="p4"><span className="s2" style={{fontFamily: 'georgia'}}>September 2007 &ndash; April 2008</span></p>
    </div>
    )
}

export default withRouter(Resume);