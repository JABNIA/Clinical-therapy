import useScreenSize from "../hooks/useScreenSize";
import { AboutMobiletWrapper, AboutTabletWrapper, AboutWrapper } from "../styles/about-styled";

function About() {
  const { width } = useScreenSize()


  if (width >= 1300) {

    return (
      <AboutWrapper>
        <AboutLargeComponent />
      </AboutWrapper>
    );
  }

  if (width >= 769) {

    return (
      <AboutTabletWrapper>
        <AboutTabletComponent />
      </AboutTabletWrapper>
    );
  }

  if (width <= 769) {

    return (
      <AboutMobiletWrapper>
        <AboutMobileComponent />
      </AboutMobiletWrapper>
    );
  }
}

export default About;


function AboutLargeComponent() {
  return (
    <>
      <h1 className="headline">Meet Dr. Anna Margishvili, Licensed Clinical Psychologist</h1>

      <div className="about-content">
        <img
          src="/assets/images/margo.jpg"
          alt="Dr. Anna Smith"
         className="about-img"
        />
        <div>
       <p>
          With over 12 years of experience in mental health care, I am dedicated
          to helping clients achieve emotional balance and personal fulfillment.
          I hold a PhD in Clinical Psychology from Stanford University and
          specialize in Cognitive Behavioral Therapy (CBT), trauma therapy, and
          mindfulness-based approaches. My approach is collaborative,
          compassionate, and tailored to your unique needs.
        </p>
        <p>
          Outside of my practice, I am passionate about mental health advocacy,
          leading community workshops, and conducting research on resilience and
          well-being. I believe healing begins with trust, and I’m committed to
          walking alongside you on your journey to wellness.
        </p>
      <h2>
        Professional Associations
      </h2>
      <ul>
        <li>
          American Psychological Association (APA)
        </li>
        <li>
          National Association of Cognitive-Behavioral Therapists (NACBT)
        </li>
        <li>
          International Society for Traumatic Stress Studies (ISTSS)
        </li>
      </ul>
      <h2>
        Education
      </h2>
      <ul> 
        <li >
          PhD in Clinical Psychology, Stanford University
        </li>
        <li >
          MA in Psychology, University of California, Berkeley
        </li>
        <li>
          BA in Psychology, University of Washington
        </li>
      </ul>
        </div>
       </div>
       </>
  );
}

function AboutTabletComponent() {
  return (
    <>
      <h1 className="headline">Meet Dr. Anna Margishvili, Licensed Clinical Psychologist</h1>

      <div className="about-content">
        <img
          src="/assets/images/margo.jpg"
          alt="Dr. Anna Smith"
         className="about-img"
        />
        <div>
       <p>
          With over 12 years of experience in mental health care, I am dedicated
          to helping clients achieve emotional balance and personal fulfillment.
          I hold a PhD in Clinical Psychology from Stanford University and
          specialize in Cognitive Behavioral Therapy (CBT), trauma therapy, and
          mindfulness-based approaches. My approach is collaborative,
          compassionate, and tailored to your unique needs.
        </p>
        <p>
          Outside of my practice, I am passionate about mental health advocacy,
          leading community workshops, and conducting research on resilience and
          well-being. I believe healing begins with trust, and I’m committed to
          walking alongside you on your journey to wellness.
        </p>
      <h2>
        Professional Associations
      </h2>
      <ul>
        <li>
          American Psychological Association (APA)
        </li>
        <li>
          National Association of Cognitive-Behavioral Therapists (NACBT)
        </li>
        <li>
          International Society for Traumatic Stress Studies (ISTSS)
        </li>
      </ul>
      <h2>
        Education
      </h2>
      <ul> 
        <li >
          PhD in Clinical Psychology, Stanford University
        </li>
        <li >
          MA in Psychology, University of California, Berkeley
        </li>
        <li>
          BA in Psychology, University of Washington
        </li>
      </ul>
        </div>
       </div>
    </>
  )
}

function AboutMobileComponent() {
  return (
    <>
      <h1 className="headline">Meet Dr. Anna Margishvili, Licensed Clinical Psychologist</h1>

      <div className="about-content">
        <img
          src="/assets/images/margo.jpg"
          alt="Dr. Anna Smith"
         className="about-img"
        />
        <div>
       <p>
          With over 12 years of experience in mental health care, I am dedicated
          to helping clients achieve emotional balance and personal fulfillment.
          I hold a PhD in Clinical Psychology from Stanford University and
          specialize in Cognitive Behavioral Therapy (CBT), trauma therapy, and
          mindfulness-based approaches. My approach is collaborative,
          compassionate, and tailored to your unique needs.
        </p>
        <p>
          Outside of my practice, I am passionate about mental health advocacy,
          leading community workshops, and conducting research on resilience and
          well-being. I believe healing begins with trust, and I’m committed to
          walking alongside you on your journey to wellness.
        </p>
      <h2>
        Professional Associations
      </h2>
      <ul>
        <li>
          American Psychological Association (APA)
        </li>
        <li>
          National Association of Cognitive-Behavioral Therapists (NACBT)
        </li>
        <li>
          International Society for Traumatic Stress Studies (ISTSS)
        </li>
      </ul>
      <h2>
        Education
      </h2>
      <ul> 
        <li >
          PhD in Clinical Psychology, Stanford University
        </li>
        <li >
          MA in Psychology, University of California, Berkeley
        </li>
        <li>
          BA in Psychology, University of Washington
        </li>
      </ul>
        </div>
       </div>
    </>
  )
}