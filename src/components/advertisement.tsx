import Image from "next/image";
import React from "react";
import ExampleAd from '~/assets//images/eucalyptus-oil-ad.png';

const Advertisement: React.FC = () => {
    return (
        <div className='flex justify-center object-cover flex-col items-center h-full w-full'>
            <Image className="object-cover" src={ExampleAd} alt="Eucalyptus Oil Ad"/>
        </div>
    );
}

export default Advertisement;