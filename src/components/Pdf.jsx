import pdf from "../assets/CV-SalvadorCahuana.pdf"

export default function Pdf () {
  return (
    <div style={{position:"absolute", width:"100%", height:"100%"}}>
      <object data={pdf} type="application/pdf" width="100%" height="100%">
      </object>
    </div>
  )
}