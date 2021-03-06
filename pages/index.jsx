// < !-- < html >

//   <body>
//     <div id="app"></div>
//     <script type="text/javascript">
//         // app id를 가진 div 선택
//       const app = document.getElementById('app')
//       // h1 tag 생성
//       const header = document.createElement('h1')
//       // h1엘리먼트 생성
//       const headerContent = document.createTextNode(
//       'BlaBlaBla'
//       )
//       // header에 자식으로 headerContent를 넣어줌
//       header.appendChild(headerContent)
//       // app id에 자식으로 header를 넣어줌
//       app.appendChild(header)


//     </script>
//   </body>

// </html >

//   - Dom을 plain js로 작성하는것은 매우 강력하지만 너무 장황하다. -- >

// < !--index.html -->


import { useState } from 'react'



function createTitle(title) {
  if (title) {
    return title
  } else {
    return 'Default title'
  }
}

function Header({ title }) {
  return (<h1>{createTitle(title)}</h1>)
}

function Subtitle({ subtitle }) {
  return (<h2>{createTitle(subtitle)}</h2>)
}



export default function HomePage() {
  const names = ['Jiun', 'Jihyun']
  const [likes, setLikes] = React.useState(0)

  function handleClick() {
    setLikes(likes + 1)
  }

  return (
    <div>
      <Header title="Hello React!" />
      <Header title="My name is Jiun!" />
      <Subtitle subtitle="I have sister" />
      <ul>
        {names.map(name => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Likes ({likes})</button>

    </div>
  )
}

