import React from "react";
import './ImageContainer.css'
type ImageConatainerProps = {
    // using `interface` is also ok
    imgsrc: string;
  };

class ImageConatainer extends React.Component<ImageConatainerProps> {


    render(): React.ReactNode {
        return(
            <div className="ImageCont">
                <img src={this.props.imgsrc}/>
            </div>
        )
    }
}
export default ImageConatainer;
