import React from 'react';

interface Comment {
  name: string;
  country: string;
  rating: number;
  comment: string;
}

const comments: Comment[] = [
  {
    name: 'yanisllorens',
    country: 'FR',
    rating: 4.7,
    comment: 'I think eversonaguilar has a great talent, he knows how to manage an order well and does well, for the value for money it\'s great and you will get a satisfactory result. He is not yet at the level of a top professional but if you want a very...',
  },
  {
    name: 'haishan',
    country: 'TW',
    rating: 5,
    comment: 'Although it is the first stage of the project, the creator is very clear about what he is doing! From 3D production to Unity applications, He know a lot, and a well-communicated fiverr user.',
  },
  {
    name: 'ankhotep',
    country: 'VE',
    rating: 5,
    comment: 'Everson managed to complete all the requirements with efficiency, on time. He proved to show professionalism and high attention to detail which is something I was looking for. Thanks.',
  },
  {
    name: 'cinematicmediap',
    country: 'US',
    rating: 5,
    comment: 'Excelente!! 100% recomendado',
  },
  {
    name: 'omarfattah530',
    country: 'BA',
    rating: 5,
    comment: 'Amazing work, he was willing to fix all issues for me and made an amazing environment, really would recommend him to everybody. 👏👏👏',
  },
  {
    name: 'ind1goblue',
    country: 'DE',
    rating: 5,
    comment: 'Very happy with the work done. Can highly recommend.',
  },
];

const CommentsList: React.FC = () => {
  return (
    <div className="  mt-5 space-y-4">
      {comments.map((comment, index) => (
        <div
          key={index}
          className="bg-message p-3 rounded-lg shadow-sm border border-gray-200 max-w-md mx-auto"
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
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
