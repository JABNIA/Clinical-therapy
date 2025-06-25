import { HomeMobileWrapper, HomeWrapper, HomeWrapperTablet } from "../styles/home-styled";
import useScreenSize from "../hooks/useScreenSize";


function Home() {
  const { width } = useScreenSize()
  
  if(width >= 1300){
    return (
      <HomeWrapper>
        <HomeLargeScreen />
      </HomeWrapper>
    );    
  }
  if(width >= 769){
    return (
      <HomeWrapperTablet>
        <HomeTabletComponent />
      </HomeWrapperTablet>
    );
  }
   if(width <= 769){
    return (
      <HomeMobileWrapper>
        <HomeMobileComponent />
      </HomeMobileWrapper>
    );
  }
}

export default Home;

function HomeLargeScreen(){
    return (
      <>
    <div className="chairBg">
        <div className="contentWrapper">
          <h2 className="headline">
            Compassionate Mental Health Care for a Healthier, Happier You
          </h2>
          <p className="content">
            If you are seeking place where you are able to speack your mind,
            express your feelings without judgement, share your deepes thoughts,
            you are more than welcome. here your mental well-being is my top
            priority. As a licensed clinical psychologist, I provide
            evidence-based therapy to help individuals navigate life's
            challenges, heal from past wounds, and build resilience for the
            future. Whether you're struggling with anxiety, depression, trauma,
            or relationship issues, I offer a safe, non-judgmental space to
            explore your thoughts and emotions. Together, we’ll work toward
            meaningful growth and lasting change.
          </p>
        </div>
      </div>
      <div>
      <div className="therapy info">
      <div>
        <h2 className="headline">Investing in Your Mental Health Matters</h2>
        <p className="content">
          Therapy isn’t just for crisis moments—it’s a proactive step toward
          understanding yourself, improving relationships, and cultivating
          resilience. Many clients find therapy helps them: 
          <ul className="small-list">
            <li>Reduce symptoms of anxiety or depression. </li>
            <li>Develop healthier coping strategies.</li>
            <li>Strengthen communication and boundaries. </li>
            <li>Process trauma or grief in a supportive space.</li>
          </ul>
         You don’t have to face challenges alone. Let’s work together to create a brighter path forward.
        </p>
      </div>
      <div className="img-container">
        <img src="/assets/images/session.jpeg" alt="session" className="sessionImg"/>
      </div>
      </div>
      </div>
      <div className="services info">
        <h2 className="headline">Therapeutic Services for Individuals and Couples</h2>
        <p className="content">
          I provide personalized therapy for adults, adolescents, and couples, including:
          <ul className="small-list">
            <li>
              <strong>Individual Therapy:</strong> Address anxiety, depression, stress, and self-esteem issues.
              </li>
            <li>
              <strong> Trauma Therapy:</strong>Evidence-based treatments like EMDR or CPT for PTSD.
            </li>
            <li>
              <strong>Couples Counseling:</strong>Improve communication and rebuild connection.
            </li>
            <li>
              <strong>Specialized Approaches:</strong>CBT, DBT, psychodynamic therapy, and mindfulness.
            </li>
          </ul>
        Each session is designed to empower you with tools for lasting change. [Link to "Contact" page to schedule a consultation.]
        </p>
      </div>

      </>
      )
}

