import VideoCard from '../components/VideoCard';

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
        <div className='font-bold grid'>
        <p>- Video Editor </p>
        <p>- 2D Animator</p>
        <p>- Sound Design</p>
        <p>- Graphic Design</p>
        <p>- Motion Graphic</p>
        <p>- Image/Photo Editor</p></div>
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