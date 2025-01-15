import pdf from "../assets/Salvador-Cahuana-CV.pdf"

export default function Pdf () {
  return (
    <div style={{position:"absolute", width:"100%", height:"100%"}}>
      <object data={pdf} type="application/pdf" width="100%" height="100%">
      </object>
    </div>
  )
}