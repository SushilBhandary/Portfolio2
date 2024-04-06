import Image from 'next/image';
import { FC } from 'react';

interface ProfilePicProps {}

const ProfilePic: FC<ProfilePicProps> = ({}) => {
    return (
        <div className="">
            <Image
                alt="Sushil Bhandary"
                src="/images/sushil.jpg"
                height={120}
                width={120}
                className="object-cover border-4 border-white rounded-full shadow-md h-32 w-32"
            />
        </div>
    );
};

export default ProfilePic;
