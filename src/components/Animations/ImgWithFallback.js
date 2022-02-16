import React, {Component} from 'react';

const ImgWithFallback = ({
                             src,
                             classNameSrc,
                             fallback,
                             type = 'image/webp',
                             ...delegated
                         }) => {
                                    return (
                                        <picture>
                                            <source className={classNameSrc} srcSet={src} type={type} />
                                            <img src={fallback} {...delegated} />
                                        </picture>
                                    );
                               };


export default ImgWithFallback;
