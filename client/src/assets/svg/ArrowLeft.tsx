const ArrowLeft = () => (
    <svg 
            id="Layer_1" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            width="24" 
            height="24"
        >
            <line 
                className="arrow-line" 
                x1="2.5" 
                y1="12" 
                x2="23.5" 
                y2="12" 
                fill="none" 
                stroke="currentColor" 
                strokeMiterlimit="10"
            />
            <polyline 
                className="arrow-polyline" 
                points="10.14 4.36 2.5 12 10.14 19.64" 
                fill="none" 
                stroke="currentColor" 
                strokeMiterlimit="10"
            />
        </svg>
);

export default ArrowLeft;