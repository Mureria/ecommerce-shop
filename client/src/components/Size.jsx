import React, { useEffect, useState } from 'react';

function SizeSelector() {
    const [selectedSize, setSelectedSize] = useState(() => {
        // Initialize selected size from local storage if exists
        const storedSize = localStorage.getItem('selectedSize');
        return storedSize ? storedSize : null;
      });

 useEffect(() => {
    // Save selected size to local storage whenever it changes
    localStorage.setItem('selectedSize', selectedSize);
  }, [selectedSize]);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className=' flex gap-10'>
      <p>Size:</p>
      <div className="flex flex-wrap gap-2">
        <p
          className={`border py-0 px-2 text-center cursor-pointer ${
            selectedSize === '36' ? 'border-orange-600' : ''
          }`}
          onClick={() => handleSizeClick('36')}
        >
          36
        </p>
        <p
          className={`border py-0 px-2 text-center cursor-pointer ${
            selectedSize === '37' ? 'border-orange-600' : ''
          }`}
          onClick={() => handleSizeClick('37')}
        >
          37
        </p>
        <p
          className={`border py-0 px-2 text-center cursor-pointer ${
            selectedSize === '38' ? 'border-orange-600' : ''
          }`}
          onClick={() => handleSizeClick('38')}
        >
          38
        </p>
        <p
          className={`border py-0 px-2 text-center cursor-pointer ${
            selectedSize === '39' ? 'border-orange-600' : ''
          }`}
          onClick={() => handleSizeClick('39')}
        >
          39
        </p>
        <p
          className={`border py-0 px-2 text-center cursor-pointer ${
            selectedSize === '40' ? 'border-orange-600' : ''
          }`}
          onClick={() => handleSizeClick('40')}
        >
          40
        </p>
        <p
          className={`border py-0 px-2 text-center cursor-pointer ${
            selectedSize === '41' ? 'border-orange-600' : ''
          }`}
          onClick={() => handleSizeClick('41')}
        >
          41
        </p>
        <p
          className={`border py-0 px-2 text-center cursor-pointer ${
            selectedSize === '42' ? 'border-orange-600' : ''
          }`}
          onClick={() => handleSizeClick('42')}
        >
          42
        </p>
        <p
          className={`border py-0 px-2 text-center cursor-pointer ${
            selectedSize === '44' ? 'border-orange-600' : ''
          }`}
          onClick={() => handleSizeClick('44')}
        >
          44
        </p>
        <p
          className={`border py-0 px-2 text-center cursor-pointer ${
            selectedSize === '45' ? 'border-orange-600' : ''
          }`}
          onClick={() => handleSizeClick('45')}
        >
          45
        </p>
      </div>
    </div>
  );
}

export default SizeSelector;