function HomeTabletComponent(){
  return (
    <>
      <div className="chairBg">
        <div className="contentWrapper">
          <h2 className="headline">
            Compassionate Mental Health Care for a Healthier, Happier You
          </h2>
          <p className="content">
            If you are seeking place where you are able to speack your mind,
            express your feelings without judgement, share your deepes thoughts,
            you are more than welcome. here your mental well-being is my top
            priority. As a licensed clinical psychologist, I provide
            evidence-based therapy to help individuals navigate life's
            challenges, heal from past wounds, and build resilience for the
            future. Whether you're struggling with anxiety, depression, trauma,
            or relationship issues, I offer a safe, non-judgmental space to
            explore your thoughts and emotions. Together, we’ll work toward
            meaningful growth and lasting change.
          </p>
        </div>
      </div>
      <div>
      <div className="therapy info">
      <div>
        <h2 className="headline">Investing in Your Mental Health Matters</h2>
        <p className="content">
          Therapy isn’t just for crisis moments—it’s a proactive step toward
          understanding yourself, improving relationships, and cultivating
          resilience. Many clients find therapy helps them: 
          <ul className="small-list">
            <li>Reduce symptoms of anxiety or depression. </li>
            <li>Develop healthier coping strategies.</li>
            <li>Strengthen communication and boundaries. </li>
            <li>Process trauma or grief in a supportive space.</li>
          </ul>
         You don’t have to face challenges alone. Let’s work together to create a brighter path forward.
        </p>
      </div>
        <img src="/assets/images/session.jpeg" alt="session" className="sessionImg"/>
      </div>
      </div>
      <div className="services info">
        <h2 className="headline">Therapeutic Services for Individuals and Couples</h2>
        <p className="content">
          I provide personalized therapy for adults, adolescents, and couples, including:
          <ul className="small-list">
            <li>
              <strong>Individual Therapy:</strong> Address anxiety, depression, stress, and self-esteem issues.
              </li>
            <li>
              <strong> Trauma Therapy:</strong>Evidence-based treatments like EMDR or CPT for PTSD.
            </li>
            <li>
              <strong>Couples Counseling:</strong>Improve communication and rebuild connection.
            </li>
            <li>
              <strong>Specialized Approaches:</strong>CBT, DBT, psychodynamic therapy, and mindfulness.
            </li>
          </ul>
        Each session is designed to empower you with tools for lasting change. [Link to "Contact" page to schedule a consultation.]
        </p>
      </div>
    </>
  )
}

function HomeMobileComponent(){
  return (
    <>
        <div className="contentWrapper">
          <h2 className="headline">
            Compassionate Mental Health Care for a Healthier, Happier You
          </h2>
          <div className="chairBg">
          </div>
          <p className="content">
            If you are seeking place where you are able to speack your mind,
            express your feelings without judgement, share your deepes thoughts,
            you are more than welcome. here your mental well-being is my top
            priority. As a licensed clinical psychologist, I provide
            evidence-based therapy to help individuals navigate life's
            challenges, heal from past wounds, and build resilience for the
            future. Whether you're struggling with anxiety, depression, trauma,
            or relationship issues, I offer a safe, non-judgmental space to
            explore your thoughts and emotions. Together, we’ll work toward
            meaningful growth and lasting change.
          </p>
        </div>
      <div>
      <div className="therapy info">
        <div>
          <h2 className="headline">Investing in Your Mental Health Matters</h2>
        </div>
        <div>
          <img src="/assets/images/session.jpeg" alt="session" className="sessionImg"/>
        </div>
        </div>
        <p className="content">
          Therapy isn’t just for crisis moments—it’s a proactive step toward
          understanding yourself, improving relationships, and cultivating
          resilience. Many clients find therapy helps them: 
          <ul className="small-list">
            <li>Reduce symptoms of anxiety or depression. </li>
            <li>Develop healthier coping strategies.</li>
            <li>Strengthen communication and boundaries. </li>
            <li>Process trauma or grief in a supportive space.</li>
          </ul>
         You don’t have to face challenges alone. Let’s work together to create a brighter path forward.
        </p>
      
      </div>
      <div className="services info">
        <h2 className="headline">Therapeutic Services for Individuals and Couples</h2>
        <p className="content">
          I provide personalized therapy for adults, adolescents, and couples, including:
          <ul className="small-list">
            <li>
              <strong>Individual Therapy:</strong> Address anxiety, depression, stress, and self-esteem issues.
              </li>
            <li>
              <strong> Trauma Therapy:</strong>Evidence-based treatments like EMDR or CPT for PTSD.
            </li>
            <li>
              <strong>Couples Counseling:</strong>Improve communication and rebuild connection.
            </li>
            <li>
              <strong>Specialized Approaches:</strong>CBT, DBT, psychodynamic therapy, and mindfulness.
            </li>
          </ul>
        Each session is designed to empower you with tools for lasting change. [Link to "Contact" page to schedule a consultation.]
        </p>
      </div>
    </>
  )
}