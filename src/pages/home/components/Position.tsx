import styled from "styled-components";

export default function Position() {
  return (
     <Box>
       <div>
         <span className="icon">
           <svg viewBox="0 0 24 24" aria-hidden="true">
             <g><path d="M18.265 3.314c-3.45-3.45-9.07-3.45-12.52 0-3.45 3.44-3.45 9.06 0 12.51 1.5 1.49 3.43 2.38 5.51 2.56v4.14c0 .31.2.6.5.7.08.03.17.05.25.05.22 0 .44-.1.59-.29l6.49-8.11c2.63-3.49 2.27-8.47-.82-11.56zm-10.56 7.87c0-.41.33-.75.75-.75h4.05c.41 0 .75.34.75.75s-.34.75-.75.75h-4.05c-.42 0-.75-.34-.75-.75zm8.6-3.24c0 .42-.34.75-.75.75h-7.1c-.42 0-.75-.33-.75-.75 0-.41.33-.75.75-.75h7.1c.41 0 .75.34.75.75z"></path></g>
          </svg>
         </span>
       </div>
       <div className="location"><span>Travel</span></div>
       <div className="dot-wrapper"><span className="dot"></span></div>
       <div className="see-more"><span>See more</span></div>
     </Box>
  )
}

const Box = styled.div`
  padding-left: 2rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
  display: flex;
  .icon {
    width: 20px;
    height: 20px;
    display: block;
  }
  .location {
    font-size: 0.8rem;
    font-weight: bold;
    font-family: roboto;
    margin-left: 0.5rem;
    display: flex;
    align-items: center;
  }
  .dot-wrapper {
    display: flex;
    align-items: center;
    margin-left: 0.4rem;
    .dot {
      width: 3px;
      height: 3px;
      border-radius: 50%;
      display: block;
      background: black;
    }
  }
  .see-more {
    font-size: 0.8rem;
    font-family: roboto;
    color: dodgerblue;
    display: flex;
    align-items: center;
    margin-left: 0.4rem;
    font-weight: bold;
  }
`;
