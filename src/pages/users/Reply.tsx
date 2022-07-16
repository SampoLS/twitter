import styled from "styled-components";

export default function Reply({ single }: any) {
  return (
    <Section>
      <div className='close'>
        <span>X</span>
      </div>
      <div className='box'>
        <div className='avatar'>
          <img src={single.avatarUrl} alt="" />
        </div>
        <div className='info'>
          <div>name</div>
          <div>desc</div>
          <div className='reply-to'>account</div>
        </div>
      </div>
    </Section>
  )
}

const Section = styled.section`
  width: 550px;
  height: 450px; 
  background: red;
  border-radius: 10px;
  .close {
    span {
      display: inline-block;
      padding-top: 10px;
      padding-left: 10px;
    }
  }

  .box {
    display: flex;
    margin-top: 30px;
    padding-left: 20px;
    .avatar {
      width: 50px;
      height: 50px;
      border-radius: 100%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .info {
      margin-left: 20px;
    }
  }
`;