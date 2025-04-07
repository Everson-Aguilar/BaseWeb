import React from 'react';
import { motion } from 'framer-motion';  // Import motion

interface Comment {
  name: string;
  country: string;
  rating: number;
  comment: string;
}

const comments: Comment[] = [
  {
    name: 'yanisllorens',
    country: 'France',
    rating: 4.7,
    comment: 'I think eversonaguilar has a great talent, he knows how to manage an order well and does well, for the value for money it\'s great and you will get a satisfactory result. He is not yet at the level of a top professional but if you want a very...',
  },
  {
    name: 'haishan',
    country: 'Taiwan',
    rating: 5,
    comment: 'Although it is the first stage of the project, the creator is very clear about what he is doing! From 3D production to Unity applications, he knows a lot, and is a well-communicated Fiverr user.',
  },
  {
    name: 'ankhotep',
    country: 'Venezuela',
    rating: 5,
    comment: 'Everson managed to complete all the requirements with efficiency, on time. He proved to show professionalism and high attention to detail which is something I was looking for. Thanks.',
  },
  {
    name: 'cinematicmediap',
    country: 'United States',
    rating: 5,
    comment: 'Excellent!! 100% recommended',
  },
  {
    name: 'omarfattah530',
    country: 'Bosnia and Herzegovina',
    rating: 5,
    comment: 'Amazing work, he was willing to fix all issues for me and made an amazing environment, really would recommend him to everybody. 👏👏👏',
  },
  {
    name: 'ind1goblue',
    country: 'Germany',
    rating: 5,
    comment: 'Very happy with the work done. Can highly recommend.',
  },
];

const CommentsList: React.FC = () => {
  return (
    <section>
      <h2 className="font-BebasNeue text-3xl text-green p-5">
        CLIENT EXPECTATIONS{" "}
      </h2>

      <section className="mt-5 space-y-4">
        {comments.map((comment, index) => (
          <motion.div
            key={index}
            className="bg-message p-3 rounded-lg shadow-sm border border-gray-200 max-w-md mx-auto"
            whileInView={{
              opacity: 1, // Make the comment visible
              scale: 1,   // Scale to its original size
            }}
            initial={{
              opacity: 0, // Start invisible
              scale: 0.8, // Start smaller
            }}
            transition={{
              duration: 1,         // Duration of the animation
              ease: "easeInOut",   // Smooth out the animation
            }}
            viewport={{ once: false }} // Repeat every time it enters or exits
          >
            <div className="flex justify-between">
              <div>
                <h3 className="text-lg font-semibold">{comment.name}</h3>
                <p className="text-sm text-gray-500">{comment.country}</p>
              </div>
              <div>
                <p className="text-yellow-500 font-semibold">{comment.rating} / 5</p>
              </div>
            </div>
            <div className="mt-2 text-sm text-gray-600">
              <p>{comment.comment}</p>
            </div>
          </motion.div>
        ))}
      </section>
    </section>
  );
};

export default CommentsList;
