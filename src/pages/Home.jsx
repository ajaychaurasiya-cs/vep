import VideoCard from '../components/VideoCard';
import pr from '../assets/pr.webp';
import ae from '../assets/ae.webp';
import ps from '../assets/ps.webp';
import ai from '../assets/ai.webp';
import fl from '../assets/fl.webp';
import ca from '../assets/ca.webp';
import ma from '../assets/ma.webp';

const tools = [
  {pic:pr, name:"Primiere Pro"},
  {pic:ae, name:"After Effects"},
  {pic:ps, name:"Photoshop"},
  {pic:ca, name:"Cartoon animator 4"},
  {pic:fl, name:"FL-Studio"},
  {pic:ai, name:"Ai tools"},
  {pic:ma, name:"Mobile Apps"},
]

const videoProjects = [
  {
    title: "Commercial Advert",
    description: "A 30-second commercial for a local business",
    driveLink: "https://drive.google.com/file/d/1lP5SA6C2MByW68C60VUdiao4MVP_Ux49/view",
  },
  {
    title: "Reels and Short",
    description: "Cinematic reel and short video",
    driveLink: "https://drive.google.com/file/d/16GxySfwF8kMIUrYwgyC7DADhgYbVFtS_/view",
  },
  {
    title: "Music Video",
    description: "Indie band music video production",
    driveLink: "https://youtu.be/pnS8kt6Ncxk?si=-3fUJObN8gmS219W",
  },
  {
    title: "2d Animation cartoon",
    description: "10-minute 2d animation video",
    driveLink: "https://youtu.be/DbIuR1Gvba4?si=bDc20jifnXmSSgNh",
    
  },
];

export default function Home() {
  return (
    <div>
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-6 text-primary">Ajay Chaurasiya</h1>
        <p className="text-xl text-gray-700">
          Professional video editing services with a creative touch
        </p>

        <h4 className='text-xl font-bold '>Services here</h4>
        <div className='font-bold flex gap-3 flex-wrap bg-slate-300 p-6 rounded-lg shadow-md'>
        <p>- Video Editor </p>
        <p>- 2D Animator</p>
        <p>- Sound Design</p>
        <p>- Graphic Design</p>
        <p>- Motion Graphics</p>
        <p>- Image/Photo Editor</p>
        <p>- UI&UX Designer </p>
        </div>
        
        <h3 className="text-xl font-bold mt-5">Professional Tools</h3>
        
          <div className="flex flex-wrap gap-3">
        {tools.map((c,i)=>{
          return(
          <div className="bg-slate-300 rounded-lg p-1">
            <span key={i} className="grid justify-items-center ">
              <img className=' w-20 h-20 rounded-lg' src={c.pic} alt={c.name} />
              <p>{c.name}</p>
            </span>
          </div>
          )
        })}
        </div>
        
        
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoProjects.map((project, index) => (
            <VideoCard
              key={index}
              title={project.title}
              description={project.description}
              driveLink={project.driveLink}
            />
          ))}
        </div>
      </section>
    </div>
  );
}