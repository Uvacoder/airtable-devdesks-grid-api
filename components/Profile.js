import React from 'react';
import PropTypes from 'prop-types';
import { FaTwitter, FaExternalLinkAlt } from 'react-icons/fa';
import { Transformation, Image } from 'cloudinary-react';

const Profile = ({ user }) => {
    return (
        <>
            <div className="max-w-screen-md mx-auto">
                <h1 className="text-4xl my-4 text-center">{user.name}</h1>
                {user.description && (
                    <>
                        <p className="font-bold text-lg">About</p>
                        <p className="my-2 ">{user.description}</p>
                    </>
                )}
                <div className="flex mb-10">
                    <a
                        className="mr-4"
                        href={`https://www.twitter.com/${user.twitterUsername}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaTwitter />
                    </a>
                    {user.usesLink && (
                        <a
                            className="mr-2"
                            href={user.usesLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaExternalLinkAlt />
                        </a>
                    )}
                </div>
            </div>
            <Image
                cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
                publicId={user.imgId || 'dev_setups/placeholder-image_vcbif2'}
                className="rounded-md shadow-lg mx-auto"
            >
                <Transformation width="800" crop="fill" />
            </Image>
        </>
    );
};

Profile.propTypes = {
    user: PropTypes.object.isRequired,
};

export default Profile;
