import logo from './logo.svg';
import "./style.css";
import locationimg from'./images/Subtract.svg';
import eventimg from './images/image_event.svg';


function App() {
  return (
    <div className="App">
      <div>
      <div>
        <div className='divs-container'>
        <div className="small-div red" id="pos1"></div>
        <div className="small-div white" id="pos2"></div>
        <div className="small-div red" id="pos3"></div>
        <div className="small-div white" id="pos4"></div>
        </div>
        <div className="event " id="red-div">
          <img id="event-image" src={eventimg} />
        </div>
        <div id="event-namediv"><p>EVENT NAME</p></div>
        <div className="event" id="white-div"></div>
      </div>
      <div className ="eventt">
        <div className="event-desc" id="red-descdiv"></div>
        <div className="event-desc " id="white-descdiv">
          <h4 className="font-set-heading">ABOUT</h4>
          <p className="font-sizeset"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown. It has survived not only five centuries, but also  typesetting, remaining essentially unchanged. It was popularised Ipsum passages, and more recently with like Aldus PageMaker including versions of Lorem Ipsum.

</p>
          <h4 className="font-set-heading">VENUE</h4>
          <p className="font-sizeset"><img id ="location-img" src={locationimg} />APJ HALL,Main block,Ground floor</p>
          <div className="venue-container">
         <div className="venue-divchild">
         <div className="overlay-div"><p className ="pos-insidediv" >TIME :</p></div>
         </div>
         <div className="venue-divchild">
          <div className="overlay-div" id="red-smalldiv"><p className ="pos-insidediv">DATE :</p></div>
         </div>
        <div className="venue-divchild">
        <div className="overlay-div"><p className ="pos-insidediv">REG FEE :</p></div>
        </div>
        </div>


          <h5 className="font-set-subheading" id="contact">CONTACT</h5>
          <div className="contact-div">
          <div className='contact-inner-div'>
            <h4>Name1 </h4>
            <p className='no-pos'>1234567890</p>
            <p className='no-pos em'>eg@egmail.com</p>
            
             </div>
          <div className='contact-inner-div'>
          <h4>Name2</h4>
          <p className='no-pos'>1234567890</p>
          <p className='no-pos em'>eg@egmail.com</p>
            
            </div>
          <div className='contact-inner-div'>
          <h4>Name3</h4>
          <p className='no-pos'>1234567890</p>
          <p className='no-pos em'>eg@egmail.com</p>
           
          </div>
          </div>
          
          <h5 className="font-set-subheading" id="prices">PRICES WORTH </h5>
          </div>
     
        </div>
        <div id="button-div">
        <button id="register-button">REGISTER NOW</button>
        </div>
        
          <div id="bottom-center-reddiv">

          </div>
          <div id="bottom-left-whitediv">

          </div>
         <div id="bottom-right-whitediv">

         </div>
          
        
      </div>
      
    </div>
    
  );
}

export default App;
