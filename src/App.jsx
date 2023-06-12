import './App.css'
import People from './Components/People'

const people = [
  {
    id:"1",
    name:"Annur Akbar Bahagia",
    old:"20",
    addres:"Indramayu",
    description:"saya adalah seorang mahasiswa akselerasi, yang mempunyai bakat di bidang pemrograman",
    photos:"https://pbs.twimg.com/media/FcgckjuakAAvqts.jpg"
  },
  {
    id:"2",
    name:"Andriansyah",
    old:"22",
    addres:"Cirebon",
    description:"saya adalah seorang backend dev",
    photos:"https://asset.kompas.com/crops/DiAtyCgFJJ71Mm8iCDoan8upSes=/0x0:900x600/750x500/data/photo/2020/01/06/5e13292ee0f21.jpg"
  },
  {
    id:"3",
    name:"Azhari Fahreza L",
    old:"20",
    addres:"PSD",
    description:"saya adalah manusia setengah musang",
    photos:"https://asset.kompas.com/crops/hVT3MXGAQJ08zOBqe9W8ykCo9j8=/4x101:998x764/750x500/data/photo/2019/07/30/5d4050014c9eb.jpg"
  },
]

function App() {

  return (
    <>
      <div id='container'>
        {
          people.map((value)=>{
            return <People key={value.id} name={value.name} img={value.photos} des={value.description}/>
          })
        }
      </div>
    </>
  )
}

export default App
