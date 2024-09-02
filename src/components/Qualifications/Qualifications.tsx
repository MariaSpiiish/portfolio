import Slider from "../Slider/Slider";

type PropsType = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setImg: React.Dispatch<React.SetStateAction<string>>
}

function Qualifications({ setIsOpen, setImg }: PropsType) {
  return (
    <main className="qual">
      <div className="qual__carousel">
        <Slider setIsOpen={setIsOpen} setImg={setImg}/>  
      </div>
    </main>
  )
}

export default Qualifications