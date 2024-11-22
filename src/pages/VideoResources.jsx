import React from 'react';
import { FaYoutube } from 'react-icons/fa';

const VideoResources = () => {
  const videos = [
    {
      title: 'Web Development Fundamentals',
      description: 'Learn HTML, CSS, JavaScript, and frameworks to build dynamic web applications and websites from scratch.',
      link: 'https://www.youtube.com/watch?v=HcOc7P5BMi4',
    },
    {
      title: 'Data Science Essentials',
      description: 'Extract insights from data using Python, R, SQL, visualization tools (Tableau, Power BI), machine learning algorithms, and statistical modeling',
      link: 'https://www.youtube.com/watch?v=-ETQ97mXXF0',
    },
    {
      title: 'Software Testing Fundamentals',
      description: 'Understand testing methodologies, test planning, automation, and quality assurance to ensure software reliability and stability.',
      link: 'https://youtube.com/playlist?list=PLwbMf8x0S9vBcE3i5qtf0BrqXS9OZ1LXR&si=7y-08S4Ix_rwLmmH',
    },
    {
      title: 'Mobile App Development with React Native',
      description: 'Build cross-platform mobile apps using React, JavaScript, and Native components for iOS and Android.',
      link: 'https://youtu.be/ZBCUegTZF7M?si=QFSpI9A5NC3Ef1PK',
    },
    {
      title: 'DevOps for Agile Teams',
      description: 'Implement continuous integration, delivery,Automate deployment,scaling, monitoring and deploying pipelines using Agile methodologies, Docker, and cloud platforms.',
      link: 'https://youtu.be/hQcFE0RD0cQ?si=tbDOWdmYX2Q2x9V9',
    },
    {
      title: 'ML Fundamentals',
      description: 'Learn machine learning basics: supervised/unsupervised learning, regression, classification, neural networks, deep learning, and model evaluation using Python and libraries.',
      link: 'https://youtu.be/i_LwzRVP7bg?si=QNUK6xApAVAkb2hF',
    },
  ];

  return (
    <div className="container mx-auto my-10 p-8 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-blue-800 text-center mb-6">Explore these Courses</h1>
      <p className="text-lg text-gray-600 text-center mb-12">
        Dive into these courses to gain a better understanding of your domain. 
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">{video.title}</h2>
            <p className="text-gray-600 mb-4">{video.description}</p>
            <a
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-white bg-blue-800 hover:bg-blue-500 py-2 px-4 rounded-lg transition-colors duration-300"
            >
              <FaYoutube className="mr-2" /> Watch Video
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoResources;
