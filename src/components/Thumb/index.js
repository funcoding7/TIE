import React from "react";
import { Image } from "./Thumb.styles";
const Thumb = ({ imageId, image }) => (
    <div>
        <Image src={image} alt='movie-thumb' />
    </div>
)
export default Thumb;