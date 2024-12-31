

import pascallogo from '../assets/pascal-logo.jpg'

function Header(){


    return (
        <div className='header-main-div'>
        
        <img className='top-image' src={pascallogo} alt='no image found' ></img>
        <div className='student-identity'> 
            STUDENT IDENTITY CARD
        </div>
        </div>
);
}

export default Header