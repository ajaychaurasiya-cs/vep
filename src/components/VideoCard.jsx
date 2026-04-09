export default function VideoCard({ title, description, driveLink, thumbnail }) {
    // Function to extract Google Drive video ID
    const getDriveId = (url) => {
      const match = url.match(/\/file\/d\/([^\/]+)/);
      return match ? match[1] : null;
    };
  
    const videoId = getDriveId(driveLink);
  
    return (
      <div className="bg-linear-to-bl from-pink-500  to-yellow-500 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
        <div className="relative pb-[56.25%] bg-gray-200">
          {videoId ? (
            <iframe
              src={`https://drive.google.com/file/d/${videoId}/preview`}
              className="absolute top-0 left-0 w-full h-full"
              allow="autoplay"
              title={title}
            />
          ) : (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-gray-500">
              Video Preview
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <a
            href={driveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white  px-4 py-2 rounded hover:bg-gradient-to-br hover:font-semibold hover:to-blue-500 ransition-colors"
          >
            View Full Video
          </a>
        </div>
      </div>
    );
  }