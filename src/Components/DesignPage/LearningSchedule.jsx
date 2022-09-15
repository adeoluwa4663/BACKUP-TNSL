import {useState} from 'react'
import up from '../../assets/icons/up.svg'
import down from '../../assets/icons/down.svg'
import '../../Styles/Design.scss'

const ExpandableText = ({ children, descriptionLength }) => {
  const fullText = children;

  const icon1 = <img src={down} alt='' width='25em' />
  const icon2 = <img src={up} alt='' width='25em' />

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <p className='text'>
      {isExpanded ? fullText : `${fullText.slice(0, descriptionLength)}...`}
      <span onClick={toggleText} className='icon'>
        {isExpanded ? icon2 : icon1}
      </span>
    </p>
  );
};

function LearningSchedule() {
    return(
        <div className='body'>
            <h4 className='header'>LEARNING SCHEDULE</h4>
            <p className='subheader'>
                GET THE DIGITAL SKILLS REQUIRED IN 
                OUR EVERGROWING TECHNOLOGY AND MEET. 
            </p>
            <div className='module'>
                <p className='topic'>MODULE 1: INTRODUCTION TO UX DESIGN</p>
                <p className='content'>
                    <ExpandableText className='icon' descriptionLength={31}>
                        GET THE DIGITAL SKILLS REQUIRED IN OUR EVERGROWING TECHNOLOGY AND MEET OUR CLASS OF MENTORS.
                    </ExpandableText>
                </p>
                <hr />
            </div>
            <div className='module'>
                <p className='topic'>MODULE 1: INTRODUCTION TO UX DESIGN</p>
                <p className='content'>
                    <ExpandableText className='icon' descriptionLength={31}>
                        GET THE DIGITAL SKILLS REQUIRED IN OUR EVERGROWING TECHNOLOGY AND MEET OUR CLASS OF MENTORS.
                    </ExpandableText>
                </p>
                <hr />
            </div>
            <div className='module'>
                <p className='topic'>MODULE 1: INTRODUCTION TO UX DESIGN</p>
                <p className='content'>
                    <ExpandableText className='icon' descriptionLength={31}>
                        GET THE DIGITAL SKILLS REQUIRED IN OUR EVERGROWING TECHNOLOGY AND MEET OUR CLASS OF MENTORS.
                    </ExpandableText>
                </p>
                <hr />
            </div>
            <div className='module'>
                <p className='topic'>MODULE 1: INTRODUCTION TO UX DESIGN</p>
                <p className='content'>
                    <ExpandableText className='icon' descriptionLength={31}>
                        GET THE DIGITAL SKILLS REQUIRED IN OUR EVERGROWING TECHNOLOGY AND MEET OUR CLASS OF MENTORS.
                    </ExpandableText>
                </p>
                <hr />
            </div>
            <div className='module'>
                <p className='topic'>MODULE 1: INTRODUCTION TO UX DESIGN</p>
                <p className='content'>
                    <ExpandableText className='icon' descriptionLength={31}>
                        GET THE DIGITAL SKILLS REQUIRED IN OUR EVERGROWING TECHNOLOGY AND MEET OUR CLASS OF MENTORS.
                    </ExpandableText>
                </p>
                <hr />
            </div>
        </div>
    )
}

export default LearningSchedule