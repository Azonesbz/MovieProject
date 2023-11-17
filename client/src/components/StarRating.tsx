import React from 'react';

interface StarRatingProps {
    rating: number;
    voteCount: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, voteCount }) => {
    const starIcons: JSX.Element[] = [];

    for (let i = 1; i <= 10; i++) {
        const starClassName = i <= rating ? 'text-yellow-300' : 'text-gray-300';

        starIcons.push(
            <svg
                key={i}
                className={`w-4 h-4 ${starClassName} mr-1`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
            >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>,
        );
    }

    return (
        <span className="flex items-center">
            {starIcons}
            <span className="ml-1 text-sm whitespace-nowrap font-medium text-gray-500 dark:text-gray-400">
                {rating} sur {voteCount} avis
            </span>
        </span>
    );
};

export default StarRating;