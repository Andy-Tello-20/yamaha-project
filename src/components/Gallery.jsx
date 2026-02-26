// import { useState } from "react"
// import img1 from "../assets/DSC_0065-01.jpeg"
// import img2 from "../assets/DSC_0067-01.jpeg"
// import img3 from "../assets/DSC_0068-01.jpeg"
// import img4 from "../assets/DSC_0069-01.jpeg"
// import img5 from "../assets/DSC_0070-01.jpeg"
// import img6 from "../assets/DSC_0071-01.jpeg"

// import img8 from "../assets/DSC_0073-01.jpeg"
// import img9 from "../assets/DSC_0080-01.jpeg"
// import img10 from "../assets/DSC_0073-01.jpeg"
// import img11 from "../assets/DSC_0082-01.jpeg"

// const images = [img1, img2, img3,img4, img5, img6 ,  img8, img9, img10]

// export default function Gallery() {
//   const [selected, setSelected] = useState(images[0])

//   return (
//     <section className="section">
//       <h2 style={{ marginBottom: "20px" }}>Galería</h2>

//       <img 
//         src={selected}
//         style={{
//           width: "100%",
//           borderRadius: "12px",
//           aspectRatio: "4/3",
//           objectFit: "cover"
//         }}
//       />

//       <div style={{
//         display: "flex",
//         gap: "10px",
//         marginTop: "15px",
//         overflowX: "auto",
//         paddingBottom: "10px"
//       }}>
//         {images.map((img, index) => (
//           <img 
//             key={index}
//             src={img}
//             onClick={() => setSelected(img)}
//             style={{
//               width: "80px",
//               height: "60px",
//               objectFit: "cover",
//               cursor: "pointer",
//               borderRadius: "6px",
//               flexShrink: 0
//             }}
//           />
//         ))}
//       </div>
//     </section>
//   )
// }


import { useState } from "react"
import "../styles/gallery.css"
import img1 from "../assets/DSC_0065-01.jpeg"
import img2 from "../assets/DSC_0067-01.jpeg"
import img3 from "../assets/DSC_0068-01.jpeg"
import img4 from "../assets/DSC_0069-01.jpeg"
import img5 from "../assets/DSC_0070-01.jpeg"
import img6 from "../assets/DSC_0071-01.jpeg"

import img8 from "../assets/DSC_0073-01.jpeg"
import img9 from "../assets/DSC_0080-01.jpeg"
import img10 from "../assets/DSC_0073-01.jpeg"
import img11 from "../assets/DSC_0082-01.jpeg"

const images = [img10, img9, img2, img3, img6,  img4, img5 , img1,  img11]

export default function Gallery() {
  const [selected, setSelected] = useState(images[0])

  return (
    <section className="section">
      <h2>Galería</h2>

      <div className="gallery-main">
        <img src={selected} alt="Moto seleccionada" />
      </div>

      <div className="thumbnails">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            onClick={() => setSelected(img)}
          />
        ))}
      </div>
    </section>
  )
}